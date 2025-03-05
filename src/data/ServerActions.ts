"use server";

import { StrapiResponse } from "../interfaces/StrapiResponse";
import { getArticlesPageBySection } from "./sectionPageLoaders";

export async function loadMoreArticles(sectionTitle: string, pageSize: number): Promise<StrapiResponse> {
  const response = await getArticlesPageBySection(sectionTitle, 0, pageSize);
  return response;
}
