import styles from "./Card.module.css";

export default function Card({ imageUrl, chipText, albumName }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt="card" className={styles.image} />
        </div>
        <button className={styles.chip}>{chipText}</button>
      </div>
      <p className={styles.para}>{albumName}</p>
    </div>
  );
}
