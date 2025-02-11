import styles from "./page.module.css";
import loadArticles, { ResponseStrapi } from "../data/loaders";
import MainArticle from "../components/mainArticle/mainArticle";
// import Article from "../interfaces/Aricle";

export default async function Home() {
  // main article
  const mainArticleReq: ResponseStrapi = await loadArticles(
    "?filters[isMain][$eq]=true&populate=*"
  );
  const mainArticle = mainArticleReq.data;

  // all articles
  const req: ResponseStrapi = await loadArticles("?populate=*");
  const allArticles = req.data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* big article */}
        <MainArticle {...mainArticle[0]} />

        {/* featured allArticles */}
        {/* sections */}
        <div className={styles.articlesSection}>
          {/* <h1>أخبار المال والأعمال</h1> */}
          {allArticles.map((a) => (
            <MainArticle
              documentId={a.documentId}
              photo={a.photo}
              key={a.documentId}
              title={a.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
