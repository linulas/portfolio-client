interface ComponentInterface {
  title?: string;
  image?: UploadFile;
  preamble?: string;
  paragraph?: string;
}

interface HoverImageInterface {
  title: string;
  info: string;
  link: string;
}

interface DivProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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

type FlexDisplay = "flex" | "block" | "none";
type FlexDirection = "row" | "column";
type Float = "right" | "left" | "none";

type UploadFile = {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: Float
  url: string
  previewUrl: string
  provider: string
  provider_metadata: any
  related: any[]
  createdAt: string
  updatedAt: string
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*/tailwind.config.js" {
  const content: any;
  export default content;
}