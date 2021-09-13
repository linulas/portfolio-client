import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import { Div } from "./styled/Elements";
import { ComponentInterface } from "../typescript/interfaces";
import { colors, breakpoints } from "../styles/variables";
import { getEmSize } from "../styles/mixins";
import { ParallaxBanner } from "react-scroll-parallax";
import { hasWindow } from "../helpers";

export interface BannerProps extends ComponentInterface {
  backgroundImage: any;
  subTitle: string;
  sideImage?: any;
}

const Wrapper = styled("div")`
  .parallax-banner {
    height: ${hasWindow
      ? window.innerWidth > breakpoints.md
        ? "75vh"
        : "85vh"
      : "75vh"};
  }
`;

const Text = styled("div")`
  max-width: 60em;
  width: 100%;
  padding: 1.5rem;
  position: absolute;
  top: 65%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  h1,
  p {
    color: ${colors.white};
  }
  h1 {
    @media screen and (max-width: ${getEmSize(breakpoints.sm - 1)}em) {
      margin-bottom: 16px;
    }
  }
  p {
    font-weight: bold;
    @media screen and (min-width: ${getEmSize(breakpoints.sm)}em) {
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media screen and (min-width: ${getEmSize(breakpoints.lg)}em) {
    padding: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageStyle: CSSProperties = {
  filter: "brightness(50%)",
  width: "100%",
  height: "100vh",
};

const Banner: React.FC<BannerProps> = (props) => (
  <Wrapper>
    <ParallaxBanner
      className="parallax"
      layers={[
        {
          children: (
            <Div position="relative">
              <Text>
                <h1>{props.title}</h1>
                {props.preamble && <p>{props.preamble}</p>}
              </Text>
            </Div>
          ),
          amount: hasWindow
            ? window.innerWidth > breakpoints.md
              ? 0.4
              : 0.2
            : 0.4,
        },
      ]}
      style={{
        height: hasWindow
          ? window.innerWidth > breakpoints.md
            ? "75vh"
            : "85vh"
          : "75vh",
      }}
    />
  </Wrapper>
);

export default Banner;
