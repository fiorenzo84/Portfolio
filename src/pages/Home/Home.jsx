import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills/Skills';
import Header from '../../layouts/Header/Header';
import './home.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About id="about" />
      <Skills id="skills" />
    </div>
  )
}