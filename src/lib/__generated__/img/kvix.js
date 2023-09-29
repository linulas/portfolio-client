// @ts-nocheck
import meta from '$lib/images/kvix.png?w=1263&as=meta:height;width;src';
import smallMeta from '$lib/images/kvix.png?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/kvix.png?w=1263;768;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/kvix.png?w=1263;768;672;384&format=png&srcset';
import small from '$lib/images/kvix.png?w=384';
import medium from '$lib/images/kvix.png?w=672';
import large from '$lib/images/kvix.png?w=1440';
const { height, src, width } = meta;
const data = {
  slug: 'kvix.png',
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
  dominantColour: '#181818',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAMDIv//EABgQAAIDAAAAAAAAAAAAAAAAAAERAhAx/9oACAEBAAE/AHFYXX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=',
};
export { data as default };
