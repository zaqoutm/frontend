import type { Metadata } from "next";
import { Almarai, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

// Fonts
// use variables in css
const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aljazara Home",
  description: "Aljazara news webiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar'>
      <body className={`${[almarai.variable, notoKufi.variable]}`}>
        {/* Navigation */}
        <div>
          <p>navigation</p>
        </div>

        {/* main contanet */}
        {children}

        {/* footer */}
        <footer className={styles.footer}>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
