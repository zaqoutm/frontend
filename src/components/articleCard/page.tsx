import Image from "next/image";
import Link from "next/link";
import { Article } from "../../interfaces/Aricle";
import styles from "./styles.module.css";

export default function ArticleCard(article: Article) {
  return (
    <Link
      href={`/articles/${article.documentId}`}
      className={`${styles.main} ${article.isFeatured && styles.featured}`}
    >
      {/* iamge */}
      <div className={styles.imageContainer}>
        <Image
          src={article.photo ? article.photo.url : "/xxx.png"}
          alt={
            article.photo && article.photo.alternativeText
              ? article.photo.alternativeText
              : "Picture text"
          }
          width={200}
          height={200}
          property='false'
        />
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        {article.section ? (
          <p className={styles.badge}>{article.section?.title}</p>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
