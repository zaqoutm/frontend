import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function NavigationComponent() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Top */}
        <div className={styles.navTop}>
          <Link href={"/"}>
            <Image src='aljazara.svg' alt='' width={100} height={100} />
          </Link>
          <div>social</div>
        </div>

        {/* Bottom */}
        <div className={styles.navBottom}>
          <div className={styles.navBottomToggler}>
            <Link href='/bla'>button</Link>
          </div>
          <ul className={styles.navBottomLinks}>
            <li>
              <Link href='/business'>المال والأعمال</Link>
            </li>
            <li>
              <Link href='/tech'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/tech'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/tech'>التكنولوجيا</Link>
            </li>
            <li>
              <Link href='/tech'>التكنولوجيا</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
