"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import MainArticle from "../mainArticle/mainArticle";
import { StrapiResponse } from "../../interfaces/StrapiResponse";
import ListArticles from "../listArticles/page";
import ArticleFeaturedCard from "../articleFeaturedCard/page";
import * as motion from "motion/react-client";

export function HomePageSwitcher(lists: StrapiResponse[]) {
  const [active, setActive] = useState("news");

  function makeActive(tab: string) {
    setActive(tab);
  }

  return (
    <div>
      {/* swithc */}
      <div className={styles.switcher}>
        <button onClick={() => makeActive("news")} className={`${styles.switcherButton} ${active == "news" && styles.activeSwitch}`}>
          آخر الأخبار
        </button>
        <button onClick={() => makeActive("featured")} className={`${styles.switcherButton} ${active == "featured" && styles.activeSwitch}`}>
          أخبار مميزة
        </button>
      </div>

      <div className={styles.content}>
        {/* news */}
        <div className={`${styles.newsTab} ${active != "news" && styles.hideMe}`}>
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 2,
            }}
          >
            <MainArticle {...lists[0].data[0]} />
          </motion.div>
          <ListArticles listTitle='أخبار المال والأعمال' sectionURL='business' articlesList={lists[1]} />
          <ListArticles listTitle='أخبار التكنولوجيا' sectionURL='technology' articlesList={lists[2]} />
          <ListArticles listTitle='مقالات ثقافية' sectionURL='cultural' articlesList={lists[3]} />
        </div>
        {/* featured news */}
        <div className={`${styles.newsTab} ${active != "featured" && styles.hideMe}`}>
          {lists[4].data.map((a, i) => (
            <ArticleFeaturedCard key={a.documentId} article={a} borderTop={i > 0} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
