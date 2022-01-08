import React from 'react';
import Skills from './Skills';
import { Card, DividerHeading } from '../other';
import { Page_strapi_portfolio_data_attributes_skills_data } from '../../graphql/Page';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import renderMarkdown from '../../helpers/renderMarkdown';
import { motion } from 'framer-motion';

export interface AboutProps extends ComponentInterface {
  skills: Page_strapi_portfolio_data_attributes_skills_data[];
}

export const About: React.FC<AboutProps> = ({ title, paragraph, skills }) => {
  const { image } = useStaticQuery(query);
  const fluid = image.childImageSharp.fluid;
  return (
    <div>
      <div id={'about'} />
      <DividerHeading text={title || ''} highlight="me" />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Card className="lg:flex lg:justify-between">
          <div className="lg:w-1/2">{renderMarkdown(paragraph || '')}</div>
          {fluid && (
            <div className="lg:w-1/2 flex justify-center">
              <Img className={`rounded-lg shadow-md p-2 w-full lg:max-w-md`} fluid={fluid}></Img>
            </div>
          )}
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Skills programming={skills} />
      </motion.div>
    </div>
  );
};

const query = graphql`
  query ProfileImage {
    image: file(relativePath: { eq: "img/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
