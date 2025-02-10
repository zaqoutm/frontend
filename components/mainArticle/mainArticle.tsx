import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

interface Article {
  title: string;
  src: string;
  imgTag: string;
  contentShort: string;
}

export default function MainArticle(article: Article) {
  return (
    <Link href='/articles/1234' className={styles.main}>
      {/* iamge */}
      <div className={styles.imageContainer}>
        <Image
          src={article.src ? article.src : "/xxx.png"}
          alt={article.imgTag}
          width={500}
          height={500}
          property='false'
        />
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title ? article.title : "loading..."}</h1>
        <p>{article.contentShort ? article.contentShort : "loading..."}</p>
      </div>
    </Link>
  );
}
