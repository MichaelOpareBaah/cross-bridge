import React, { useEffect } from "react";
import hero from "../assets/sectionImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  const styles = {
    width: "100%",
    height: "600px",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: "40px",
  };
  return (
    <div data-aos="fade-up-left">
      <img src={hero} alt="" style={styles} />
    </div>
  );
}
