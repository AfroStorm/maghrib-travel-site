import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to scroll to the top on route change
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
