import meta from '$lib/images/gopher.png?width=672&metadata';
import srcsetwebp from '$lib/images/gopher.png?w=900;672&webp&srcset';
import srcsetauto from '$lib/images/gopher.png?w=900;672&png&srcset';
const { height, src, width } = meta;
const data = {
  slug: 'gopher.png',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/png' },
  ],
  dominantColour: '#f8f8f8',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANrVJf/EABwQAAICAgMAAAAAAAAAAAAAAAERAgMAEgRRUv/aAAgBAQABPwC7evk1EbTNjA8wwCSDLPaz/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AcP/Z',
};
export { data as default };
