// @ts-nocheck
import meta from '$lib/images/kvix.png?width=1263&metadata';
import srcsetwebp from '$lib/images/kvix.png?w=1263;768;672;384&webp&srcset';
import srcsetauto from '$lib/images/kvix.png?w=1263;768;672;384&png&srcset';
import small from '$lib/images/kvix.png?width=384';
import medium from '$lib/images/kvix.png?width=672';
import large from '$lib/images/kvix.png?width=1440';
const { height, src, width } = meta;
const data = {
  slug: 'kvix.png',
  width,
  height,
  src,
  small,
  medium,
  large,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/png' },
  ],
  dominantColour: '#181818',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAMDIv//EABgQAAIDAAAAAAAAAAAAAAAAAAERECIx/9oACAEBAAE/AKrC4//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q==',
};
export { data as default };
