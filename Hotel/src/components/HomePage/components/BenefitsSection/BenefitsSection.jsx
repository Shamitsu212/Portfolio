import styles from './BenefitsSection.module.css';

import background from '../../source/video/background2.mp4'

import car from "../../source/pic/car.svg"
import wind from "../../source/pic/wind.svg"
import waves from "../../source/pic/waves.svg"
import armchair from "../../source/pic/armchair.svg"

function BenefitsSection() {
  return (
    <section id="benefits" className={styles.benefitsSection}>
      <video className={styles.benefitsVideo} autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className={styles.videoOverlay}></div>
      <div className={styles.benefitsContent}>
        <h2 className={styles.sectionTitle}>Преимущества гостиницы</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <img src={armchair} alt="Иконка" className={styles.benefitIcon} />
            <span>Комфортабельные номера</span>
          </div>
          <div className={styles.benefitItem}>
            <img src={waves} alt="Иконка" className={styles.benefitIcon} />
            <span>В близости к морю</span>
          </div>
          <div className={styles.benefitItem}>
            <img src={car} alt="Иконка" className={styles.benefitIcon} />
            <span>Бесплатная парковка</span>
          </div>
          <div className={styles.benefitItem}>
            <img src={wind} alt="Иконка" className={styles.benefitIcon} />
            <span>Отдых на свежем воздухе</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;