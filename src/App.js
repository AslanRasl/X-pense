import Header from './components/head/header';
import Hero from './components/hero/hero';
import Hero2 from './components/hero2/hero2';
import Hero3 from './components/hero3/hero3';
import Hero4 from './components/hero4/hero4';
import Plan from './components/plan/plan';
import Downloaded from './components/downloaded/downloaded';
import Footer from './components/footer/footer';
import Carousels from './components/Carousel';

function App() {
  return (
    <div>
    <Header />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Plan />
      <Carousels/>
      <Downloaded />
      <Footer/>
    </div>
  );
}

export default App;
