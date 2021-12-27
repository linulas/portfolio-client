import React from "react";
import { Div } from "../styled/Elements";
import Skills from "./Skills";
import { DividerHeading } from "../other/DividerHeading";
import styled from "@emotion/styled";
import { Page_strapi_portfolio_data_attributes_skills_data } from "../../graphql/Page";

export interface AboutProps extends ComponentInterface {
  skills: Page_strapi_portfolio_data_attributes_skills_data[];
}

const Wrapper = styled(Div)``;

const About: React.FC<AboutProps> = ({title, paragraph, image, skills}) => {
  return (
    <Div position="relative">
      <Div position="absolute" id={"about"} top={-70} />
      <DividerHeading text={title || ""} highlight="me" />
      <Wrapper display={["flex"]} direction={["column", "column", "row"]}>
        <Div
          width={["100%", "50%"]}
          padding={["0 0 16px 0", "0 0 16px 0", "0 16px 0 0"]}
        >
          {/* <Img className="card" fluid={fluid} /> */}
        </Div>
        <Div width={["100%", "50%"]}>
          <p dangerouslySetInnerHTML={{ __html: paragraph || "" }} />
        </Div>
      </Wrapper>
      <Div>
        <Skills programming={skills}  />
      </Div>
    </Div>
  );
};

export default About;
