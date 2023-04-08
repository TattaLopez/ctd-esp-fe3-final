import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { links } from "./Components/utils/links";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const { home, contact, favs, dentist } = links;
  const { theme } = useContextGlobal();

  return (
    <div className={`${theme.color}`}>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path={home.path} element={<Home />} />
          <Route path={`${dentist.path}/:id`} element={<Detail />} />
          <Route path={favs.path} element={<Favs />} />
          <Route path={contact.path} element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
