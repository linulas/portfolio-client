import React from 'react';
import { breakpoints } from '../../styles/variables';
import { ParallaxBanner } from 'react-scroll-parallax';
import { hasWindow } from '../../helpers';
import { Page_strapi_portfolio_data_attributes_banner } from '../../graphql/Page';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { ButtonLink } from '../other';

export const Banner: React.FC<Page_strapi_portfolio_data_attributes_banner> = ({ data }) => {
  const { image } = useStaticQuery(query);

  if (!data?.attributes || !image) {
    return null;
  }

  const { title, subtitle } = data.attributes;
  const fluid = image.childImageSharp.fluid;

  return (
    <div className="w-full">
      <ParallaxBanner
        layers={[
          {
            children: fluid && (
              <BackgroundImage fluid={fluid} className={`banner`}>
                <div className={`p-4 mt-32 sm:max-w-screen-md`}>
                  <h1 className={`text-white font-bold tracking-wider`}>{title}</h1>
                  {subtitle && <p className={`text-white preamble`}>{subtitle}</p>}
                  <div className="flex w-full justify-center items-center">
                    <ButtonLink className="ml-8" href="#contact">
                      Contact
                    </ButtonLink>
                  </div>
                </div>
              </BackgroundImage>
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
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Banner;
