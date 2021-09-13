import React from "react";
import { Div } from "./styled/Elements";
import { Skill } from "../typescript/types";
import styled from "@emotion/styled";
import { getEmSize } from "../styles/mixins";
import { breakpoints } from "../styles/variables";

export interface SkillsProps {
  resumeLink?: string;
  programming: Skill[];
  paragraph: string;
  icons?: any;
}

export const getIcon = (name: string, icons: any[], fluid?: boolean) => {
  const icon = icons.filter((icon) => icon.node.name == name)[0];
  return fluid
    ? icon && icon.node.childImageSharp.fluid
    : icon && icon.node.childImageSharp.fixed;
};

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
  const icons: any[] = props.icons.edges;
  const skillGroup1 = props.programming.splice(0, props.programming.length / 2);
  const skillGroup2 = props.programming;
  return (
    <Wrapper>
      <h3>Skills</h3>
      <Div className="skill-icons" display={["flex"]} direction={["column"]}>
        <Div display={["flex"]} direction={["row"]}>
          <ul>
            {skillGroup1.map((skill, index) => {
              const fixed = getIcon(skill.icon.name, icons);
              return (
                <li key={`skill-${index}`}>
                  <StyledSkill>
                    {fixed && <span>image placeholder</span>}
                    <span>{skill.text}</span>
                  </StyledSkill>
                </li>
              );
            })}
          </ul>
          <ul>
            {skillGroup2.map((skill, index) => {
              const fixed = getIcon(skill.icon.name, icons);
              return (
                <li key={`skill-${index}`}>
                  <StyledSkill>
                    {fixed && <span>image placeholder</span>}
                    <span>{skill.text}</span>
                  </StyledSkill>
                </li>
              );
            })}
          </ul>
        </Div>
      </Div>
      <Div>
        <p>{props.paragraph}</p>
        <p>
          Read more by downloading my resume (in swedish) by visiting my{" "}
          <a href={props.resumeLink}>google drive</a>
        </p>
      </Div>
    </Wrapper>
  );
};

export default Skills;
