import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll for better UX on route change
    window.scrollTo(0, 0);

    // Alternative: Smooth scroll (might feel slower)
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth"
    // });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
