import { useEffect, useState } from "react";
import Card from "./Card";
import Carousel from "../carousel/Carousel";
import styles from "./CardList.module.css";

export default function CardList({ heading, type }) {
  const [topSongs, setTopSongs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://qtify-backend-labs.crio.do/albums/${type}`
    );
    const data = await response.json();
    setTopSongs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>{heading}</p>
        <button className={styles.button} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      <Carousel
        className={`${styles.carousel} ${showAll ? styles.active : ""} scrollbar-hide`}
        showNavigation={!showAll}
      >
        {topSongs.map((song, index) => (
          <Card
            key={`card-${index}`}
            imageUrl={song.image}
            chipText={`${song.follows} Followers`}
            albumName={song.title}
          />
        ))}
      </Carousel>
    </div>
  );
}
