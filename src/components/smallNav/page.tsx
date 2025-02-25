"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import * as motion from "motion/react-client";
// https://motion.dev/docs/react-quick-start

export default function SmallNavigation() {
  const closeMenu = () => setisOpen(false);
  const toggleMenu = () => setisOpen(!isOpen);

  const [isOpen, setisOpen] = useState(true);
  // const [isOpen, setisOpen] = useState(false);
  // setInterval(() => {
  //   toggleMenu();
  // }, 3000);

  const linksList = [
    { title: "المال والأعمال", path: "business" },
    { title: "التكنولوجيا", path: "technology" },
    { title: "مقالات تثقيفية", path: "cultural" },
    { title: "دليل المهاجر", path: "immigrant" },
    // { title: "", path: "" },
  ];
  const containerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
      },
    },
  };
  const containerKid = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.9,
      },
    },
  };

  return (
    // .navContainer in the global css
    <div className='navContainer'>
      <div className={`${styles.nav}`}>
        {/*  */}
        {/*  */}
        <div className={styles.navTop}>
          <button onClick={toggleMenu}>
            <Image className={styles.navToggleImage} src='/burger-menu-black.svg' priority={true} alt='burger icon' width={20} height={20} />
          </button>
          <Link href={"/"} onClick={closeMenu}>
            <Image className={styles.navLogoImage} src='/aljazara-black.svg' priority={true} alt='aljazara logo' width={34} height={34} />
          </Link>
        </div>

        {/*  */}
        {/* links */}
        <motion.div className={`${styles.drawerLinks}`} variants={containerVariants} initial={false} animate={isOpen ? "open" : "closed"}>
          {/* kid */}
          <motion.ul variants={containerKid} className={`${styles.kid} ${!isOpen && styles.pointerNone}`}>
            {linksList.map((item, index) => (
              <motion.li variants={itemVariants} onClick={closeMenu} key={index}>
                <Link href={`/${item.path}`}>{item.title}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
