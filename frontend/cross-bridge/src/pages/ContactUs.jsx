import React from "react";
import hero from "../assets/sectionImg.png";

export default function ContactUs() {
  const styles = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: "40px",
  };
  return (
    <div>
      <div>
        <img src={hero} alt="" style={styles} />
      </div>
      Contact Us
    </div>
  );
}
