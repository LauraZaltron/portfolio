import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.board}>
        <div className={styles.boardFrame}>
          <h2 className={styles.heading}>Projects I've Done</h2>
          <div className={styles.cardGrid}>
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
