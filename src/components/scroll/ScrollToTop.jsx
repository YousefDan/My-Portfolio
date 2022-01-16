import "./scroll-to-top.css";

const ScrollToTop = () => {
    // Go To Top
    const goToTop = () => {
        window.scroll(0,0)
    }
  return (
    <div onClick={goToTop} className="scroll">
      <img src="/images/scroll-top.svg" alt="" />
    </div>
  );
};

export default ScrollToTop;
