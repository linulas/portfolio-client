// @ts-nocheck
import meta from '$lib/images/coding.jpg?width=1440&metadata';
import smallMeta from '$lib/images/coding.jpg?width=384&metadata';
import srcsetwebp from '$lib/images/coding.jpg?w=1915;1440;1344;768;672;384&webp&srcset';
import srcsetauto from '$lib/images/coding.jpg?w=1915;1440;1344;768;672;384&jpeg&srcset';
import small from '$lib/images/coding.jpg?width=384';
import medium from '$lib/images/coding.jpg?width=672';
import large from '$lib/images/coding.jpg?width=1440';
const { height, src, width } = meta;
const data = {
  slug: 'coding.jpg',
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
  dominantColour: '#383838',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAhyQ//8QAGhABAAMAAwAAAAAAAAAAAAAAAQACIQMVQv/aAAgBAQABPwDsaaeEzNjyUVSf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=',
};
export { data as default };
