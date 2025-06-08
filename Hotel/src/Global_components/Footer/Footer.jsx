import styles from "./Footer.module.css";

import yandex from "./pic/yandex.svg"
import vk from "./pic/vk.svg"

function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="https://yandex.ru/maps/org/gostinitsa_chayka/1723864294/?ll=37.539760%2C47.083273&z=16.2"><img src={yandex} alt="Яндекс" /></a>
          <a href="#"><img src={vk} alt="ВКонтакте" /></a>
        </div>
        <div className={styles.footerContacts}>
          <address>Адрес: <span className={styles.colorText}>Приморский бульвар, 7</span></address>
          <address>Телефон: <span className={styles.colorText}>+7 (949) XXX-XX-XX</span></address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;