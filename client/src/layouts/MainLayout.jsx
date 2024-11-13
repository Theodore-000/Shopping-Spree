import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/index.components.jsx";



const MainLayout = () => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
