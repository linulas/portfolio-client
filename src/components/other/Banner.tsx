import React from 'react';
import { breakpoints } from '../../styles/variables';
import { ParallaxBanner } from 'react-scroll-parallax';
import { hasWindow } from '../../helpers';
import { Page_strapi_portfolio_data_attributes_banner } from '../../graphql/Page';
import { Image } from './Image';

const Banner: React.FC<Page_strapi_portfolio_data_attributes_banner> = ({ data }) => {
  if (!data?.attributes) {
    return null;
  }

  const { title, subtitle, image } = data.attributes;
  const imgAttributes = image?.data?.attributes as unknown;

  return (
    <div className="w-full">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div>
                {imgAttributes && <Image {...(imgAttributes as UploadFile)} className="w-screen" />}
                <div>
                  <h1>{title}</h1>
                  {subtitle && <p>{subtitle}</p>}
                </div>
              </div>
            ),
            amount: hasWindow ? (window.innerWidth > breakpoints.md ? 0.4 : 0.2) : 0.4,
          },
        ]}
        style={{
          height: hasWindow ? (window.innerWidth > breakpoints.md ? '75vh' : '85vh') : '75vh',
        }}
      />
    </div>
  );
};

export default Banner;
