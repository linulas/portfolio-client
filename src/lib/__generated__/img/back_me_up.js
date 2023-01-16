// @ts-nocheck
import meta from '$lib/images/back_me_up.jpg?width=1440&metadata';
import smallMeta from '$lib/images/back_me_up.jpg?width=384&metadata';
import srcsetwebp from '$lib/images/back_me_up.jpg?w=2560;1440;1344;768;672;384&webp&srcset';
import srcsetauto from '$lib/images/back_me_up.jpg?w=2560;1440;1344;768;672;384&jpeg&srcset';
import small from '$lib/images/back_me_up.jpg?width=384';
import medium from '$lib/images/back_me_up.jpg?width=672';
import large from '$lib/images/back_me_up.jpg?width=1440';
const { height, src, width } = meta;
const data = {
  slug: 'back_me_up.jpg',
  width,
  height,
  src,
  small,
  medium,
  large,
  mobile: smallMeta,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/jpeg' },
  ],
  dominantColour: '#888',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQH/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAM5qK//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMREv/aAAgBAQABPwCl26bSTNM//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Ar//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z',
};
export { data as default };
