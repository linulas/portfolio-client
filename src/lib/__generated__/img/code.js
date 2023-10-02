// @ts-nocheck
import meta from '$lib/images/code.png?w=1440&as=meta:height;width;src';
import smallMeta from '$lib/images/code.png?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/code.png?w=2560;1440;1344;768;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/code.png?w=2560;1440;1344;768;672;384&format=png&srcset';
import small from '$lib/images/code.png?w=384';
import medium from '$lib/images/code.png?w=672';
import large from '$lib/images/code.png?w=1440';
const { height, src, width } = meta;
const data = {
  slug: 'code.png',
  width,
  height,
  src,
  small,
  medium,
  large,
  mobile: smallMeta,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/png' },
  ],
  dominantColour: '#282828',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAiBY//8QAFxABAAMAAAAAAAAAAAAAAAAAAAIRMf/aAAgBAQABPwCWqf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z',
};
export { data as default };
