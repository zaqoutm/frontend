import styles from "./styles.module.css";
import { StrapiResponse } from "../../interfaces/StrapiResponse";
import JustTitleArticleCard from "../justTitleCard/page";

interface Props {
  listTitle: string;
  articlesList: StrapiResponse;
}

export default function ListMixedArticles({ listTitle, articlesList }: Props) {
  return (
    <>
      <div className={styles.sectioTitle}>
        <h1>{listTitle}</h1>
      </div>
      <div className={styles.articlesList}>
        {articlesList.data.map((a) => (
          <JustTitleArticleCard key={a.documentId} article={a} borderTop={true} />
        ))}
      </div>
    </>
  );
}
