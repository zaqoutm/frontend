import styles from "./page.module.css";
import loadArticles, { ResponseStrapi } from "../data/loaders";
import MainArticle from "../components/mainArticle/mainArticle";
import ArticleCard from "../components/articleCard/page";
import * as motion from "motion/react-client";
import Link from "next/link";
import ArticleFeaturedCard from "../components/articleFeaturedCard/page";

export default async function Home() {
  // main article
  const mainArticleReq: ResponseStrapi = await loadArticles(
    "?filters[isMain][$eq]=true&populate=*"
  );
  const mainArticle = mainArticleReq.data;

  // all articles
  const req: ResponseStrapi = await loadArticles(
    "?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=business"
  );
  const allBusinessArticles = req.data;

  const req1: ResponseStrapi = await loadArticles(
    "?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=technology"
  );
  const allTechArticles = req1.data;

  const req2: ResponseStrapi = await loadArticles(
    "?populate=*&sort[1]=publishedAt:desc&filters[isFeatured][$eq]=true"
  );
  const allFeaturedArticles = req2.data;

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

          {/* business */}
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 3,
            }}
            className={styles.articlesSection}
          >
            <div className={styles.sectioTitle}>
              <h1>المال والأعمال</h1>
            </div>
            <div className={styles.articlesList}>
              {allBusinessArticles.map((a, i) => (
                <ArticleCard key={a.documentId} article={a} borderTop={i > 0} />
              ))}
              <Link className={styles.articlesSectionButton} href={"/business"}>
                إقرأ المزيد
              </Link>
            </div>
          </motion.div>

          {/* tech */}
          <div className={styles.sectioTitle}>
            <h1>تكنولوجيا</h1>
          </div>
          <div className={styles.articlesList}>
            {allTechArticles.map((a, i) => (
              <ArticleCard key={a.documentId} article={a} borderTop={i > 0} />
            ))}
            <Link className={styles.articlesSectionButton} href={"/technology"}>
              إقرأ المزيد
            </Link>
          </div>
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
          <div className={styles.articlesList}>
            {allFeaturedArticles.map((a, i) => (
              <ArticleFeaturedCard
                key={a.documentId}
                article={a}
                borderTop={i > 0}
              />
            ))}
          </div>
          {/*  */}
        </motion.div>
      </div>
    </div>
  );
}
