import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import { SectionPageLayout } from "../../components/SectionPageLayout/page";

export const metadata: Metadata = {
  title: "الجزرة دليل المهاجر",
  description: "جميع المقالات المتعلقة بالمهاجرين والهجرة من الجزرة نيوز",
};

export default async function Page() {
  return (
    <div>
      <SectionHeader title={"دليل المهاجر"} />
      <SectionPageLayout sectionTitle='immigrant' />
    </div>
  );
}
