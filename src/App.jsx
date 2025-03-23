import CardList from "./components/cards/CardList";
import Faqs from "./components/faq/Faqs";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SongsList from "./components/songs/SongsList";

function App() {
  return (
    <section className="bg-dark h-full min-h-screen pb-40">
      <Navbar />
      <Hero />
      <CardList heading={"Top Songs"} type={"top"} />
      <CardList heading={"New Albums"} type={"new"} />
      <SongsList />
      <Faqs />
    </section>
  );
}

export default App;
