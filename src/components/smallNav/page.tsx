"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SmallNavigation() {
  const [clicked, setClicked] = useState(false);
  const closeMenu = () => setClicked(false);
  const toggleMenu = () => setClicked(!clicked);

  return (
    // .navContainer in the global css
    <div className='navContainer'>
      {/*  */}
      <div className={`${styles.nav}`}>
        <div className={styles.navTop}>
          <button onClick={toggleMenu}>
            <Image className={styles.navToggleImage} src='/burger-menu-black.svg' priority={true} alt='burger icon' width={20} height={20} />
          </button>
          <Link href={"/"} onClick={closeMenu}>
            <Image className={styles.navLogoImage} src='/aljazara-black.svg' priority={true} alt='aljazara logo' width={34} height={34} />
          </Link>
        </div>
        {/*  */}
        <div className={`${styles.drawerLinks} ${clicked && styles.showNav}`}>
          <Link href='/business' onClick={closeMenu}>
            المال والأعمال
          </Link>
          <Link href='/technology' onClick={closeMenu}>
            التكنولوجيا
          </Link>
          <Link href='/cultural' onClick={closeMenu}>
            مقالات تثقيفية
          </Link>
          <Link href='/immigrant' onClick={closeMenu}>
            دليل المهاجر
          </Link>
        </div>
      </div>
    </div>
  );
}
