import "./scrolltotop.scss";
import {useState, useEffect} from "react";
import {FaArrowCircleUp} from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!isVisible && window.pageYOffset > 400) {
        setIsVisible(true);
      } else if (isVisible && window.pageYOffset <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowCircleUp />
    </div>
  );
}
