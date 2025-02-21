"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.page}>
      <div className={styles.flexColCenter}>
        <h1 className={styles.sectioTitle}>حدث خطأ ما</h1>
        <button
          className={styles.readMoreBtn}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          أعد المحاولة
        </button>
      </div>
    </div>
  );
}
