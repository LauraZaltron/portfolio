import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.nameCard}>
        <p className={styles.hi}>Hi! My name is</p>
        <h1 className={styles.name}>Laura<br />Zaltron</h1>
        <span className={styles.titleBadge}>Technical Systems Analyst</span>
        <div className={styles.blob} />
      </div>

      <div className={styles.aboutCard}>
        <h2 className={styles.aboutHeading}>A little about me</h2>
        <div className={styles.rule} />
        <p className={styles.aboutText}>
          I'm a technical systems analyst passionate about designing efficient,
          scalable solutions that bridge business needs and technology.
        </p>
        <p className={styles.aboutText}>
          I love clean architecture, meaningful data, and building interfaces
          people actually enjoy using.
        </p>
      </div>
    </section>
  );
}
