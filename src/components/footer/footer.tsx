import Image from "next/image";
import styles from "./styles.module.css";

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href='/about'>من نحن</a>
        <a href='/privacy'>سياسة الخصوصية</a>
        <a href='/contact'>اتصل بنا</a>
      </div>
      <div className={styles.footerLogo}>
        <Image src='/jazara.svg' alt='Aljazara logo' width={37} height={76} />
        <div className={styles.footerLogoSlug}>
          <p>موقع الجزرة نيوز</p>
          <p>. © 2025</p>
        </div>
      </div>
    </div>
  );
}
