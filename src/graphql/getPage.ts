/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPage
// ====================================================

export interface getPage_strapi_portfolio_settings_defaultSEO_image {
  __typename: "Strapi_UploadFile";
  url: string;
}

export interface getPage_strapi_portfolio_settings_defaultSEO {
  __typename: "Strapi_Seo";
  title: string | null;
  description: string | null;
  image: getPage_strapi_portfolio_settings_defaultSEO_image | null;
}

export interface getPage_strapi_portfolio_settings {
  __typename: "Strapi_Settings";
  siteName: string;
  defaultSEO: getPage_strapi_portfolio_settings_defaultSEO | null;
}

export interface getPage_strapi_portfolio_banner_background {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_strapi_portfolio_banner {
  __typename: "Strapi_ComponentHeaderBanner";
  title: string | null;
  subtitle: string | null;
  preamble: string | null;
  background: getPage_strapi_portfolio_banner_background | null;
}

export interface getPage_strapi_portfolio_about_skills_icon {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_strapi_portfolio_about_skills {
  __typename: "Strapi_Skills";
  name: string;
  icon: getPage_strapi_portfolio_about_skills_icon | null;
}

export interface getPage_strapi_portfolio_about {
  __typename: "Strapi_ComponentSectionAbout";
  heading: string | null;
  resumeLink: string | null;
  paragraph: string | null;
  skills: (getPage_strapi_portfolio_about_skills | null)[] | null;
}

export interface getPage_strapi_portfolio_projects_projects_image {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_strapi_portfolio_projects_projects {
  __typename: "Strapi_Projects";
  title: string;
  description: string | null;
  link: string | null;
  image: getPage_strapi_portfolio_projects_projects_image | null;
}

export interface getPage_strapi_portfolio_projects {
  __typename: "Strapi_ComponentSectionProjects";
  heading: string | null;
  projects: (getPage_strapi_portfolio_projects_projects | null)[] | null;
}

export interface getPage_strapi_portfolio_contact_references_icon {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface getPage_strapi_portfolio_contact_references {
  __typename: "Strapi_ComponentGlobalReference";
  name: string | null;
  link: string | null;
  icon: (getPage_strapi_portfolio_contact_references_icon | null)[] | null;
}

export interface getPage_strapi_portfolio_contact {
  __typename: "Strapi_ComponentSectionContact";
  heading: string | null;
  paragraph: string | null;
  references: (getPage_strapi_portfolio_contact_references | null)[] | null;
}

export interface getPage_strapi_portfolio {
  __typename: "Strapi_Portfolio";
  settings: getPage_strapi_portfolio_settings | null;
  banner: getPage_strapi_portfolio_banner | null;
  about: getPage_strapi_portfolio_about | null;
  projects: getPage_strapi_portfolio_projects | null;
  contact: getPage_strapi_portfolio_contact | null;
}

export interface getPage_strapi {
  __typename: "Strapi";
  portfolio: getPage_strapi_portfolio | null;
}

export interface getPage {
  strapi: getPage_strapi;
}
