import Header from "../components/Header";
import Footer from "../components/Footer";
import { useUser } from "@auth0/nextjs-auth0";

const Layout = ({ children }) => {
  const { user, isLoading } = useUser();

  if (!isLoading) {
    const userId = user?.internalId;

    return (
      <div id="main-wrapper">
        <Header userId={userId} />
        <div className="page-wrapper">
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Layout;
