import NavBar from "./NavBar";
import Footer from "./Footer";
import { BookingProvider } from "./BookingContext";
const Layout = (props) => {
  return (
    <>
      <BookingProvider>
        <NavBar />
        {props.children}
        <Footer />
      </BookingProvider>
    </>
  );
};

export default Layout;
