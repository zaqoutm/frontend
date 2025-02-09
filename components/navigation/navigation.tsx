import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function NavigationComponent() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Top */}
        <div className={styles.navTop}>
          <Link href={"/"} className={styles.logo}>
            <Image
              src='aljazara.svg'
              alt=''
              width={50}
              height={50}
              loading='eager'
            />
          </Link>

          <div className={styles.socialLinks}>
            <Link href={"/"}>
              <Image
                src='x-icon-white.svg'
                alt=''
                width={24}
                height={24}
                loading='eager'
              />
            </Link>
            <Link href={"/"}>
              <Image
                src='fb-icon-white.svg'
                alt=''
                width={24}
                height={24}
                loading='eager'
              />
            </Link>
            <Link href={"/"}>
              <Image
                src='insta-icon-white.svg'
                alt=''
                width={24}
                height={24}
                loading='eager'
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.navBottom}>
          {/* <div className={styles.navBottomToggler}> */}
          {/* <button>
              <Image src='aljazara.svg' alt='' width={100} height={100} />
            </button> */}
          {/* </div> */}
          <ul className={styles.navBottomLinks}>
            <li>
              <Link href='/business'>المال والأعمال</Link>
            </li>
            <li>
              <Link href='/tech'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/tech'>مقالات تثقيفية</Link>
            </li>
            <li>
              <Link href='/tech'>دليل المهاجر</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
