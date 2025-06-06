import styles from "./Footer.module.css";

import yandex from "./pic/yandex.svg"
import vk from "./pic/vk.svg"

function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="#"><img src={yandex} alt="Яндекс" /></a>
          <a href="#"><img src={vk} alt="ВКонтакте" /></a>
        </div>
        <div className={styles.footerContacts}>
          <address>Адрес: <span className={styles.colorText}>Улица Пушкина XX</span></address>
          <address>Телефон: <span className={styles.colorText}>+7 (949) XXX-XX-XX</span></address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;