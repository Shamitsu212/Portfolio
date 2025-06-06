import { useState } from "react";
import styles from "./Header.module.css";
import telegram from './pic/tg.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <button 
        className={styles.menuToggle} 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Меню"
      >
        {isMenuOpen ? (
          <span className={styles.closeIcon}>×</span>
        ) : (
          <span className={styles.burgerIcon}>☰</span>
        )}
      </button>

      <div className={`${styles.header__content} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <address className={styles.header__addres}>
          <span className={styles.addres__text}>
            Адрес:<span className={styles.colorText}> Улица Пушкина XX</span>
          </span>
          <span className={styles.addres__text}>
            <img src={telegram} alt="Telegram" className={styles.text__image} />
            <span className={styles.colorText}> @XXXXXXX</span>
          </span>
          <span className={styles.addres__text}>
            Телефон:<span className={styles.colorText}> +7 (949) XXX-XX-XX</span>
          </span>
        </address>
        <nav className={styles.header__nav}>
          <a href="#about" className={styles.nav__a} onClick={() => setIsMenuOpen(false)}>
            О нас
          </a>
          <a href="#rooms" className={styles.nav__a} onClick={() => setIsMenuOpen(false)}>
            Номера
          </a>
          <a href="#contacts" className={styles.nav__a} onClick={() => setIsMenuOpen(false)}>
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;