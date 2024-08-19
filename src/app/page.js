import Banner from './components/Banner';
import Card from './components/Card';
import Free from './components/Free';
import Offer from './components/Offer';
import Quality from './components/Quality';
import Video from './components/Video';

export default function Home() {
  return (
   <main>
      <Banner />
      <Video />
      <Card />
      <Offer />
      <Free />
      <Quality />
   </main>
  );
}
