import { useState } from 'react';
import { skills } from '../data/skills';
import styles from './Skillset.module.css';

export default function Skillset() {
  const [active, setActive] = useState(null);
  const activeSkill = skills.find(s => s.id === active);

  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.heading}>My Skillset</h2>

      <div className={styles.layout}>
        <div className={styles.basketWrapper}>
          <div className={styles.basket}>
            <div className={styles.handleTop} />
            <div className={styles.handleBottom} />
            <div className={styles.basketGrid}>
              {skills.map(skill => (
                <button
                  key={skill.id}
                  className={`${styles.skillIcon} ${active === skill.id ? styles.skillActive : ''}`}
                  onMouseEnter={() => setActive(skill.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(skill.id)}
                  onBlur={() => setActive(null)}
                  aria-label={skill.name}
                  style={{ '--skill-color': skill.color }}
                >
                  <span className={styles.svgIcon} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.infoPanel} ${activeSkill ? styles.infoPanelActive : ''}`}>
          {activeSkill ? (
            <>
              <div className={styles.infoBadge} style={{ background: activeSkill.color }}>
                {activeSkill.level}
              </div>
              <h3 className={styles.infoName}>{activeSkill.name}</h3>
              <p className={styles.infoDesc}>{activeSkill.description}</p>
            </>
          ) : (
            <p className={styles.infoHint}>
              Hover over each icon in the basket to learn about that skill.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
