import meta from '$lib/images/avatar.jpg?width=672&metadata';
import srcsetwebp from '$lib/images/avatar.jpg?w=1080;672&webp&srcset';
import srcsetauto from '$lib/images/avatar.jpg?w=1080;672&jpeg&srcset';
const { height, src, width } = meta;
const data = {
  slug: 'avatar.jpg',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/jpeg' },
  ],
  dominantColour: '#f8f8f8',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwUG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq7sKWT//xAAgEAEBAAIABgMAAAAAAAAAAAABAgADBAUSFCEzQlFy/9oACAEBAAE/AO/0cNzTb1rMSVGz5Tbks2FSjNAj9mbva/sypJqpkAFAPAGf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=',
};
export { data as default };
