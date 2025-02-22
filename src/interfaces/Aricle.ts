import Section from "./Section";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

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
  content?: BlocksContent;
  section?: Section;
  isFeatured?: boolean;
  isMain?: boolean;
}
