import { StrapiResponseSingle } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getArticleByDocumentId(documentId: string): Promise<StrapiResponseSingle> {
  return await tryFetch(`/articles/${documentId}?populate=*`);
}
