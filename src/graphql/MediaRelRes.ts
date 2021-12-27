/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MediaRelRes
// ====================================================

export interface MediaRelRes_data_attributes {
  __typename: "Strapi_UploadFile";
  url: string;
  alternativeText: string | null;
  formats: any | null;
}

export interface MediaRelRes_data {
  __typename: "Strapi_UploadFileEntity";
  attributes: MediaRelRes_data_attributes | null;
}

export interface MediaRelRes {
  __typename: "Strapi_UploadFileRelationResponseCollection";
  data: MediaRelRes_data[];
}
