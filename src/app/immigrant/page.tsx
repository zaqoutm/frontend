import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "الجزرة دليل المهاجر",
  description: "جميع المقالات المتعلقة بالمهاجرين والهجرة من الجزرة نيوز",
};

export default function Articles() {
  return (
    <>
      <SectionHeader title={"دليل المهاجر"} />
      <h1>دليل المهاجر</h1>
    </>
  );
}
