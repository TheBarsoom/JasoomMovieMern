import { Outlet, useLocation } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
