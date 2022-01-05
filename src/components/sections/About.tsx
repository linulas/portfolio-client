import React from 'react';
import Skills from './Skills';
import { DividerHeading } from '../other/dividerHeading';
import { Page_strapi_portfolio_data_attributes_skills_data } from '../../graphql/Page';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import renderMarkdown from '../other/renderMarkdown';

export interface AboutProps extends ComponentInterface {
  skills: Page_strapi_portfolio_data_attributes_skills_data[];
}

const About: React.FC<AboutProps> = ({ title, paragraph, skills }) => {
  const { image } = useStaticQuery(query);
  const fluid = image.childImageSharp.fluid;
  return (
    <div>
      <div id={'about'} />
      <DividerHeading text={title || ''} highlight="me" />
      <div>
        {fluid && <Img className={`rounded-lg shadow-md p-2`} fluid={fluid}></Img>}
        {renderMarkdown(paragraph || "")}
      </div>
        <Skills programming={skills} />
    </div>
  );
};

const query = graphql`
  query ProfileImage {
    image: file(relativePath: { eq: "img/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
