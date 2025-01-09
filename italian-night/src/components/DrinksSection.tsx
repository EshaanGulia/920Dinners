import React from "react";
import FoodCard from "./FoodCard";
import { drinks } from "../constants/constants";
import Grid from '@mui/material/Grid2';

const DrinksSection = () => {
    return (
        <>
            <h1 style={{ color: "white", marginTop: "40px", textAlign: "center" }}>Drinks</h1>
            <Grid container spacing={2}>
                {drinks.map((drinkItem, index) => (
                    <Grid size={3}>
                        <FoodCard
                            key={`drinkItem${drinkItem.title}at${index}`}
                            title={drinkItem.title}
                            descrption={drinkItem.description}
                            imageUrl={drinkItem.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default DrinksSection;
