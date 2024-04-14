import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Navigation from "@/Components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YarnCraft",
  description: "Knitting and crochet resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className={styles.main}>

        <Navigation />

        {children}
        
        </main>

        </body>
    </html>
  );
}
