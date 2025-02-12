import { Article } from "../interfaces/Aricle";

export interface ResponseStrapi {
  data: Article[];
  meta: string;
}

export default async function loadArticles(
  params: string
): Promise<ResponseStrapi> {
  const response = await fetch(process.env.API_PATH + "/articles" + params);
  const data = await response.json();
  return data;
}
