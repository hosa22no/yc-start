import styles from "./Navigation.module.css";
import Link from "next/link";

const LINKS = [
  { href: "/", text: "Home", description: "Homepage"},
  { href: "/ravelry", text: "Ravelry", description: "Connect to Ravelry"},
  { href: "/abbreviations", text: "Abbreviations", description: "Knitting abbreviations"},
  { href: "/tools", text: "Tools", description: "Tools"},
  { href: "/contact", text: "Contact", description: "Contact me"}
]

export default function Navigation() {
  return (<div className={styles.grid}>
    
 {LINKS.map((x, index) => (
        <NavigationLink key={index} {...x} />
      ))}
    </div>
    
  );
}

function NavigationLink({text, description, href}){
    return(
        <Link
        href={href}
        className={styles.card}>
        <h2>
          {text}<span>-&gt;</span>
        </h2>
        <p>{description}</p>
      </Link>

     
    )

}