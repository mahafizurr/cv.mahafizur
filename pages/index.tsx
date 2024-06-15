import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home = () => (
  <Layout>
    <div className={styles.profile}>
      <img src="/biplob.jpg" alt="mahafizur" className={styles.profileImage} />
      <h1 className={styles.name}>Mahafizur Rahman</h1>
      <p className={styles.title}>Web Application Developer</p>
      <p className={styles.contact}>
        Email:{" "}
        <a href="mailto:john.doe@example.com">mahafizur.rahman@yahoo.com</a> |
        Phone: <a href="tel:+1234567890">+8801726324902</a> |
        <a
          href="https://github.com/mahafizurr"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/mahafizurr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
    <section className={styles.section}>
      <h2>Professional Summary</h2>
      <p>
        Highly skilled Web Application Developer with 5+ years of experience
        specializing in Next.js and TypeScript. Adept at creating dynamic,
        responsive, and user-friendly web applications. Strong problem-solving
        abilities and a passion for learning and applying new technologies.
        Proven track record of delivering high-quality projects on time.
      </p>
    </section>
    <section className={styles.section}>
      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: TypeScript, JavaScript, HTML, CSS, SQL</li>
        <li>Frameworks/Libraries: Next.js, React.js, Node.js, Express.js</li>
        <li>Tools: Git, Docker, Webpack, Babel</li>
        <li>Databases: MongoDB, PostgreSQL, MySQL</li>
        <li>Other: RESTful APIs, GraphQL, CI/CD, Agile/Scrum</li>
      </ul>
    </section>
  </Layout>
);

export default Home;
