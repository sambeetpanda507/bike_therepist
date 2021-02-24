import NavBar from "./NavBar";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
