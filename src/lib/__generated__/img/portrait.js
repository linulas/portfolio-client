// @ts-nocheck
import meta from '$lib/images/portrait.jpg?width=192&metadata';
import smallMeta from '$lib/images/portrait.jpg?width=384&metadata';
import srcsetwebp from '$lib/images/portrait.jpg?w=192;&webp&srcset';
import srcsetauto from '$lib/images/portrait.jpg?w=192;&jpeg&srcset';
import small from '$lib/images/portrait.jpg?width=384';
import medium from '$lib/images/portrait.jpg?width=672';
import large from '$lib/images/portrait.jpg?width=1440';
const { height, src, width } = meta;
const data = {
  slug: 'portrait.jpg',
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
  dominantColour: '#f8f8f8',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAVtMFDNf/xAAeEAACAgICAwAAAAAAAAAAAAABAgMEACEFESJCgf/aAAgBAQABPwC5zFVOQiCSdqnjM/qmLNEyhldCpAIIYbGUUVq11mHbBdH4cEjjQY5//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAgEBPwANtP/EABYRAQEBAAAAAAAAAAAAAAAAAAIAMf/aAAgBAwEBPwBYb//Z',
};
export { data as default };
