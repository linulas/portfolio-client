import React, { CSSProperties } from 'react';
import { breakpoints } from '../../styles/variables';
import { ParallaxBanner } from 'react-scroll-parallax';
import { hasWindow } from '../../helpers';
import { Page_strapi_portfolio_data_attributes_banner } from '../../graphql/Page';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';

const Banner: React.FC<Page_strapi_portfolio_data_attributes_banner> = ({ data }) => {
  const result = useStaticQuery(query);

  if (!data?.attributes || !result?.image) {
    return null;
  }

  const { title, subtitle } = data.attributes;
  const fluid = result.image.childImageSharp.fluid;

  const ImageStyle: CSSProperties = {
    filter: 'brightness(50%)',
    width: '100%',
    height: '100vh',
  };

  return (
    <div className="w-full">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div className={`relative flex items-center justify-center`}>
                {fluid && <BackgroundImage fluid={fluid} style={ImageStyle} />}
                <div className={`absolute`}>
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

const query = graphql`
  query Banner {
    image: file(relativePath: { eq: "img/coding-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Banner;
