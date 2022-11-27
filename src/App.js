import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/navigationHeader/Navigation";
import "react-image-lightbox/style.css";
import MainFooter from "./Components/Footer/MainFooter";

function App() {
  return (
    <>
      {/* ======== Navbar starts ========= */}
      <Navigation />
      {/* ========= Navbar ends ========= */}

      {/* ========= Page Routing =========== */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* =========== Page Routing ends =========== */}

      <MainFooter />
    </>
  );
}

export default App;
