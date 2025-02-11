import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Article } from "../../interfaces/Aricle";
import config from "../../config";

export default function MainArticle(article: Article) {
  return (
    <Link href={`/articles/${article.documentId}`} className={styles.main}>
      {/* iamge */}
      <div className={styles.imageContainer}>
        <Image
          src={
            article.photo?.url ? config.baseUrl + article.photo.url : "/xxx.png"
          }
          alt={article.imgTag ? article.imgTag : ""}
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
