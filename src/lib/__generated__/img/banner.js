import meta from '$lib/images/banner.jpg?width=672&metadata';
import srcsetwebp from '$lib/images/banner.jpg?w=1344;672&webp&srcset';
import srcsetauto from '$lib/images/banner.jpg?w=1344;672&jpeg&srcset';
const { height, src, width } = meta;
const data = {
  slug: 'banner.jpg',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/jpeg' },
  ],
  dominantColour: '#888',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAAM3qVP/EABwQAAEDBQAAAAAAAAAAAAAAAAEAAhIREyFBUf/aAAgBAQABPwBrpSOABqiuO4v/xAAWEQADAAAAAAAAAAAAAAAAAAAAAiH/2gAIAQIBAT8AWn//xAAXEQEAAwAAAAAAAAAAAAAAAAACAAEx/9oACAEDAQE/AKaOT//Z',
};
export { data as default };
