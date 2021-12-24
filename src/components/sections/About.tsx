import React from "react";
import { Div } from "../styled/Elements";
import Skills, { SkillsProps } from "./Skills";
import { ComponentInterface } from "../../typescript/interfaces";
import { DividerHeading } from "../other/DividerHeading";
import styled from "@emotion/styled";

export interface AboutProps extends ComponentInterface {
  icons: any;
  profileImage: any;
  skills: SkillsProps;
}

const Wrapper = styled(Div)``;

const About: React.FC<AboutProps> = (props) => {
  const { profileImage } = props;
  const fluid = profileImage.childImageSharp.fluid;
  return (
    <Div position="relative">
      <Div position="absolute" id={"about"} top={-70} />
      <DividerHeading text={props.title || ""} highlight="me" />
      <Wrapper display={["flex"]} direction={["column", "column", "row"]}>
        <Div
          width={["100%", "50%"]}
          padding={["0 0 16px 0", "0 0 16px 0", "0 16px 0 0"]}
        >
          {/* <Img className="card" fluid={fluid} /> */}
        </Div>
        <Div width={["100%", "50%"]}>
          <p dangerouslySetInnerHTML={{ __html: props.paragraph || "" }} />
        </Div>
      </Wrapper>
      <Div>
        <Skills {...props.skills} icons={props.icons} />
      </Div>
    </Div>
  );
};

export default About;
