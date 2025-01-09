import React from "react";
import FoodCard from "./FoodCard";
import { menu } from "../constants/constants";
import Grid from '@mui/material/Grid2';

const MenuSection = () => {
    return (
        <>
            <h1 style={{ color: "white", textAlign: "center" }}>Menu</h1>
            <Grid container spacing={2}>
                {menu.map((menuItem, index) => (
                        <Grid size={3}>
                            <FoodCard
                                key={`menuItem${menuItem.title}at${index}`}
                                title={menuItem.title}
                                descrption={menuItem.description}
                                imageUrl={menuItem.imageUrl}
                            />
                        </Grid>
                ))}
            </Grid>
            {/* <div style={{
                display: "flex",
                flexWrap: "wrap", // Allows wrapping to the next row
                justifyContent: "space-evenly",
                gap: "20px", // Adds space between cards
                maxWidth: "800px", // Adjust the width of the container to fit three cards
                margin: "auto"
            }}>
                {menu.map((menuItem, index) => (
                    <FoodCard
                        key={`menuItem${menuItem.title}at${index}`}
                        title={menuItem.title}
                        descrption={menuItem.description}
                        imageUrl={menuItem.imageUrl}
                    />
                ))}
            </div> */}
        </>
    );
};

export default MenuSection;
