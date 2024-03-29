// @ts-nocheck
import meta from '$lib/images/portrait_2020.jpg?w=1440&as=meta:height;width;src';
import smallMeta from '$lib/images/portrait_2020.jpg?w=384&as=meta:height;width;src';
import srcsetwebp from '$lib/images/portrait_2020.jpg?w=2005;1440;1344;768;672;384&format=webp&srcset';
import srcsetauto from '$lib/images/portrait_2020.jpg?w=2005;1440;1344;768;672;384&format=jpeg&srcset';
import small from '$lib/images/portrait_2020.jpg?w=384';
import medium from '$lib/images/portrait_2020.jpg?w=672';
import large from '$lib/images/portrait_2020.jpg?w=1440';
const { height, src, width } = meta;
const data = {
  slug: 'portrait_2020.jpg',
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
  dominantColour: '#181818',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAADWWQVR//8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEBRITM0JScf/aAAgBAQABPwDldzVSUR9rA9h+mRS6njSpErqPkMmdmLOxtntj+2ch4nWeKNyXtkVs/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=',
};
export { data as default };
