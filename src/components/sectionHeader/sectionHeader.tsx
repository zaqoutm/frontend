import styles from "./styles.module.css";
import * as motion from "motion/react-client";

interface SectionMetaData {
  title: string;
}

export function SectionHeader(x: SectionMetaData) {
  return (
    <div className={styles.header}>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.5,
        }}
      >
        {x.title ? x.title : "Title"}
      </motion.h1>
    </div>
  );
}
