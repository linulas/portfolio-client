// @ts-nocheck
import meta from '$lib/images/banner.webp?w=1440&as=meta:height;width;src';
import smallMeta from '$lib/images/banner.webp?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/banner.webp?w=1440;1440;1344;768;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/banner.webp?w=1440;1440;1344;768;672;384&format=webp&srcset';
import small from '$lib/images/banner.webp?w=384';
import medium from '$lib/images/banner.webp?w=672';
import large from '$lib/images/banner.webp?w=1440';
const { height, src, width } = meta;
const data = {
  slug: 'banner.webp',
  width,
  height,
  src,
  small,
  medium,
  large,
  mobile: smallMeta,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/webp' },
  ],
  dominantColour: '#888',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIH/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAM4kqP8A/8QAGRAAAwADAAAAAAAAAAAAAAAAAAERAgNB/9oACAEBAAE/ANSqzvEQ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAy/9oACAECAQE/ADJf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAEDAQE/AKz/2Q==',
};
export { data as default };
