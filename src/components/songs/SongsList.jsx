import React, { useEffect, useMemo, useState } from "react";
import Card from "../cards/Card";
import axios from "axios";
import Carousel from "../carousel/Carousel";
import styles from "./SongList.module.css";

export default function SongsList() {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [songTiles, setSongTiles] = useState([]);
  const [songsList, setSongsList] = useState([]);

  // fetch all the geners
  async function getSongTitle() {
    try {
      const response = await axios("https://qtify-backend-labs.crio.do/genres");
      setSongTiles([{key: "all", label: "All"}, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  // fetch all the songs
  async function getSongsList() {
    try {
      const response = await axios("https://qtify-backend-labs.crio.do/songs");
      setSongsList(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // filter the songs based on the selected genre
  const filteredSongs = useMemo(() => {
    if (selectedGenre === "all") return songsList;
    return songsList.filter((song) => song.genre.key === selectedGenre);
  }, [selectedGenre, songsList]);

  // call the function on initial page load
  useEffect(() => {
    getSongTitle();
    getSongsList();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.para}>Songs</p>
        <div className={styles.tilesWrapper}>
          {songTiles &&
            songTiles.map((item, index) => (
              <button
                key={`button-${index.key}`}
                className={`${styles.button} ${
                  selectedGenre === item.key ? styles.active : ""
                }`}
                onClick={() => setSelectedGenre(item.key)}
              >
                {item.label}
              </button>
            ))}
        </div>
      </div>

      <Carousel className={`${styles.carousel} scrollbar-hide`} showNavigation={true}>
        {filteredSongs &&
          filteredSongs.map((song, index) => (
            <Card
              key={`card-${index}`}
              imageUrl={song.image}
              chipText={`${song.likes} Likes`}
              albumName={song.title}
            />
          ))}
      </Carousel>
    </div>
  );
}
