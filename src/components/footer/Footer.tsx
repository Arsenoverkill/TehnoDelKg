import styles from "./Footer.module.scss";
import Logo from "../../assets/icons/image 15.svg";
import Whatsapp from "../../assets/icons/Social Icons (1).svg";
import Telegram from "../../assets/icons/Social Icons.svg";
import Facebook from "../../assets/icons/Social Icons (2).svg";
import Instagram from "../../assets/icons/Social Icons (3).svg";

interface IProduct {
  id: number;
  name: string;
  image: string;
  descriptions: string | null;
}

function Footer({ services }: { services: IProduct[] }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <div className={styles.content_row}>
            <div className={styles.content}>
              <h3>Услуги</h3>
              <ul>
                {services.length > 0 ? (
                  services.map((service) => (
                    <li key={service.id}>{service.name}</li>
                  ))
                ) : (
                  <li>Нет доступных услуг</li>
                )}
              </ul>
            </div>
            <div className={styles.contacts}>
              <h3>Контакты</h3>
              <div className={styles.about}>
                <div>
                  <h4>Адрес</h4>
                  <p>6 мкр-н 39</p>
                </div>
                <div>
                  <h4>Время работы</h4>
                  <p>9:00 - 20:00</p>
                </div>
                <div className={styles.phone_call}>
                  <h4>Позвонить</h4>
                  <p>0(501) 488 113</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className="container">
        <div className={styles.bottom}>
          <p>Технодел © 2025</p>
          <div className={styles.social_icons}>
            <a
              href="https://wa.me/996501488113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className={styles.social_icon}
              />
            </a>
            <a
              href="https://www.instagram.com/tehnodel.kg?igsh=eTV4cjE4Y2U5dWVq&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className={styles.social_icon}
              />
            </a>
            <a
              href="https://www.facebook.com/share/1GCXuDev5s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="FaceBook"
                className={styles.social_icon}
              />
            </a>
            <a
              href="https://t.me/+0501488113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Telegram}
                alt="Telegram"
                className={styles.social_icon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
