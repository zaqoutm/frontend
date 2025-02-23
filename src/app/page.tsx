import styles from "./page.module.css";
import * as service from "../data/homepageLoaders";
import MainArticle from "../components/mainArticle/mainArticle";
import * as motion from "motion/react-client";
import Link from "next/link";
import ArticleFeaturedCard from "../components/articleFeaturedCard/page";
import { StrapiResponse } from "../interfaces/StrapiResponse";
import ListArticles from "../components/listArticles/page";

export default async function Home() {
  const mainArticlesResponse: StrapiResponse = await service.getMainArticle();
  const businessArticlesResponse: StrapiResponse = await service.getArticlesBySection("business");
  const techArticlesResponse: StrapiResponse = await service.getArticlesBySection("technology");
  const culturalArticlesResponse: StrapiResponse = await service.getArticlesBySection("cultural");
  const featuredArticlesRes: StrapiResponse = await service.getFeaturedArticles();

  return (
    <div className={styles.page}>
      {/* switcher on tablet */}
      <div className={styles.switcher}>
        <Link href={"#"} className={styles.activeSwitch}>
          آخر الأخبار
        </Link>
        <Link href={"#"}>أخبار مميزة</Link>
      </div>

      {/* contains (featured) and (main,articles) */}
      <div className={styles.container}>
        <main className={styles.main}>
          {/* main article */}
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
          >
            {mainArticlesResponse ? <MainArticle {...mainArticlesResponse.data[0]} /> : <MainArticle />}
          </motion.div>
          {/* business */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className={styles.articlesSection}
          >
            <ListArticles listTitle='أخبار المال والأعمال' sectionURL='business' articlesList={businessArticlesResponse} />
          </motion.div>

          {/* tech */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='أخبار التكنولوجيا' sectionURL='technology' articlesList={techArticlesResponse} />
          </div>

          {/* cultural */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='مقالات ثقافية' sectionURL='cultural' articlesList={culturalArticlesResponse} />
          </div>
        </main>

        {/*  */}
        {/* Featured articles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
          className={styles.featuredSection}
        >
          {/* <AdContainer width={250} height={600} /> */}
          <div className={styles.articlesList}>
            {featuredArticlesRes.data.map((a, i) => (
              <ArticleFeaturedCard key={a.documentId} article={a} borderTop={i > 0} />
            ))}
          </div>
          {/*  */}
        </motion.div>
      </div>
    </div>
  );
}
