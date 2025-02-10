import styles from "./styles.module.css";

interface SectionMetaData {
  title: string;
}

export function SectionHeader(x: SectionMetaData) {
  return (
    <div className={styles.header}>
      <h1>{x.title ? x.title : "Title"}</h1>
    </div>
  );
}
