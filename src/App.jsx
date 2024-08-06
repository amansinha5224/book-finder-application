import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Explore from "./pages/Explore";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <Nav />
      <main className="flex flex-col min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="container mx-auto max-w-5xl px-6">
                  <Explore />
                </div>
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="explore" element={<Explore />} />
          <Route path="help" element={<Help />} />
          <Route path="policy" element={<Policy />} />
          <Route path="search/:key" element={<Search />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
