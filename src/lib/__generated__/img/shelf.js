// @ts-nocheck
import meta from '$lib/images/shelf.png?width=1440&metadata';
import smallMeta from '$lib/images/shelf.png?width=384&metadata';
import srcsetwebp from '$lib/images/shelf.png?w=2560;1440;1344;768;672;384&webp&srcset';
import srcsetauto from '$lib/images/shelf.png?w=2560;1440;1344;768;672;384&png&srcset';
import small from '$lib/images/shelf.png?width=384';
import medium from '$lib/images/shelf.png?width=672';
import large from '$lib/images/shelf.png?width=1440';
const { height, src, width } = meta;
const data = {
  slug: 'shelf.png',
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
  dominantColour: '#484848',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAMfQGv8A/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQAREjECAwT/2gAIAQEAAT8A59kjEOMGq0wX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAJB/9oACAEDAQE/AGh//9k=',
};
export { data as default };
