import { useRef } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ className, children, showNavigation }) {
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (slideRef.current) {
      const cardWidth =
        slideRef.current.querySelector(".card-snap-start")?.clientWidth ?? 0;

      const currentScroll = slideRef.current.scrollLeft;

      slideRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      const cardWidth =
        slideRef.current.querySelector(".card-snap-start")?.clientWidth ?? 0;
      const currentScroll = slideRef.current.scrollLeft;
      slideRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {showNavigation && (
        <>
          <button onClick={prevSlide} className={styles.prevButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button onClick={nextSlide} className={styles.nextButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      <div className={className} ref={slideRef}>
        {children}
      </div>
    </div>
  );
}
