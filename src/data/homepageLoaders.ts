import { Article } from "../interfaces/Aricle";

export interface ResponseStrapi {
  data: Article[];
  meta: string;
}

//
//
//
// try to fetch from API_PATH/api
const tryFetch = async (params: string) => {
  try {
    const req = await fetch(process.env.API_PATH + "/articles" + params);
    const json = await req.json();
    return json;
  } catch (error) {
    console.error("trying to fetch /", params);
    console.log(error);
    return new Promise((resolve) => {
      resolve({ data: [], meta: "" });
    });
  }
};

export async function getMainArticle(): Promise<ResponseStrapi> {
  return await tryFetch("?filters[isMain][$eq]=true&populate=*");
}

export async function getArticlesBySection(sectionTitle: string): Promise<ResponseStrapi> {
  return await tryFetch(`?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
}

export async function getFeaturedArticles(): Promise<ResponseStrapi> {
  return await tryFetch("?populate=*&sort[1]=publishedAt:desc&filters[isFeatured][$eq]=true");
}
