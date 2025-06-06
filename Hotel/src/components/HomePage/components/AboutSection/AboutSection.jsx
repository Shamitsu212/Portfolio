import styles from './AboutSection.module.css';

import hotel from "../../source/pic/black.jpg"

function AboutSection() {
  return (
    <section id="about" className={styles.textSection}>
      <h2 className={styles.sectionTitle}>Гостиница "Название"</h2>
      <div className={styles.contentRow}>
        <div className={styles.imageWrapper}>
          <img src={hotel} alt="Наш пансионат" className={styles.contentImage} />
        </div>
        <div className={styles.textContent}>
          <p>Мы рады приветствовать Вас в гостинице "Название"...</p>
          <p>Наша команда всегда готова учесть все ваши пожелания...</p>
          <p>Будем рады подарить Вам положительные эмоции...</p>
          <p>С наилучшими пожеланиями, команда гостиницы "Название"</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;