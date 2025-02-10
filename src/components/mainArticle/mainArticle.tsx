import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Article } from "../../interfaces/Aricle";

export default function MainArticle(article: Article) {
  return (
    <Link href={`/articles/${article.documentId}`} className={styles.main}>
      {/* iamge */}
      <div className={styles.imageContainer}>
        <span>{article.id}</span>
        <span>{article.documentId}</span>

        <Image
          src={article.imgUri ? article.imgUri : "/xxx.png"}
          alt={article.imgTag ? article.imgTag : ""}
          width={500}
          height={500}
          property='false'
        />
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title ? article.title : "loading..."}</h1>
        <p>{article.content ? article.content : "loading..."}</p>
      </div>
    </Link>
  );
}
