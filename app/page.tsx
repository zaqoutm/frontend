import MainArticle from "../components/mainArticle/mainArticle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* big article */}
        <MainArticle
          title={
            "عملة رقمية تحمل اسم عائلة ترامب تسبب خسائر كارثية للمتداوم عائلة ترامب تسبب خسائر كارثية للمتداولين"
          }
          src='/xxx.png'
          imgTag=''
          contentShort='حصلت العملة الرقمية "بارون" (BARRON) على اهتمام كبير بين المتداولين بعد أن كسبت إحدى المحافظ منها أكثر من مليون دولار'
        />

        {/* featured articles */}
        {/* sections */}
        <div className={styles.articlesSection}>
          <h1>أخبار المال والأعمال</h1>
        </div>
      </main>
    </div>
  );
}
