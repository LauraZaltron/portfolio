import styles from './ProjectCard.module.css';

const Scenery = () => (
  <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" className={styles.placeholder}>
    <rect width="160" height="120" fill="#c9e8f5"/>
    <ellipse cx="44" cy="38" rx="22" ry="15" fill="white" opacity="0.9"/>
    <ellipse cx="72" cy="32" rx="16" ry="12" fill="white" opacity="0.75"/>
    <ellipse cx="80" cy="95" rx="90" ry="34" fill="#8bc34a" opacity="0.7"/>
    <ellipse cx="80" cy="102" rx="90" ry="28" fill="#6aaa25" opacity="0.55"/>
  </svg>
);

export default function ProjectCard({ project, style }) {
  return (
    <a
      href={project.link}
      className={styles.card}
      style={style}
      aria-label={`View project: ${project.name}`}
    >
      <div className={styles.pin} />
      <div className={styles.imageWrapper}>
        {project.image
          ? <img src={project.image} alt={project.name} className={styles.image} />
          : <Scenery />
        }
        <div className={styles.overlay}>
          <span className={styles.viewLabel}>View Project →</span>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.desc}>{project.description}</p>
      </div>
    </a>
  );
}
