import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function NavigationComponent() {
  const width_height = 18;

  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Top */}
        <div className={styles.navTop}>
          <Link href={"/"} className={styles.logo}>
            <Image
              src='/aljazara.svg'
              alt=''
              width={50}
              height={50}
              loading='eager'
              property='false'
            />
          </Link>

          <motion.div
            className={styles.socialLinks}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
          >
            <Link href={"/x.com/aljazaranews"}>
              <Image
                src='/x-icon-white.svg'
                alt=''
                width={width_height}
                height={width_height}
                loading='eager'
              />
            </Link>
            <Link href={"/facebook.com/aljazaranews"}>
              <Image
                src='/fb-icon-white.svg'
                alt=''
                width={width_height}
                height={width_height}
                loading='eager'
              />
            </Link>
            <Link href={"/instagram.com/aljazaranews"}>
              <Image
                src='/insta-icon-white.svg'
                alt=''
                width={width_height}
                height={width_height}
                loading='eager'
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            duration: 1.2,
            staggerChildren: 0.5,
          }}
          className={styles.navBottom}
        >
          <div className={styles.navBottomToggler}>
            <button>
              <Image src='/burger-menu-2.svg' alt='' width={34} height={34} />
            </button>
          </div>
          <ul className={styles.navBottomLinks}>
            <li>
              <Link href='/articles'>كل المقالات</Link>
            </li>
            <li>
              <Link href='/business'>المال والأعمال</Link>
            </li>
            <li>
              <Link href='/technology'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/cultural'>مقالات تثقيفية</Link>
            </li>
            <li>
              <Link href='/immigrant'>دليل المهاجر</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
