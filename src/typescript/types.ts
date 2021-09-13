export type Skill = {
  text: string;
  icon: QueryIcon;
};

export type QueryIcon = {
  name: string;
  alt: string;
};

export type Image = {
  src: string;
  alt: string;
  name?: string;
};

export type Reference = {
  text?: string;
  link: string;
  linkText: string;
  icon?: QueryIcon;
};

export type FlexDisplay = "flex" | "block" | "none";
export type FlexDirection = "row" | "column";
export type Float = "right" | "left" | "none";
