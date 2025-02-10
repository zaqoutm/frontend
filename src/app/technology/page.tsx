import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "الجزرة تكنولوجيا",
  description: "جميع مقالات التكنولوجيا من الجزرة نيوز",
};

export default function Articles() {
  return (
    <>
      <SectionHeader title={"أخبار التكنولوجيا"} />
      <h1>أخبار ثقافية</h1>
    </>
  );
}
