import React from "react";
import styles from "./Hero.module.css";
import image from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.heading}>
            100 Thousand Songs, ad-free <br />
            Over thousands podcast episodes
          </h1>
        </div>
        <div>
          <img src={image} width={212} alt="headphones" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
