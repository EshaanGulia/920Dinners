import { menu, drinks } from "../constants/constants";
import FoodCard from "./FoodCard";

const MenuComponent = () => {
    return (
        <>
            {/* Food Section */}
            <h1 style={{ color: "white" }}>Menu</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap", // Allows wrapping to the next row
                justifyContent: "space-between",
                gap: "20px", // Adds space between cards
                maxWidth: "800px", // Adjust the width of the container to fit three cards
                margin: "auto"
            }}>
                {menu.map((menuItem, index) => {
                    return (
                        <FoodCard 
                            key={`menuItem${menuItem.title}at${index}`} 
                            title={menuItem.title} 
                            descrption={menuItem.description} 
                            imageUrl={menuItem.imageUrl} 
                        />
                    );
                })}
            </div>

            {/* Drinks Section */}
            <h1 style={{ color: "white", marginTop: "40px" }}>Drinks</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap", // Allows wrapping to the next row
                justifyContent: "space-between",
                gap: "20px", // Adds space between cards
                maxWidth: "800px", // Adjust the width of the container to fit three cards
                margin: "auto"
            }}>
                {drinks.map((drinkItem, index) => {
                    return (
                        <FoodCard 
                            key={`drinkItem${drinkItem.title}at${index}`} 
                            title={drinkItem.title} 
                            descrption={drinkItem.description} 
                            imageUrl={drinkItem.imageUrl} 
                        />
                    );
                })}
            </div>
        </>
    );
}

export default MenuComponent;
