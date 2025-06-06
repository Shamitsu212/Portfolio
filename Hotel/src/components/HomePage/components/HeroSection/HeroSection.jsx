import styles from './HeroSection.module.css';

import background from '../../source/video//background.mp4'

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.videoContainer} ${styles.heroVideoContainer}`}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src={background} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className={styles.videoOverlay}></div>
        <h1 className={styles.heroTitle}>Лучший отдых на Азовском море у нас</h1>
      </div>
    </section>
  );
}

export default HeroSection;