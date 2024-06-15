import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      &copy; {new Date().getFullYear()} Mahafizur Rahman. All rights reserved.
    </p>
  </footer>
);

export default Footer;
