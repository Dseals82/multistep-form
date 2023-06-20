import React from 'react';
import { useState, useContext } from 'react';
import { CardContext } from '../../context/CardContex';
import Arcade from "../../images/icon-arcade.svg";
import Advanced from "../../images/icon-advanced.svg";
import Pro from "../../images/icon-pro.svg";

const Card = ({cardHeading, cardPrice, cardImage, cardImgAlt}) => {
    const {setSelectedCard, setCardPrice} = useContext(CardContext);
    const cardData = [
        { 
            id:1,
            isActive:false,
            cardHeading: "Arcade", 
            cardPrice: 9, 
            cardImage: Arcade, 
            cardImgAlt:"Arcade"
        },
        { 
            id:2,
            isActive:false,
            cardHeading: "Advanced", 
            cardPrice: 12, 
            cardImage: Advanced, 
            cardImgAlt: "Advanced"
        },
        { 
            id:3,
            isActive:false,
            cardHeading: "Pro", 
            cardPrice: 15, 
            cardImage: Pro, 
            cardImgAlt:"Pro"
        },
    ]
    const [cardInfo, setCardInfo] = useState({
      cardType: '',
      cardPrice: ''  
    });
    const [newData, setNewData] = useState(cardData)
    
    const handleClick = (id) => {
        console.log("id",id)
        const newCardData = [...cardData]
        newCardData.filter((card)=> {
            if(card.id === id){
                card.isActive = true
                console.log("is true")
            } else if(card.id !== id)  {
                card.isActive = false
                console.log("is false")
            }
        })
        setNewData([...newCardData])
        const selectedCard = newCardData.filter((card) => card.id === id)[0]
        // setCardInfo({...cardInfo, cardType: cardData.cardHeading, cardPrice: cardData.cardPrice})
        // setCardInfo({...selectedCard[0]})
        const {cardHeading, cardPrice} = selectedCard;
        console.log(newCardData )
        console.log(cardHeading, cardPrice)
        setSelectedCard(cardHeading);
        setCardPrice(cardPrice);
    }
  return (
    <>
        {newData.map((card) => {
            const { cardHeading, cardPrice, cardImage, cardImgAlt, isActive, id } = card;
            return (
                <div key={id} className={isActive ? "card card-active" : "card"} onClick={()=> handleClick(id)}>
                    <div><img src={cardImage} alt={cardImgAlt}/></div>
                    <div>
                        <h4 className="card-heading">{cardHeading}</h4>
                        <p className="card-p">${cardPrice}/mo</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Card