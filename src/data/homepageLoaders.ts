import { StrapiResponse } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getMainArticle(): Promise<StrapiResponse> {
  return await tryFetch("/articles?filters[isMain][$eq]=true&populate=*");
}

export async function getArticlesBySection(sectionTitle: string): Promise<StrapiResponse> {
  return await tryFetch(`/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
}

export async function getFeaturedArticles(): Promise<StrapiResponse> {
  return await tryFetch("/articles?populate=*&sort[1]=publishedAt:desc&filters[isFeatured][$eq]=true");
}
