import { createContext, useState } from "react";

// default value
export const CardContext = createContext({
    selectedCard: "",
    setSelectedCard: ()=> {},
    cardPrice: 0,
    setCardPrice: ()=> {},
    toggleSelection: "Monthly",
    setToggleSelection: ()=> {},
})

//
export const CardProvider = ({children}) => {
    const [selectedCard, setSelectedCard] = useState("");
    const [cardPrice, setCardPrice] = useState(0);
    const [toggleSelection, setToggleSelection] = useState("Monthly");

    const value = {selectedCard, setSelectedCard, cardPrice, setCardPrice, toggleSelection, setToggleSelection};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}