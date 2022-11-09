import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="">{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
