//
//
// https://docs-next.strapi.io/
// https://docs.strapi.io/dev-docs/api/rest/parameters
//
//
//
// try to fetch from API_PATH/api
export const tryFetch = async (params: string) => {
  try {
    const req = await fetch(process.env.API_PATH + params);
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
