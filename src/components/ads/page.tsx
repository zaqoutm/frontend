import styles from "./styles.module.css";

interface AdSize {
  width: number;
  height: number;
}

export default function AdContainer(size: AdSize) {
  return (
    <div className={styles.adContainer}>
      <p>إعلان</p>
      <div
        className={
          size.width == 300 && size.height == 600
            ? styles.ad_300_600
            : size.width == 250 && size.height == 600
            ? styles.ad_250_600
            : // otherwise
              styles.ad_250_250
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        aspernatur ea a doloribus repellat quae laborum in commodi non, quo at
        laboriosam minus doloremque rerum, fugit voluptatem id praesentium
        voluptate.
      </div>
    </div>
  );
}
