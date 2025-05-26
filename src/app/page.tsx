// App.tsx o PagePrincipal.tsx (dependiendo de tu estructura)

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import Projects from "./components/Project";
import Services from "./components/Service";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <NavBar />
      <main>
        <Home />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
