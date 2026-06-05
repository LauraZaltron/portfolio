import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Laura Zaltron — Technical Systems Analyst
      </p>
      <p className={styles.text}>
        This site was developed using React with the help of AI, and hosted on GitHub Pages. The source code is available on <a href="https://github.com/laurazaltron/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </footer>
  );
}
