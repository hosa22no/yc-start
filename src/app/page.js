import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      
      <div className={styles.description}>
        <p>
          The product is a web application primarily designed for use on mobile
          devices such as phones and tablets, targeted towards individuals who
          engage in handcrafts, particularly knitting and crocheting. It will
          also be available as a web application optimized for smaller screens.
          Initially, it will be released as a web application, with future
          development focusing mainly on Android but also on iPhone. The
          application will offer both simpler and more advanced features. Users
          should be able to log in to connect their app user account with their
          Ravelry account. Ravelry is the leading online community and database
          for patterns for knitters, crocheters, and other yarn crafts, boasting
          over 9 million members worldwide. Many Swedish handcraft enthusiasts
          also use Ravelry for inspiration, finding patterns and yarn, saving
          their projects, and connecting with other crafters. Once the app is
          linked to Ravelry, users should be able to directly access their
          patterns from within the app, allowing them to have them available
          wherever they want to knit or crochet. Other features the app will
          include are counters that users can click to count rows, easily
          resettable. There will also be a timer that can be started to
          calculate how long one has been working on a project, which must be
          resettable. Additionally, there will be a calculator to assist with
          increasing or decreasing the number of stitches. Alongside links to
          resources such as YouTube, there will be a page in the app containing
          shortcuts to various knitting techniques, cast-ons, and bind-offs.
          Users should also be able to download PDF files, select which pages to
          include, and write notes or annotations within the PDFs, which will be
          saved. For PDF files containing stitch charts, users should be able to
          crop out the chart as an image for separate saving.
          
          <div className={styles.center}>
        <img
          src="YarncraftLogo.png"
          alt="YarnCraft Logo"
          width="80%"
          height="auto"
        ></img>
      </div>
        </p>
        
      </div>
    </>
  );
}
