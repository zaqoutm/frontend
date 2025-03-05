import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import styles from "./styles.module.css";

import { SectionPageLayout } from "../../components/SectionPageLayout/page";

export const metadata: Metadata = {
  title: "الجزرة مال وأعمال",
  description: "جميع مقالات المال والأعمال من الجزرة نيوز",
};

export default async function Page() {
  return (
    <div className={styles.main}>
      <SectionHeader title={"مقالات ثقافية"} />
      <SectionPageLayout sectionTitle='cultrular' />
    </div>
  );
}
