import Link from "next/link";
import styles from '../layout.module.css';

export default function Abbreviations() {
  return <>
    <div className={styles.container}>
    <div className={styles.content}>
      <p>Abbreviations: 🧶</p>
      <Link href="https://knittingknowledge.com/knitting-guides/knitting-abbreviations/">
        Knitting abbreviations
      </Link>
      </div>
    </div>
    </>;
}
