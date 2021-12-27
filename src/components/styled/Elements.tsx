import React from 'react'
import styled from "@emotion/styled";
import { breakpoints } from "../../styles/variables";
import { getEmSize } from "../../styles/mixins";

export const Div: React.FC<DivProps> = (props) => {
  const StyledDiv = styled("div")<DivProps>`
    ${(props) =>
      props.backgroundImage &&
      `background-image: url(${props.backgroundImage})`};
    ${(props) =>
      props.backgroundColor && `background-color: ${props.backgroundColor}`};
    ${(props) => props.display && `display: ${props.display[0]}`};
    ${(props) => props.direction && `flex-direction: ${props.direction[0]}`};
    ${(props) => props.float && `float: ${props.float[0]}`};
    ${(props) => props.height && `height: ${props.height}`};
    ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight}`};
    ${(props) => props.width && `width: ${props.width[0]}`};
    ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
    ${(props) => props.padding && `padding: ${props.padding[0]}`};
    ${(props) => props.position && `position: ${props.position}`};
    ${(props) => props.right != undefined && `right: ${props.right}px`};
    ${(props) => props.left != undefined && `left: ${props.left}px`};
    ${(props) => props.top != undefined && `top: ${props.top}px`};
    ${(props) => props.bottom != undefined && `bottom: ${props.bottom}px`};
    @media screen and (min-width: ${getEmSize(breakpoints.sm)}em) {
      ${(props) =>
        props.display && props.display[1] && `display: ${props.display[1]}`};
      ${(props) =>
        props.direction &&
        props.direction[1] &&
        `flex-direction: ${props.direction[1]}`};
      ${(props) => props.width && props.width[1] && `width: ${props.width[1]}`};
      ${(props) => props.float && props.float[1] && `float: ${props.float[1]}`};
      ${(props) =>
        props.padding && props.padding[1] && `padding: ${props.padding[1]}`};
    }
    @media screen and (min-width: ${getEmSize(breakpoints.md)}em) {
      ${(props) =>
        props.display && props.display[2] && `display: ${props.display[2]}`};
      ${(props) =>
        props.direction &&
        props.direction[2] &&
        `flex-direction: ${props.direction[2]}`};
      ${(props) => props.width && props.width[2] && `width: ${props.width[2]}`};
      ${(props) => props.float && props.float[2] && `float: ${props.float[2]}`};
      ${(props) =>
        props.padding && props.padding[2] && `padding: ${props.padding[2]}`};
    }
  `;
  return <StyledDiv {...props} />;
};
