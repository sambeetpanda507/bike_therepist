import NavBar from "./NavBar";
import Footer from "./Footer";
import { AuthProvider } from "./AuthContext";
import { BookingProvider } from "./BookingContext";
const Layout = (props) => {
  return (
    <>
      <AuthProvider>
        <BookingProvider>
          <NavBar />
          {props.children}
          <Footer />
        </BookingProvider>
      </AuthProvider>
    </>
  );
};

export default Layout;
