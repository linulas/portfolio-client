import React from "react";
import { Div } from "../styled/Elements";
import styled from "@emotion/styled";
import { getEmSize } from "../../styles/mixins";
import { breakpoints } from "../../styles/variables";
import { graphql, useStaticQuery } from "gatsby";
import { Page_strapi_portfolio_data_attributes_skills_data } from "../../graphql/Page";
import { SkillsParagraph } from "../../graphql/SkillsParagraph";

export interface SkillsProps {
  programming: Page_strapi_portfolio_data_attributes_skills_data[];
}

const StyledSkill = styled("span")`
  display: flex;
  flex-direction: column;
  .gatsby-image-wrapper {
    margin: auto;
    width: 60px;
    height: 60px;
    img {
      height: 60px;
    }
  }
`;

const Wrapper = styled("div")`
  h3 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0 16px 0 16px;
    text-align: center;
    li {
      padding: 8px;
    }
  }
  .skill-icons {
    align-items: center;

    @media screen and (min-width: ${getEmSize(breakpoints.md)}em) {
      ul {
        padding: 0;
        flex-direction: row;
      }
    }
  }
`;

const Skills: React.FC<SkillsProps> = (props) => {
  const { strapi } = useStaticQuery<SkillsParagraph>(query);
  const skillGroup1 = props.programming.splice(0, props.programming.length / 2);
  const skillGroup2 = props.programming;
  return (
    <Wrapper>
      <h3>Skills</h3>
      <Div className="skill-icons" display={["flex"]} direction={["column"]}>
        <Div display={["flex"]} direction={["row"]}>
          <ul>
            {skillGroup1.map((skill, index) => {
              return (
                <li key={`skill-${index}`}>
                  <StyledSkill>
                    <span>image placeholder</span>
                    <span>{skill.attributes?.name}</span>
                  </StyledSkill>
                </li>
              );
            })}
          </ul>
          <ul>
            {skillGroup2.map((skill, index) => {
              return (
                <li key={`skill-${index}`}>
                  <StyledSkill>
                    <span>image placeholder</span>
                    <span>{skill.attributes?.name}</span>
                  </StyledSkill>
                </li>
              );
            })}
          </ul>
        </Div>
      </Div>
      <Div>
        <p>{strapi.texts?.data[0].attributes?.text}</p>
      </Div>
    </Wrapper>
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
