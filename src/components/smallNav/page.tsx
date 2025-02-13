import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function SmallNavigation() {
  return (
    // .navContainer in the global css
    <motion.div
      className='navContainer'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        visualDuration: 0.2,
      }}
    >
      {/*  */}
      <div className={styles.nav}>
        <Image
          className={styles.navToggleImage}
          src='/burger-menu-black.svg'
          priority={true}
          alt='burger icon'
          width={34}
          height={34}
        />
        <Link href={"/"}>
          <Image
            className={styles.navLogoImage}
            src='/aljazara-black.svg'
            priority={true}
            alt='aljazara logo'
            width={34}
            height={34}
          />
        </Link>
      </div>
      {/*  */}
    </motion.div>
  );
}
