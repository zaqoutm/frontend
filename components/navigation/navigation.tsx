import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

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
              property='true'
            />
          </Link>

          <div className={styles.socialLinks}>
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
              <Link href='/technology'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/culture'>مقالات تثقيفية</Link>
            </li>
            <li>
              <Link href='/immigration'>دليل المهاجر</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
