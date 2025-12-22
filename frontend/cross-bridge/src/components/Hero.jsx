import { useEffect, useState } from "react";
import hero from "../assets/sectionImg.png";
import heroGraduate from "../assets/graduate.jpg";
import heroReunion from "../assets/Reunion.png";
import AOS from "aos";
import "aos/dist/aos.css";
const images = [hero, heroGraduate, heroReunion];
export default function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-aos="fade-up-left"
      className="hero"
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
  );
}
