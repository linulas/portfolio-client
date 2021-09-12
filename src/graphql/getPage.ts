/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPage
// ====================================================

export interface getPage_portfolio_banner_background {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_portfolio_banner {
  __typename: "ComponentHeaderBanner";
  title: string | null;
  subtitle: string | null;
  preamble: string | null;
  background: getPage_portfolio_banner_background | null;
}

export interface getPage_portfolio_about_skills_icon {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_portfolio_about_skills {
  __typename: "Skills";
  name: string;
  icon: getPage_portfolio_about_skills_icon | null;
}

export interface getPage_portfolio_about {
  __typename: "ComponentSectionAbout";
  heading: string | null;
  resumeLink: string | null;
  paragraph: string | null;
  skills: (getPage_portfolio_about_skills | null)[] | null;
}

export interface getPage_portfolio_projects_projects_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_portfolio_projects_projects {
  __typename: "Projects";
  title: string;
  description: string | null;
  link: string | null;
  image: getPage_portfolio_projects_projects_image | null;
}

export interface getPage_portfolio_projects {
  __typename: "ComponentSectionProjects";
  heading: string | null;
  projects: (getPage_portfolio_projects_projects | null)[] | null;
}

export interface getPage_portfolio_contact_references_icon {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_portfolio_contact_references {
  __typename: "ComponentGlobalReference";
  name: string | null;
  link: string | null;
  icon: (getPage_portfolio_contact_references_icon | null)[] | null;
}

export interface getPage_portfolio_contact {
  __typename: "ComponentSectionContact";
  heading: string | null;
  paragraph: string | null;
  references: (getPage_portfolio_contact_references | null)[] | null;
}

export interface getPage_portfolio {
  __typename: "Portfolio";
  banner: getPage_portfolio_banner | null;
  about: getPage_portfolio_about | null;
  projects: getPage_portfolio_projects | null;
  contact: getPage_portfolio_contact | null;
}

export interface getPage {
  portfolio: getPage_portfolio | null;
}
