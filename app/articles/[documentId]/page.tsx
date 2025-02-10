import { Metadata } from "next";
import styles from "./styles.module.css";
import { SectionHeader } from "../../../components/sectionHeader/sectionHeader";

export const metadata: Metadata = {
  title: "articlr title",
  description: "",
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const x = await params;

  return (
    <>
      <SectionHeader title={`Article ${x.documentId}`} />
      <div className={styles.container}>
        <h1>Article {x.documentId}</h1>
      </div>
    </>
  );
}
