import { useContext } from "react";
import "./intro.css";
import SocialMedia from "./SocialMedia";
import ThemeContext from "../../context/index";

const Intro = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="intro">
      <div className="intro-right">
        <div className="intro-right-wrapper">
          <div className="small-device-img-wrapper">
            <img src="/images/me.jpg" alt="" className="small-device-img" />
          </div>
          <h2 style={{ color: darkMode && "white" }} className="intro-hi">
            سلام, من{" "}
          </h2>
          <h1 style={{ color: darkMode && "white" }} className="intro-name">
            یوسف دانه گردی
          </h1>
          <p
            style={{ color: darkMode && "white" }}
            className="intro-description"
          >
            برنامه نویس و توسعه دهنده وب هستم.
          </p>
          <div className="intro-titles-wrapper">
            <div className="intro-title">
              <div className="intro-title-item">Web Designer</div>
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Fullstack Developer</div>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
      <div className="intro-left">
        <div className="intro-bg"></div>
        <div className="intro-img-bg"></div>
        <img
          src="/images/me.jpg"
          alt="youssef danehgerdi"
          className="intro-img"
        />
      </div>
    </section>
  );
};

export default Intro;
