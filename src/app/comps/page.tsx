import ArticleCard from "../../components/articleCard/page";
import MainArticle from "../../components/mainArticle/mainArticle";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import styles from "./styles.module.css";

export default function ComponentsPage() {
  return (
    <div className={styles.compsPage}>
      <h2>SectionHeader Components</h2>
      <SectionHeader title='Section Header' />

      <h2>Main article Components</h2>
      <MainArticle title='Hello this is title' isMain={true} />

      <h2>Article card Components</h2>
      <ArticleCard
        title='Hello this is title'
        section={{ title: "business" }}
      />
    </div>
  );
}
