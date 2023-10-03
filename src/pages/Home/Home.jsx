import "./home.scss";
import {useLocation} from "react-router-dom";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Header from "../../layouts/Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../../layouts/Footer/Footer";
import NotFound from "../NotFound/NotFound";

export default function Home() {
  const location = useLocation();
  const isValidRoute =
    location.pathname === "/" &&
    ["#", "#about", "#skills", "#projects", "#contact", ""].includes(
      location.hash
    );
  return (
    <div>
      <Header />
      {isValidRoute ? (
        <>
          <Banner />
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Form id="contact" />
          <Footer />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
