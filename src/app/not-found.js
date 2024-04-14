import styles from './layout.module.css';
import Link from 'next/link';



// Custom 404 page
export default function NotFound() {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
          <h1>

            404 - Page Not Found
          </h1>
          <h2>
            The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
            </h2>
            <img src="404-gif.gif" alt="404 - page not found" />
           
           <div classname={styles.code}> <Link href="/">Go back to the homepage</Link></div>
         </div>

        </div>
      )};