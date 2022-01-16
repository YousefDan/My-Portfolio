import "./contact-form.css";

const ContactForm = ({ darkMode }) => {
  return (
    <form>
      <input
        style={{ backgroundColor: darkMode && "#cfcccc" }}
        type="text"
        placeholder="نام شما"
      />
      <input
        style={{ backgroundColor: darkMode && "#cfcccc" }}
        type="email"
        placeholder="ایمیل شما"
      />
      <input
        style={{ backgroundColor: darkMode && "#cfcccc" }}
        type="text"
        placeholder="موضوع"
      />
      <textarea
        style={{ backgroundColor: darkMode && "#cfcccc" }}
        placeholder="پیام شما"
        rows="5"
      ></textarea>
      <button>ارسال</button>
    </form>
  );
};

export default ContactForm;
