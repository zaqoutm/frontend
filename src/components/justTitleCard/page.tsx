import Link from "next/link";
import { Article } from "../../interfaces/Aricle";
import styles from "./styles.module.css";
import moment from "moment";
import "moment/locale/ar";
moment.locale("ar");

type Props = {
  article: Article;
  borderTop: boolean;
};

export default function JustTitleArticleCard({ article, borderTop }: Props) {
  return (
    <Link
      href={`/articles/${article.documentId}`}
      className={`${styles.main} ${article.isFeatured && styles.featured} ${!borderTop && styles.noBorderTop}`}
    >
      {/* article title */}
      <div className={styles.titleContainer}>
        <div className={styles.cardTop}>
          <div className={styles.cardPunkt}></div>
          <p>{moment(article.publishedAt).fromNow()}</p>
        </div>
        <h1>{article.title}</h1>
      </div>
    </Link>
  );
}
