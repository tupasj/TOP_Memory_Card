import React, { useState } from "react";
import cardSets from "../assets/cardSets.json";

const Cards = () => {
  return (
    <div className="card-container">
      <img src={cardSets.set1[0].src} alt={cardSets.set1[0].alt}></img>
    </div>
  );
};

export default Cards;
