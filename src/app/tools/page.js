import styles from '../layout.module.css';

export default function Tools() {
    return <>
      
        <div className={styles.container}>
        <div className={styles.content}>
        <h2>Tools: ✂️</h2>
            <h3>On this page the user are going to find some useful tools</h3>
            <ul>
                <li>Yarn calculator</li>
                <li>Needle size conversion chart</li>
                <li>Stitch calculator</li>
                </ul>
        </div>
        </div>
    </>
}