import { Metadata } from "next";
import styles from "./styles.module.css";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "الجزرة كل المقالات",
  description: "جميع المقالات من الجزرة نيوز، مرتبة من الأحدث للأقدم",
};

export default function Articles() {
  return (
    <>
      <SectionHeader title='جميع المقالات' />
      <div className={styles.articles}>
        <h1>جميع المقالات من الجزرة نيوز</h1>
      </div>
    </>
  );
}
