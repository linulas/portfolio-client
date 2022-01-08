import React from 'react';
import { DividerHeading } from '../other/DividerHeading';
import { hasWindow } from '../../helpers';
import { Page_strapi_portfolio_data_attributes_references_data } from '../../graphql/Page';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Card, Image } from '../other';

export interface ContactInterface extends ComponentInterface {
  references: Page_strapi_portfolio_data_attributes_references_data[];
  avatar?: UploadFile;
}

export const Contact: React.FC<ContactInterface> = ({ title, paragraph, references }) => {
  const { image } = useStaticQuery(query);

  if (!image) {
    return null;
  }

  const fluid = image.childImageSharp.fluid;

  const handleClick = (url: string) => {
    hasWindow && window.open(url);
  };

  return (
    <div>
      <div id={'contact'} />
      <DividerHeading text={title || ''} highlight="me" />
      <Card className="lg:flex">
        <div className="lg:w-1/2">
          <p>{paragraph}</p>
          <ul className="my-4 p-0">
            {references.map((reference, index) => {
              const icon = reference?.attributes?.icon?.data?.attributes;
              return (
                <li key={`contact-${index}`} className="my-2">
                  {icon && (
                    <Card
                      className="flex justify-between"
                      onClick={() => handleClick(reference.attributes?.link || '')}
                      clickable
                    >
                      <div className="flex items-center">
                        <Image {...(icon as unknown as UploadFile)} className="w-8 h-8" />
                        <span className="ml-2">{reference.attributes?.linkText}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </Card>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {fluid && (
            <Img fluid={fluid} className="rounded-lg shadow-md p-2 w-60 h-60 lg:w-80 lg:h-80" />
          )}
        </div>
      </Card>
    </div>
  );
};

const query = graphql`
  query Avatar {
    image: file(relativePath: { eq: "img/avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Contact;
