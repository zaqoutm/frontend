import Section from "./Section";

export interface Article {
  // provided by strapi
  id?: string;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  //
  photo?: {
    alternativeText: string;
    caption: string;
    url: string;
  };
  title?: string;
  content?: [];
  section?: Section;
  isFeatured?: boolean;
  isMain?: boolean;
}
