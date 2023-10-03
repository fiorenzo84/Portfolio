import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import './home.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About id="about" />
    </div>
  )
}