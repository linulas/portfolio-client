import React from "react";
import Project from "./Project";
import { DividerHeading } from "../other/DividerHeading";
import { Page_strapi_portfolio_data_attributes_projects_data } from "../../graphql/Page";

export interface ProjectProps extends ComponentInterface {
  items: Page_strapi_portfolio_data_attributes_projects_data[];
}

const Projects: React.FC<ProjectProps> = ({title, items}) => {
  return (
    <div>
      <div id={"projects"} />
      <DividerHeading text={title || ""} highlight="Projects" />

      <div>
        {items.map((project, index) => {
          return (
            project.attributes && (
              <Project key={`project-${index}`} {...project.attributes} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
