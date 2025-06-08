import styles from './MapSection.module.css';

function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/org/gostinitsa_chayka/1723864294/?ll=37.539760%2C47.083273&z=16.2"
          width="100%"
          height="400"
          frameBorder="1"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;

