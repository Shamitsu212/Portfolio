import styles from './AboutSection.module.css';

import hotel from "../../source/pic/hotel.png"

function AboutSection() {
  return (
    <section id="about" className={styles.textSection}>
      <h2 className={styles.sectionTitle}>Гостиница "Чайка"</h2>
      <div className={styles.contentRow}>
        <div className={styles.imageWrapper}>
          <img src={hotel} alt="Фото гостинницы" className={styles.contentImage} />
        </div>
        <div className={styles.textContent}>
          <p>Мы рады приветствовать Вас в гостинице "Чайка"</p>
          <p>Наша команда с радостью обеспечит вам лучший отдых у моря — с уютной атмосферой, вниманием к деталям и высоким уровнем сервиса. Мы учитываем все ваши пожелания, чтобы сделать ваше пребывание по-настоящему незабываемым.</p>
          <p>Будем рады подарить Вам положительные эмоции и приятные воспоминания</p>
          <p>С наилучшими пожеланиями, команда гостиницы "Чайка"</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;