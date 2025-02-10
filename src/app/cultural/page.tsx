import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "الجزرة ثقافة",
  description: "جميع مقالات الثقافة من الجزرة نيوز",
};

export default function Articles() {
  return (
    <>
      <SectionHeader title={"مقالات ثقافية"} />
      <h1>أخبار ثقافية</h1>
    </>
  );
}
