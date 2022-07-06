import React, { useState } from "react";
import cardSets from "../assets/cardSets.json";

const Cards = (props) => {
  const level = props.level;
  let currentSet;

  if (level === 1) {
    currentSet = cardSets.set1;
  } else if (level === 2) {
    currentSet = cardSets.set2;
  } else if (level === 3) {
    currentSet = cardSets.set3;
  }
  const cards = currentSet.map( card => {
    return (
        <div key={card.id} className="card">
            <img src={card.src} alt={card.alt}></img>
        </div>
    )
  })

  return (
    <div className="card-container">
        {cards}
    </div>
  );
};

export default Cards;
