import React from 'react';
import { DividerHeading } from '../other/DividerHeading';
import { hasWindow } from '../../helpers';
import { Page_strapi_portfolio_data_attributes_references_data } from '../../graphql/Page';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Image from '../other/Image';

export interface ContactInterface extends ComponentInterface {
  references: Page_strapi_portfolio_data_attributes_references_data[];
  avatar?: UploadFile;
}

const Contact: React.FC<ContactInterface> = ({ title, paragraph, avatar, references }) => {
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
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <p>{paragraph}</p>
          <ul className='my-4 p-0'>
            {references.map((reference, index) => {
              const icon = reference?.attributes?.icon?.data?.attributes;
              return (
                <li key={`contact-${index}`} className="py-4">
                  {icon && (
                    <span
                      className="flex items-center"
                      onClick={() => handleClick(reference.attributes?.link || '')}
                    >
                      <Image {...(icon as unknown as UploadFile)} className="w-16 h-16" />
                      <span className="ml-2">{reference.attributes?.linkText}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {fluid && <Img fluid={fluid} className="rounded-lg shadow-md p-2 w-full lg:max-w-md" />}
        </div>
      </div>
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
