import React from "react";
import styled from "@emotion/styled";
import { Div } from "../styled/Elements";
import { colors, breakpoints } from "../../styles/variables";
import { getEmSize } from "../../styles/mixins";
import { ParallaxBanner } from "react-scroll-parallax";
import { hasWindow } from "../../helpers";
import { Page_strapi_portfolio_data_attributes_banner } from "../../graphql/Page";
import { Image } from "./Image";
import { UploadFile } from "../../typescript/types";

const Wrapper = styled("div")`
  .parallax-banner {
    height: ${
      hasWindow
        ? window.innerWidth > breakpoints.md
          ? "75vh"
          : "85vh"
        : "75vh"
    };
  }
  img {
    filter: brightness(50%);
    width: auto;
    height: 100vh;
    max-width: unset;
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

const Banner: React.FC<Page_strapi_portfolio_data_attributes_banner> = ({
  data,
}) => {
  if (!data?.attributes) {
    return null;
  }

  const { title, subtitle, image } = data.attributes;
  const imgAttributes = image?.data?.attributes as unknown;

  return (
    <Wrapper>
      <ParallaxBanner
        className="parallax"
        layers={[
          {
            children: (
              <Div position="relative">
                {imgAttributes && <Image {...(imgAttributes as UploadFile)} />}
                <Text>
                  <h1>{title}</h1>
                  {subtitle && <p>{subtitle}</p>}
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
};

export default Banner;
