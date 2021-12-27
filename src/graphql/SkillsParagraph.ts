/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SkillsParagraph
// ====================================================

export interface SkillsParagraph_strapi_texts_data_attributes {
  __typename: "Strapi_Text";
  text: string;
}

export interface SkillsParagraph_strapi_texts_data {
  __typename: "Strapi_TextEntity";
  attributes: SkillsParagraph_strapi_texts_data_attributes | null;
}

export interface SkillsParagraph_strapi_texts {
  __typename: "Strapi_TextEntityResponseCollection";
  data: SkillsParagraph_strapi_texts_data[];
}

export interface SkillsParagraph_strapi {
  __typename: "Strapi";
  texts: SkillsParagraph_strapi_texts | null;
}

export interface SkillsParagraph {
  strapi: SkillsParagraph_strapi;
}
