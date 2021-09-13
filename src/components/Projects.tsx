import React from "react";
import { ComponentInterface } from "../typescript/interfaces";
import { Div } from "./styled/Elements";
import Project, { ProjectInterface } from "./Project";
import { getIcon } from "./Skills";
import { DividerHeading } from "./DividerHeading";
import styled from "@emotion/styled";

export interface ProjectProps extends ComponentInterface {
  items: ProjectInterface[];
  projectImages: any;
}

const Wrapper = styled(Div)`
  flex-wrap: wrap;
`;

const Projects: React.FC<ProjectProps> = (props) => {
  const icons: any[] = props.projectImages.edges;
  return (
    <Div position="relative">
      <Div position="absolute" id={"projects"} top={-70} />
      <DividerHeading text={props.title || ""} highlight="Projects" />

      <Wrapper display={["flex"]}>
        {props.items.map((project, index) => {
          const fluid = getIcon(
            project.image && project.image.name ? project.image.name : "",
            icons,
            true
          );
          return (
            <Project key={`project-${index}`} {...project} fluidImage={fluid} />
          );
        })}
      </Wrapper>
    </Div>
  );
};

export default Projects;
