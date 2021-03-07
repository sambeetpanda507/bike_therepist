import NavBar from "./NavBar";
import Footer from "./Footer";
import { AuthProvider } from "./AuthContext";
const Layout = (props) => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        {props.children}
        <Footer />
      </AuthProvider>
    </>
  );
};

export default Layout;
