// @ts-nocheck
import meta from '$lib/images/portrait.jpg?w=720&as=meta:height;width;src';
import smallMeta from '$lib/images/portrait.jpg?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/portrait.jpg?w=720;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/portrait.jpg?w=720;672;384&format=jpeg&srcset';
import small from '$lib/images/portrait.jpg?w=384';
import medium from '$lib/images/portrait.jpg?w=672';
import large from '$lib/images/portrait.jpg?w=1440';
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
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAesMAMNf/xAAgEAEAAgMAAAcAAAAAAAAAAAABAgMABBEFISJBUnKR/9oACAEBAAE/ANzxbXq36ay45H02/GH2wlFBER8xPfNKEbNfdsmdmHR/cjtXxCJZIA4Gf//EABcRAQADAAAAAAAAAAAAAAAAAAEAAiH/2gAIAQIBAT8ADbT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIx/9oACAEDAQE/AHkn/9k=',
};
export { data as default };
