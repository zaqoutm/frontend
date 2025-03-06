import { Metadata } from "next";
import { SectionHeader } from "../../components/sectionHeader/sectionHeader";
import styles from "./styles.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل معنا",
};

export default async function Page() {
  const width_height = 18;

  return (
    <div className={styles.main}>
      <SectionHeader title={"تواصل معنا"} />

      <div className={styles.content}>
        <div className={styles.flex}>
          <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
          <h1>عبر منصات التواصل</h1>
        </div>
        <div className={styles.links}>
          <a href='https://facebook.com/#' target='_blank'>
            facebook فيس بوك
          </a>
          <a href='https://instagram.com/#' target='_blank'>
            instagram انستغرام
          </a>
          <a href='https://whatsapp.com/#' target='_blank'>
            whatsapp واتس اب
          </a>
        </div>
        <br />
        <div className={styles.flex}>
          <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
          <h1>عبر البريد الإلكتروني</h1>
        </div>
        <div className={styles.links}>
          <a href='mailto:contact@aljazara.com'>أرسل بريد </a>
        </div>
        <br />
      </div>
    </div>
  );
}
