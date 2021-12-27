import React from "react";
import Skills from "./Skills";
import { DividerHeading } from "../other/dividerHeading";
import { Page_strapi_portfolio_data_attributes_skills_data } from "../../graphql/Page";

export interface AboutProps extends ComponentInterface {
  skills: Page_strapi_portfolio_data_attributes_skills_data[];
}

const About: React.FC<AboutProps> = ({ title, paragraph, image, skills }) => {
  return (
    <div>
      <div id={"about"} />
      <DividerHeading text={title || ""} highlight="me" />
      <div>
        <div>{/* <Img className="card" fluid={fluid} /> */}</div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph || "" }} />
        </div>
      </div>
      <div>
        <Skills programming={skills} />
      </div>
    </div>
  );
};

export default About;
