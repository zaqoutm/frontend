import { Article } from "./Aricle";

export interface StrapiResponse {
  data: Article[];
  meta: string;
}

export interface StrapiResponseSingle {
  data: Article;
  meta: string;
}
