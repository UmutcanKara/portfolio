import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: React.FC = ({children}) => {
  return <main>
      <Header />
      {children}
      <Footer />
  </main>;
};

export default Layout;
