import { StrapiResponse, StrapiResponseSingle } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getArticleByDocumentId(documentId: string): Promise<StrapiResponseSingle> {
  return await tryFetch(`/articles/${documentId}?populate=*`);
}

export async function getArticlesBySection(sectionTitle: string): Promise<StrapiResponse> {
  return await tryFetch(`/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
}
