import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About = () => (
  <Layout>
    <section className={styles.section}>
      <h1>About Me</h1>
      <p>
        Highly skilled Web Application Developer with 5+ years of experience...
      </p>
      <h2>Professional Experience</h2>
      <div>
        <h3>Senior Web Application Developer</h3>
        <p>Multiconsultation Limited, Dhaka (June 2020 – Present)</p>
        <ul>
          <li>
            Lead the development of scalable web applications using Next.js and
            TypeScript, resulting in a 30% increase in user engagement.
          </li>
          <li>
            Implemented server-side rendering (SSR) and static site generation
            (SSG) to enhance application performance and SEO.
          </li>
          <li>
            Collaborated with cross-functional teams to define, design, and ship
            new features.
          </li>
          <li>
            Conducted code reviews and mentored junior developers on best
            practices for Next.js and TypeScript.
          </li>
          <li>
            Integrated third-party APIs and services, improving application
            functionality and user experience.
          </li>
        </ul>
      </div>
      <div>
        <h3>Web Developer</h3>
        <p>Multiconsultation Limited, Dhaka (January 2017 – May 2020)</p>
        <ul>
          <li>
            Developed and maintained web applications using React.js, Next.js,
            and TypeScript.
          </li>
          <li>
            Optimized application performance, reducing load times by 20%
            through code splitting and lazy loading.
          </li>
          <li>
            Created reusable components and libraries to streamline development
            processes.
          </li>
          <li>
            Worked closely with UX/UI designers to ensure technical feasibility
            and optimal user experience.
          </li>
          <li>
            Utilized Git for version control and collaborated with team members
            using GitHub.
          </li>
        </ul>
      </div>
    </section>
    <section className={styles.section}>
      <h2>Education</h2>
      <p>
        Bachelor of Science in Computer Science from Green University of
        Bangladesh
      </p>
    </section>
    <section className={styles.section}>
      <h2>Projects</h2>
      <div>
        <h3>E-Commerce Platform</h3>
        <p>
          Developed a full-featured e-commerce platform using Next.js and
          TypeScript.
        </p>
        <ul>
          <li>
            Implemented a custom shopping cart, product search, and checkout
            process.
          </li>
          <li>Integrated with Stripe API for payment processing.</li>
        </ul>
      </div>
      <div>
        <h3>Personal Blog</h3>
        <p>
          Created a personal blog using Next.js with static site generation.
        </p>
        <ul>
          <li>Implemented markdown support for writing posts.</li>
          <li>
            Optimized for SEO and implemented dark mode for better user
            experience.
          </li>
        </ul>
      </div>
    </section>
    <section className={styles.section}>
      <h2>Certifications</h2>
      <ul>
        <li>Certified JavaScript Developer, W3Schools</li>
        <li>TypeScript Essential Training, LinkedIn Learning</li>
      </ul>
    </section>
    <section className={styles.section}>
      <h2>Languages</h2>
      <ul>
        <li>English </li>
        <li>Bangla </li>
      </ul>
    </section>
    <section className={styles.section}>
      <h2>References</h2>
      <p>Available upon request.</p>
    </section>
  </Layout>
);

export default About;
