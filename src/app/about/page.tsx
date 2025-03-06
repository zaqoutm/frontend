import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "عن الجزرة نيوز",
  description: "عن الجزرة نيوز",
};

export default async function Page() {
  return (
    <div className={styles.main}>
      <SectionHeader title={"عن الجزرة نيوز"} />

      <div className={styles.content}>
        <p>
          موقع الجزرة نيوز موقع إخباري مهتم بأهم وأخر الأخبار العالمية والاقتصادية والثقافية وأخبار اللجوء والتكنولوجيا والتقنية بمصداقية وموضوعية.
        </p>
        <br />
        <p>
          سرعة في الطرح و مواكبة للاحداث لحظة بلحظة ويناقش القضايا والافكار التي ترتقي بالمجتمعات وتشارك في الارتقاء بالوعي الثقافي وتقدم المعلومات
          القيمة والشاملة التي تلبي احتياجات القارئ بمصداقية وحيادية ومهنية عالية. .
        </p>
      </div>
    </div>
  );
}
