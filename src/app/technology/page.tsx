import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import { SectionPageLayout } from "../../components/SectionPageLayout/page";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "الجزرة تكنولوجيا",
  description: "جميع مقالات التكنولوجيا من الجزرة نيوز",
};

export default async function Page() {
  return (
    <div className={styles.main}>
      <SectionHeader title={"أخبار التكنولوجيا"} />
      <SectionPageLayout sectionTitle='technology' />
    </div>
  );
}
