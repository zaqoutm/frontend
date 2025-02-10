import Section from "./Section";

export interface Article {
  // by strapi
  id?: string;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  title?: string;
  content?: string;
  section?: Section;
  featured?: boolean;
  isMain?: boolean;
  imgUri?: string;
  imgTag?: string;
}

// id, documentId
// createdAt, updatedeAt, publishedAt

// title*             text short
// content*           rich text
// section*            relation
// featured            false
// isMain              false
// photoUri
// photoDescription
