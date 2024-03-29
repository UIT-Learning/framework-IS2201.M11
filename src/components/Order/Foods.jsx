import React from "react";

const Foods = ({
    listMenuFood,
    search,
    HandleShowFoodDetails,
    setFoodCur,
    Category,
}) => {
    return (
        <>
            {listMenuFood.map((food) => {
                if (food.categoryFood === Category || Category === "Category") {
                    if (
                        food.nameFood
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    ) {
                        return (
                            <div
                                className="ordering-menu-food"
                                onClick={() => {
                                    HandleShowFoodDetails();
                                    setFoodCur(food);
                                }}
                            >
                                <div className="image-food-d">
                                    <img
                                        className="image-food"
                                        src={food.pathImage}
                                        alt={food.nameFood}
                                    />
                                </div>
                                <div className="data-food">
                                    <div className="description">
                                        <div className="name-food">
                                            {food.nameFood}
                                        </div>
                                        <div className="descrip">
                                            Số lượng: {food.description}
                                        </div>
                                    </div>
                                    <div className="price-food">
                                        {food.priceFood}đ
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            })}
        </>
    );
};

export default Foods;
