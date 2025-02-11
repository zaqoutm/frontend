import Section from "./Section";

export interface Article {
  // provided by strapi
  id?: string;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  //
  photo?: { url: string };
  photoText?: string;
  title?: string;
  content?: string;
  section?: Section;
  isFeatured?: boolean;
  isMain?: boolean;
}
