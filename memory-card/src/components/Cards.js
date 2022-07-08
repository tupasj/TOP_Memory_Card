import React, { useState } from "react";
import cardSets from "../assets/cardSets.json";
import shuffleArray from "../utility/shuffleArray";

const Cards = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  const level = props.level;
  const addPoint = props.addPoint;

  const getClickedCard = (e) => {
    const clickedCard = e.currentTarget;
    return clickedCard;
  };

  const checkClicked = (e) => {
    return clickedCards.includes(e);
  };

  const handleClick = (e) => {
    const clickedCard = getClickedCard(e);
    setClickedCards(clickedCards.concat(clickedCard));
    const alreadyClicked = checkClicked(clickedCard);
    // console.log(alreadyClicked);
    addPoint();
  };

  //Get cards data from JSON file
  let currentSetData;
  if (level === 1) {
    currentSetData = cardSets.set1;
  } else if (level === 2) {
    currentSetData = cardSets.set2;
  } else if (level === 3) {
    currentSetData = cardSets.set3;
  }
  shuffleArray(currentSetData);

  //Use JSON data to generate the card divs
  const cards = currentSetData.map((card) => {
    return (
      <div key={card.id} id={card.id} className="card" onClick={handleClick}>
        <img src={card.src} alt={card.alt}></img>
      </div>
    );
  })

  return <div className="card-container">{cards}</div>;
};

export default Cards;