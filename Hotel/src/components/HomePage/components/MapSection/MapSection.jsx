import styles from './MapSection.module.css';

function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.550109%2C47.082661&mode=poi&poi%5Bpoint%5D=37.548437%2C47.082817&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D40913906889&z=16.72"
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