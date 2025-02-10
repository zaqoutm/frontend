import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "الجزرة مال وأعمال",
  description: "جميع مقالات المال والأعمال من الجزرة نيوز",
};

export default function Articles() {
  return (
    <>
      <SectionHeader title={"المال والأعمال"} />
      <h1>أخبار المال والأعمال</h1>
    </>
  );
}
