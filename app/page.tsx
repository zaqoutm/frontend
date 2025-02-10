import MainArticle from "../components/mainArticle/mainArticle";
import { Article } from "../interfaces/Aricle";
import styles from "./page.module.css";

export default function Home() {
  const article: Article = {
    documentId: "66699955",
    title:
      "عملة رقمية تحمل اسم عائلة ترامب تسبب خسائر كارثية للمتداوم عائلة ترامب تسبب خسائر كارثية للمتداولين",
    imgUri: "/xxx.png",
    imgTag: "",
    content:
      'حصلت العملة الرقمية "بارون" (BARRON) على اهتمام كبير بين المتداولين بعد أن كسبت إحدى المحافظ منها أكثر من مليون دولار',
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* big article */}
        <MainArticle {...article} />

        {/* featured articles */}
        {/* sections */}
        <div className={styles.articlesSection}>
          <h1>أخبار المال والأعمال</h1>
        </div>
      </main>
    </div>
  );
}
