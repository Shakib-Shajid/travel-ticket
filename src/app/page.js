import Banner from './components/Banner';
import Card from './components/Card';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Free from './components/Free';
import Join from './components/Join';
import Offer from './components/Offer';
import Plan from './components/Plan';
import Quality from './components/Quality';
import Video from './components/Video';

export default function Home() {
  return (
    <main className=''>
      <Banner />
      {/* <Video /> */}
      <Card />
      <Offer />
      <Free />
      <Quality />
      <FAQ />
      <Join />
      <Plan />
      <Footer />
    </main>
  );
}
