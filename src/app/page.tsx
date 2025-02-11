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
  console.log(allArticles);

  // by section

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* big article */}

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

        <div>
          {/* featured allArticles */}
          <div></div>

          {/* sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 5,
            }}
            className={styles.articlesSection}
          >
            <h1>المال والأعمال</h1>
            {allArticles.map((a) => (
              <ArticleCard
                key={a.documentId}
                title={a.title}
                documentId={a.documentId}
                photo={a.photo}
                section={a.section}
                isFeatured={a.isFeatured}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
