import styles from "./page.module.css";
import * as service from "../data/homepageLoaders";
import MainArticle from "../components/mainArticle/mainArticle";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "../components/articleCard/page";
import ArticleFeaturedCard from "../components/articleFeaturedCard/page";
import { StrapiResponse } from "../interfaces/StrapiResponse";

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
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 3,
            }}
            className={styles.articlesSection}
          >
            <div className={styles.sectioTitle}>
              <h1>أخبار المال والأعمال</h1>
              <Image src={"/chevronLeft.svg"} alt='chevron icon' width={18} height={18} />
            </div>
            <div className={styles.articlesList}>
              {businessArticlesResponse.data.map((a) => (
                <ArticleCard key={a.documentId} article={a} borderTop={true} />
              ))}
              <div className={styles.readMoreBtnContainer}>
                <Link className={styles.readMoreBtn} href={"/business"}>
                  إقرأ المزيد
                </Link>
              </div>
            </div>
          </motion.div>

          {/* tech */}
          <div className={styles.sectioTitle}>
            <h1>أخبار التكنولوجيا</h1>
            <Image src={"/chevronLeft.svg"} alt='chevron icon' width={18} height={18} />
          </div>
          <div className={styles.articlesList}>
            {techArticlesResponse.data.map((a) => (
              <ArticleCard key={a.documentId} article={a} borderTop={true} />
            ))}
            <div className={styles.readMoreBtnContainer}>
              <Link className={styles.readMoreBtn} href={"/technology"}>
                إقرأ المزيد
              </Link>
            </div>
          </div>

          {/* cultural */}
          <div className={styles.sectioTitle}>
            <h1>مقالات ثقافية</h1>
            <Image src={"/chevronLeft.svg"} alt='chevron icon' width={18} height={18} />
          </div>
          <div className={styles.articlesList}>
            {culturalArticlesResponse.data.map((a) => (
              <ArticleCard key={a.documentId} article={a} borderTop={true} />
            ))}
            <div className={styles.readMoreBtnContainer}>
              <Link className={styles.readMoreBtn} href={"/technology"}>
                إقرأ المزيد
              </Link>
            </div>
          </div>
        </main>

        {/*  */}
        {/* Featured articles */}
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
