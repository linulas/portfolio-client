/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Page
// ====================================================

export interface Page_strapi_portfolio_data_attributes_banner_data_attributes_image_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
  caption: string | null;
}

export interface Page_strapi_portfolio_data_attributes_banner_data_attributes_image_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: Page_strapi_portfolio_data_attributes_banner_data_attributes_image_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_banner_data_attributes_image {
  __typename: "Strapi_UploadFileEntityResponse";
  data: Page_strapi_portfolio_data_attributes_banner_data_attributes_image_data | null;
}

export interface Page_strapi_portfolio_data_attributes_banner_data_attributes {
  __typename: "Strapi_Banner";
  title: string | null;
  subtitle: string | null;
  text: string | null;
  image: Page_strapi_portfolio_data_attributes_banner_data_attributes_image | null;
}

export interface Page_strapi_portfolio_data_attributes_banner_data {
  __typename: "Strapi_BannerEntity";
  attributes: Page_strapi_portfolio_data_attributes_banner_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_banner {
  __typename: "Strapi_BannerEntityResponse";
  data: Page_strapi_portfolio_data_attributes_banner_data | null;
}

export interface Page_strapi_portfolio_data_attributes_skills_data_attributes_icon_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
  caption: string | null;
}

export interface Page_strapi_portfolio_data_attributes_skills_data_attributes_icon_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: Page_strapi_portfolio_data_attributes_skills_data_attributes_icon_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_skills_data_attributes_icon {
  __typename: "Strapi_UploadFileRelationResponseCollection";
  data: Page_strapi_portfolio_data_attributes_skills_data_attributes_icon_data[];
}

export interface Page_strapi_portfolio_data_attributes_skills_data_attributes {
  __typename: "Strapi_Skill";
  name: string;
  icon: Page_strapi_portfolio_data_attributes_skills_data_attributes_icon;
}

export interface Page_strapi_portfolio_data_attributes_skills_data {
  __typename: "Strapi_SkillEntity";
  attributes: Page_strapi_portfolio_data_attributes_skills_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_skills {
  __typename: "Strapi_SkillRelationResponseCollection";
  data: Page_strapi_portfolio_data_attributes_skills_data[];
}

export interface Page_strapi_portfolio_data_attributes_projects_data_attributes_image_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
  caption: string | null;
}

export interface Page_strapi_portfolio_data_attributes_projects_data_attributes_image_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: Page_strapi_portfolio_data_attributes_projects_data_attributes_image_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_projects_data_attributes_image {
  __typename: "Strapi_UploadFileEntityResponse";
  data: Page_strapi_portfolio_data_attributes_projects_data_attributes_image_data | null;
}

export interface Page_strapi_portfolio_data_attributes_projects_data_attributes_link {
  __typename: "Strapi_ComponentCommonLink";
  text: string | null;
  url: string;
}

export interface Page_strapi_portfolio_data_attributes_projects_data_attributes {
  __typename: "Strapi_Project";
  title: string;
  description: string;
  image: Page_strapi_portfolio_data_attributes_projects_data_attributes_image;
  link: Page_strapi_portfolio_data_attributes_projects_data_attributes_link | null;
}

export interface Page_strapi_portfolio_data_attributes_projects_data {
  __typename: "Strapi_ProjectEntity";
  attributes: Page_strapi_portfolio_data_attributes_projects_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_projects {
  __typename: "Strapi_ProjectRelationResponseCollection";
  data: Page_strapi_portfolio_data_attributes_projects_data[];
}

export interface Page_strapi_portfolio_data_attributes_references_data_attributes_icon_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
  caption: string | null;
}

export interface Page_strapi_portfolio_data_attributes_references_data_attributes_icon_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: Page_strapi_portfolio_data_attributes_references_data_attributes_icon_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_references_data_attributes_icon {
  __typename: "Strapi_UploadFileEntityResponse";
  data: Page_strapi_portfolio_data_attributes_references_data_attributes_icon_data | null;
}

export interface Page_strapi_portfolio_data_attributes_references_data_attributes {
  __typename: "Strapi_Reference";
  name: string;
  link: string;
  linkText: string | null;
  icon: Page_strapi_portfolio_data_attributes_references_data_attributes_icon | null;
}

export interface Page_strapi_portfolio_data_attributes_references_data {
  __typename: "Strapi_ReferenceEntity";
  attributes: Page_strapi_portfolio_data_attributes_references_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_references {
  __typename: "Strapi_ReferenceRelationResponseCollection";
  data: Page_strapi_portfolio_data_attributes_references_data[];
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
  caption: string | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image {
  __typename: "Strapi_UploadFileEntityResponse";
  data: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image_data | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes {
  __typename: "Strapi_Seo";
  title: string | null;
  description: string | null;
  image: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes_image | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data {
  __typename: "Strapi_SeoEntity";
  id: string | null;
  attributes: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo {
  __typename: "Strapi_SeoEntityResponse";
  data: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data_attributes {
  __typename: "Strapi_Setting";
  siteName: string;
  defaultSeo: Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo | null;
}

export interface Page_strapi_portfolio_data_attributes_setting_data {
  __typename: "Strapi_SettingEntity";
  attributes: Page_strapi_portfolio_data_attributes_setting_data_attributes | null;
  id: string | null;
}

export interface Page_strapi_portfolio_data_attributes_setting {
  __typename: "Strapi_SettingEntityResponse";
  data: Page_strapi_portfolio_data_attributes_setting_data | null;
}

export interface Page_strapi_portfolio_data_attributes {
  __typename: "Strapi_Portfolio";
  banner: Page_strapi_portfolio_data_attributes_banner | null;
  aboutHeading: string;
  aboutParagraph: string;
  skills: Page_strapi_portfolio_data_attributes_skills | null;
  projectsHeading: string;
  projects: Page_strapi_portfolio_data_attributes_projects | null;
  contactHeading: string;
  contactParagraph: string;
  references: Page_strapi_portfolio_data_attributes_references | null;
  setting: Page_strapi_portfolio_data_attributes_setting | null;
}

export interface Page_strapi_portfolio_data {
  __typename: "Strapi_PortfolioEntity";
  attributes: Page_strapi_portfolio_data_attributes | null;
}

export interface Page_strapi_portfolio {
  __typename: "Strapi_PortfolioEntityResponse";
  data: Page_strapi_portfolio_data | null;
}

export interface Page_strapi {
  __typename: "Strapi";
  portfolio: Page_strapi_portfolio | null;
}

export interface Page {
  strapi: Page_strapi;
}
