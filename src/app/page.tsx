import styles from "./page.module.css";
import loadArticles, { ResponseStrapi } from "../data/loaders";
import MainArticle from "../components/mainArticle/mainArticle";
import ArticleCard from "../components/articleCard/page";
import * as motion from "motion/react-client";

export default async function Home() {
  // main article
  const mainArticleReq: ResponseStrapi = await loadArticles(
    "?filters[isMain][$eq]=true&populate=*"
  );
  const mainArticle = mainArticleReq.data;

  // all articles
  const req: ResponseStrapi = await loadArticles(
    "?populate=*&sort[1]=publishedAt:desc"
  );
  const allArticles = req.data;

  return (
    <div className={styles.page}>
      {/* big article + sections */}
      <div className={styles.container}>
        <main className={styles.main}>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
          >
            <MainArticle {...mainArticle[0]} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 5,
            }}
            className={styles.articlesSection}
          >
            <div className={styles.sectioTitle}>
              <h1>المال والأعمال</h1>
            </div>
            {allArticles.map((a, i) => (
              <ArticleCard key={a.documentId} article={a} borderTop={i > 0} />
            ))}
          </motion.div>
        </main>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 6,
          }}
          className={styles.featuredSection}
        >
          {/* <AdContainer width={250} height={600} /> */}
          <h1>Featured articles</h1>
        </motion.div>
      </div>
    </div>
  );
}
