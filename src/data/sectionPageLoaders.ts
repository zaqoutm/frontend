import { StrapiResponse } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getArticlesPageBySection(sectionTitle: string, page: number, pageSize: number): Promise<StrapiResponse> {
  return await tryFetch(
    `/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
}
