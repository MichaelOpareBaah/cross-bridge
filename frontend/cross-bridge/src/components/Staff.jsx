import React from "react";
import { teamData } from "../data/Data";

export default function Staff() {
  const displayExecutives = teamData.map((item) => {
    return (
      <div className="executive-wrapper" key={item.id}>
        <img src={item.image} className="executive-img" alt="" />

        <h2>{item.name}</h2>
        <h4>{item.position}</h4>
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <h2 className="caption">Staff Members</h2>
        <div className="all-wrappers">{displayExecutives}</div>
      </div>
    </div>
  );
}
