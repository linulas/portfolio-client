// @ts-nocheck
import meta from '$lib/images/dataportal.png?w=1270&as=meta:height;width;src';
import smallMeta from '$lib/images/dataportal.png?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/dataportal.png?w=1270;768;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/dataportal.png?w=1270;768;672;384&format=png&srcset';
import small from '$lib/images/dataportal.png?w=384';
import medium from '$lib/images/dataportal.png?w=672';
import large from '$lib/images/dataportal.png?w=1440';
const { height, src, width } = meta;
const data = {
  slug: 'dataportal.png',
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
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAMTYFv/EABoQAAICAwAAAAAAAAAAAAAAAAABAhETUqH/2gAIAQEAAT8AjVptGaOi6f/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ABQv/9k=',
};
export { data as default };
