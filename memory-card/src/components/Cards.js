import React, { useState, useEffect } from "react";
import cardSets from "../assets/cardSets.json";
import shuffleArray from "../utility/shuffleArray";

const Cards = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  const { points, setPoints, addPoint, level, nextLevel } = props;

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
    if (alreadyClicked) {
      resetLevel();
    } else if (!alreadyClicked) {
      addPoint();
    }
  };

  const resetLevel = () => {
    setClickedCards([]);
    setPoints(0);
  };

  const chooseCardSet = (level) => {
    let cardSetData;
    if (level === 1) {
      cardSetData = cardSets.set1;
    } else if (level === 2) {
      cardSetData = cardSets.set2;
    } else if (level === 3) {
      cardSetData = cardSets.set3;
    }
    return cardSetData;
  };

  //Get cards data from JSON file
  const cardSetData = chooseCardSet(level);
  shuffleArray(cardSetData);

  //Use JSON data to generate the card divs
  const cards = cardSetData.map((card) => {
    return (
      <div key={card.id} id={card.id} className="card" onClick={handleClick}>
        <img src={card.src} alt={card.alt}></img>
      </div>
    );
  })

  // On every points update, conditional nextLevel().
  const limit = cardSetData.length;
  useEffect(() => {
    if (points >= limit) {
      nextLevel();
      resetLevel();
    }
  }, [points]);

  return <div className="card-container">{cards}</div>;
};

export default Cards;
