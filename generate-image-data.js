import fs from 'fs';
import path from 'path';
import { makeDirectory } from './src/lib/utils/file.js';
import {
	dominantColour,
	lowResolutionPlaceholder,
	metadata,
	IMAGES_PATH
} from './src/lib/utils/image.js';

const __dirname = path.resolve();
const formats = ['webp', 'auto'];
const sizes = [672];
const densities = [1.0, 2.0];
const maxWidth = sizes[sizes.length - 1];

// use sizes and densities arrays to determine the actual output widths needed
const outputSizes = [];
sizes.forEach((sizesElement) => {
	densities.forEach((densitiesElement) => outputSizes.push(densitiesElement * sizesElement));
});
outputSizes.sort((a, b) => b - a);

async function generateImageMeta(source, slug) {
	const metaPromises = [metadata(source), dominantColour(source), lowResolutionPlaceholder(source)];
	const [metadataResult, dominantColourObject, placeholder] = await Promise.all(metaPromises);
	const { format, width, height } = metadataResult;
	const { r, g, b } = dominantColourObject;
	const dominantColourValue = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
	return { dominantColour: dominantColourValue, placeholder, format, width, height, slug };
}

const main = async () => {
	try {
		const location = path.join(__dirname, IMAGES_PATH);
		const GENERATED_DIR = 'src/lib/__generated__/img';
		const slugs = fs.readdirSync(location);

		const imageMetaPromises = slugs.map(async (slug) => {
			const source = path.join(__dirname, 'src/lib/images/', slug);
			return generateImageMeta(source, slug);
		});
		const images = await Promise.all(imageMetaPromises);

		console.log(`Generating image metadata...`);
		const imgDataDir = path.join(__dirname, GENERATED_DIR);
		await makeDirectory(imgDataDir);
		const validSlugs = [];

		images.forEach((image) => {
			const { dominantColour, format, placeholder, width, slug } = image;
			const slugWithoutImageExt = `${slug.substring(0, slug.indexOf('.'))}`;
			validSlugs.push(`'${slugWithoutImageExt}'`);
			const dataPath = path.join(imgDataDir, `${slugWithoutImageExt}.js`);
			const source = `$lib/images/${slug}`;
			const srcsetImportArray = formats.map(
				(formatsElement) =>
					`import srcset${formatsElement} from '${source}?w=${
						width < outputSizes[0] ? `${width};` : ''
					}${outputSizes.filter((outputSizesElement) => outputSizesElement <= width).join(';')}&${
						formatsElement === 'auto' ? format : formatsElement
					}&srcset';`
			);
			const sources = `[\n${formats
				.map(
					(formatsElement) =>
						`    { srcset: ${`srcset${formatsElement}`}, type: ${
							formatsElement === 'auto' ? `'image/${format}'` : `'image/${formatsElement}'`
						} },`
				)
				.join('\n')}\n  ]`;
			const result = `import meta from '${source}?width=${Math.min(maxWidth, width)}&metadata';
${srcsetImportArray.join('\n')}
const { height, src, width } = meta;
const data = {
  slug: '${slug}',
  width,
  height,
  src,
  sources: ${sources},
  dominantColour: '${dominantColour}',
  placeholder:
    '${placeholder}',
};
export { data as default };
`;
			fs.writeFileSync(dataPath, result, 'utf-8');
		});
		const types = `type ValidImage = ${validSlugs.join('|')};`;
		fs.writeFileSync(`${GENERATED_DIR}/types.d.ts`, types, 'utf-8');
	} catch (error) {
		console.log(`Error generating blog post responsive image data: ${error}`);
	}
};

main();
