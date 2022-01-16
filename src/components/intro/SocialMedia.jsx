import "./social.css";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div
        style={{ backgroundColor: "#0984e3" }}
        className="social-media-wrapper"
      >
        <img
          src="/images/facebook-square-brands.svg"
          className="social-icon"
          alt=""
        />
      </div>
      <div style={{ backgroundColor: "#555" }} className="social-media-wrapper">
        <img
          src="/images/github-square-brands.svg"
          className="social-icon"
          alt=""
        />
      </div>
      <div
        style={{ backgroundColor: "#3742fa" }}
        className="social-media-wrapper"
      >
        <img src="/images/linkedin-brands.svg" className="social-icon" alt="" />
      </div>
      <div
        style={{ backgroundColor: "#27ae60" }}
        className="social-media-wrapper"
      >
        <img
          src="/images/whatsapp-square-brands.svg"
          className="social-icon"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialMedia;
