import React from "react";
import { Div } from "../styled/Elements";
import Project from "./Project";
import { DividerHeading } from "../other/DividerHeading";
import styled from "@emotion/styled";
import { Page_strapi_portfolio_data_attributes_projects_data } from "../../graphql/Page";

export interface ProjectProps extends ComponentInterface {
  items: Page_strapi_portfolio_data_attributes_projects_data[];
}

const Wrapper = styled(Div)`
  flex-wrap: wrap;
`;

const Projects: React.FC<ProjectProps> = (props) => {
  return (
    <Div position="relative">
      <Div position="absolute" id={"projects"} top={-70} />
      <DividerHeading text={props.title || ""} highlight="Projects" />

      <Wrapper display={["flex"]}>
        {props.items.map((project, index) => {
          return (
            project.attributes && (
              <Project key={`project-${index}`} {...project.attributes} />
            )
          );
        })}
      </Wrapper>
    </Div>
  );
};

export default Projects;
