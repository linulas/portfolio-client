import meta from '$lib/images/dataportal.png?width=672&metadata';
import srcsetwebp from '$lib/images/dataportal.png?w=1270;672&webp&srcset';
import srcsetauto from '$lib/images/dataportal.png?w=1270;672&png&srcset';
const { height, src, width } = meta;
const data = {
  slug: 'dataportal.png',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/png' },
  ],
  dominantColour: '#282828',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAMTYFv/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhETUv/aAAgBAQABPwCNWm0bR4R//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8AFC//2Q==',
};
export { data as default };
