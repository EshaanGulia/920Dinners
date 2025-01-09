import React from "react";
import FoodCard from "./FoodCard";
import { drinks } from "../constants/constants";

const DrinksSection = () => {
    return (
        <>
            <h1 style={{ color: "white", marginTop: "40px", textAlign: "center" }}>Drinks</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap", // Allows wrapping to the next row
                justifyContent: "space-between",
                gap: "20px", // Adds space between cards
                maxWidth: "800px", // Adjust the width of the container to fit three cards
                margin: "auto"
            }}>
                {drinks.map((drinkItem, index) => (
                    <FoodCard
                        key={`drinkItem${drinkItem.title}at${index}`}
                        title={drinkItem.title}
                        descrption={drinkItem.description}
                        imageUrl={drinkItem.imageUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default DrinksSection;
