import styles from '../layout.module.css';

export default function Ravelry() {
    return <>

        <div className={styles.container}>
            <div className={styles.content}>
            <h2>Here you can log in to your Ravelry account</h2>
            <form className={styles.form}>
                <label>
                    Username:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        
        </div>
        
    </>}