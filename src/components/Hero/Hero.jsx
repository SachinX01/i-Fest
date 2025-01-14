import React, { useState, useEffect } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import text_gif from "./hero.gif";
import text_img from "./hero.png";

// Preload gallery images
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';

const preloadGalleryImages = () => {
  [img1, img2, img3, img4, img5, img6, img7].forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(text_gif);

  useEffect(() => {
    // Start preloading gallery images immediately
    preloadGalleryImages();

    const timer = setTimeout(() => {
      setCurrentImage(text_img);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // const [countDays, setDays] = useState(false);
  // const [countHours, setHours] = useState(false);
  // const [countMinutes, setMinutes] = useState(false);
  // const [countSeconds, setSeconds] = useState(false);

  // let interval = useRef();

  // const startTimer = () => {
  //   const countdownDate = new Date("February 13 2023 18:00:00").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance / 1000 / 60) % 60);
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       //
  //       clearInterval(interval);
  //     } else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          {/* <h1 className={classes.heading}>Sambhav</h1> */}
          <img src={currentImage} className={classes.text_img} alt="hero_image" />

          <h4 className={classes.caption}>Let&apos;s make a tech move!</h4>
          <p className={classes.date}>January 17th, 2025</p>
          <Link
            className={classes.anchorBtn}
            // target="_blank"
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>

        {/* <div className={classes.countdownbox}>
          <div className={classes.countdown}>
            <p>{countDays}</p>
            <p>
              <small>days</small>
            </p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countHours}</p>
            <p>hours</p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countMinutes}</p>
            <p>min</p>
          </div>

          <span className={classes.column}>:</span>
          <div className={classes.countdown}>
            <p>{countSeconds}</p>
            <p>sec</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
