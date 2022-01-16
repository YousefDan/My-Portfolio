import "./contact.css";
import ContactForm from "./ContactForm";
import ThemeContext from "../../context/index";
import { useContext } from "react";
import ScrollToTop from "../scroll/ScrollToTop";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-right">
          <p
            style={{ color: darkMode && "rgb(199, 203, 206)" }}
            className="contact-desc"
          >
            <b>پروژه شما چیست؟ </b> <br /> برای مشاوره و کمک به توسعه پروژه شما
            همیشه در دسترس هستم . میتوانید از طریق فرم زیر به من پیام بدهید و یا
            از طریق واتس اپ یا تماس تلفنی در خدمتتون هستم.
          </p>
          <ContactForm darkMode={darkMode} />
        </div>
        <div className="contact-left">
          <h2
            style={{
              color: darkMode && "rgb(199, 203, 206)",
              borderBottomColor: darkMode && "#FFF",
            }}
            className="contact-title"
          >
            Let's discuss your project
          </h2>
          <div style={{ color: darkMode && "#FFF" }} className="contact-info">
            <div className="contact-info-item">
              <img
                src="/images/phone.png"
                alt="phone icon"
                className="contact-icon"
              />
              +98 935 823 3591
            </div>
            <div className="contact-info-item">
              <img
                src="/images/email.png"
                alt="phone icon"
                className="contact-icon"
              />
              yd178507@gmail.com
            </div>
            <div className="contact-info-item">
              <img
                style={{ background: "green" }}
                src="/images/whatsapp-square-brands.svg"
                alt="phone icon"
                className="contact-icon"
              />
              +98 935 823 3591
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </section>
  );
};

export default Contact;
