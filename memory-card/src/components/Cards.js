import React, { useState, useEffect } from "react";
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
    const alreadyClicked = checkClicked(clickedCard);
    console.log(alreadyClicked);
    setClickedCards(clickedCards.concat(clickedCard));
    addPoint();
  };

  let currentSet;
  if (level === 1) {
    currentSet = cardSets.set1;
  } else if (level === 2) {
    currentSet = cardSets.set2;
  } else if (level === 3) {
    currentSet = cardSets.set3;
  }

  useEffect(() => {
    console.log();
    console.log(clickedCards);
  }, [clickedCards]);

  const cards = currentSet.map((card) => {
    return (
      <div key={card.id} id={card.id} className="card" onClick={handleClick}>
        <img src={card.src} alt={card.alt}></img>
      </div>
    );
  });

  return <div className="card-container">{cards}</div>;
};

export default Cards;
