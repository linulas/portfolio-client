import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Page_strapi_portfolio_data_attributes_skills_data } from '../../graphql/Page';
import { SkillsParagraph } from '../../graphql/SkillsParagraph';
import renderMarkdown from '../../helpers/renderMarkdown';
import { Card, Image } from '../other';

export interface SkillsProps {
  programming: Page_strapi_portfolio_data_attributes_skills_data[];
}

const renderList = (items: Page_strapi_portfolio_data_attributes_skills_data[]) => (
  <ul className="p-0 m-0 w-56">
    {items.map((skill, index) => {
      const icon = skill.attributes?.icon?.data[0]?.attributes;
      return (
        <li key={`skill-${index}`} className="p-2">
          <span className="flex items-center">
            {icon && <Image {...(icon as unknown as UploadFile)} className="w-16 h-16" />}
            <span className="ml-2 font-bold">{skill.attributes?.name}</span>
          </span>
        </li>
      );
    })}
  </ul>
);

export const Skills: React.FC<SkillsProps> = ({ programming }) => {
  const { strapi } = useStaticQuery<SkillsParagraph>(query);
  const halfPoint = programming.length / 2;
  const firstList = programming.slice(0, halfPoint);
  const secondList = programming.slice(halfPoint, programming.length);
  return (
    <Card className="mt-6">
      <h3 className="text-center">Skills</h3>
      <div className="lg:flex">
        <div className="w-full lg:flex lg:w-1/2 lg:justify-center lg:items-center">
          {renderList(firstList)}
          {renderList(secondList)}
        </div>
        <div className="w-full lg:w-1/2">
          <div className="m-auto lg:max-w-md">
            {renderMarkdown(strapi.texts?.data[0].attributes?.text || '')}
          </div>
        </div>
      </div>
    </Card>
  );
};

const query = graphql`
  query SkillsParagraph {
    strapi {
      texts(filters: { name: { eq: "skills-paragraph" } }) {
        data {
          attributes {
            text
          }
        }
      }
    }
  }
`;

export default Skills;
