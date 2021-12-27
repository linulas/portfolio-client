import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Page_strapi_portfolio_data_attributes_skills_data } from "../../graphql/Page";
import { SkillsParagraph } from "../../graphql/SkillsParagraph";

export interface SkillsProps {
  programming: Page_strapi_portfolio_data_attributes_skills_data[];
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { strapi } = useStaticQuery<SkillsParagraph>(query);
  const skillGroup1 = props.programming.splice(0, props.programming.length / 2);
  const skillGroup2 = props.programming;
  return (
    <div>
      <h3>Skills</h3>
      <div>
        <div>
          <ul>
            {skillGroup1.map((skill, index) => {
              return (
                <li key={`skill-${index}`}>
                  <span>
                    <span>image placeholder</span>
                    <span>{skill.attributes?.name}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <ul>
            {skillGroup2.map((skill, index) => {
              return (
                <li key={`skill-${index}`}>
                  <span>
                    <span>image placeholder</span>
                    <span>{skill.attributes?.name}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <p>{strapi.texts?.data[0].attributes?.text}</p>
      </div>
    </div>
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
