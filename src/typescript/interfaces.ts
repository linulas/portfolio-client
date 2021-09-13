import { Image, FlexDisplay, FlexDirection, Float } from "./types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ComponentInterface {
  title?: string;
  image?: Image;
  preamble?: string;
  paragraph?: string;
}

export interface HoverImageInterface {
  title: string;
  info: string;
  link: string;
}

export interface DivProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  backgroundImage?: string;
  backgroundColor?: string;
  display?: FlexDisplay[];
  direction?: FlexDirection[];
  float?: Float[];
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string[];
  minWidth?: string;
  maxWidth?: string;
  padding?: string[];
  position?: "absolute" | "fixed" | "relative" | "unset";
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
}
