/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MediaEntityRes
// ====================================================

export interface MediaEntityRes_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
}

export interface MediaEntityRes_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: MediaEntityRes_data_attributes | null;
}

export interface MediaEntityRes {
  __typename: "Strapi_UploadFileEntityResponse";
  data: MediaEntityRes_data | null;
}
