import { Metadata } from "next";
import styles from "./styles.module.css";
import { SectionHeader } from "../../../components/sectionHeader/sectionHeader";
import { getArticleByDocumentId } from "../../../data/articlePageLoaders";
import { StrapiResponseSingle } from "../../../interfaces/StrapiResponse";
import Image from "next/image";

export const metadata: Metadata = {
  title: "articlr title",
  description: "",
};

export default async function ArticlePage({ params }: { params: Promise<{ documentId: string }> }) {
  const x = await params;

  // get the article by document id
  const articleByDocumentId: StrapiResponseSingle = await getArticleByDocumentId(x.documentId);
  const article = articleByDocumentId.data;
  console.log(article);

  // get articles in the same section
  // get mixed news

  return (
    <div className={styles.main}>
      {article.title ? <SectionHeader title={article.title} /> : ""}

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={article.photo ? article.photo.url : "/aljazara.svg"}
            alt={article.photo && article.photo.alternativeText ? article.photo.alternativeText : "Picture text"}
            width={200}
            height={200}
            priority={true}
          />
          <p className={styles.imageCaption}>{article.photo?.caption}</p>
        </div>
        <div className={styles.createdAtContainer}>
          <p>{article.createdAt}</p>
        </div>
        {/* {article.content} */}
      </div>
    </div>
  );
}
