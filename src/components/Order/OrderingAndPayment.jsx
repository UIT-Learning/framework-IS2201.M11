import React from "react";
import "../../css/order.css";
import CartItems from "./CartItems";
import Foods from "./Foods";
import { useState } from "react";
import FoodDetails from "./FoodDetails";
import listMenuFood from "../../data/listMenuFood";
import listCategory from "../../data/listCategory";

const OrderingAndPayment = () => {
    const [listOrderFood, setlistOrderFood] = useState([]);
    const [Search, setSearch] = useState("");
    const [Disable, setDisable] = useState("hide");
    const [Disable1, setDisable1] = useState("hide");
    const [FoodCur, setFoodCur] = useState({});
    const [PaymentFull, setPaymentFull] = useState(false);
    const [PaymentMethod, setPaymentMethod] = useState(true);
    const [ShowFoodDetails, setShowFoodDetails] = useState(false);
    const [Total, setTotal] = useState(0);
    const [Category, setCategory] = useState("Category");

    function CalcTotal() {
        let tempTotal = 0;
        listOrderFood.map((orderFood) => {
            tempTotal +=
                Number(orderFood.priceFood) * Number(orderFood.quantity);
        });
        setTotal(tempTotal);
    }

    function HandleOnInput(e) {
        setSearch(e.target.value);
    }

    function HandleShowFoodDetails() {
        setDisable1("hide hide1");
        setShowFoodDetails(true);
    }

    function HandleCancelShowFoodDetails() {
        setDisable1("hide");
        setShowFoodDetails(false);
    }

    function HandleContinuePayment() {
        setPaymentFull(true);
        setDisable("hide hide1");
    }

    function HandleCancelPayment() {
        setPaymentFull(false);
        setDisable("hide");
    }

    return (
        <>
            <div className="ordering-menu">
                <div className="ordering-menu-header">
                    <div className="title">Hi, UserName</div>
                    <div className="title2">Monday 27 Sep, 2021</div>
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search for food, coffe, etc..."
                        value={Search}
                        onChange={HandleOnInput}
                    />
                </div>
                <div className="line"></div>
                <div className="ordering-menu-item">
                    <div className="title">Choose dishes</div>
                    <select
                        name="Category"
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        <option defaultValue="Category">Category</option>
                        {listCategory.map((pram) => {
                            return <option value={pram}>{pram}</option>;
                        })}
                    </select>
                    <div className="ordering-menu-list-food">
                        <Foods
                            listMenuFood={listMenuFood}
                            search={Search}
                            HandleShowFoodDetails={HandleShowFoodDetails}
                            setFoodCur={setFoodCur}
                            Category={Category}
                        />
                    </div>
                </div>
            </div>
            <div className={Disable} onClick={HandleCancelPayment}></div>
            <div className="ordering-cart-behind"></div>
            {/*  */}

            {!PaymentFull ? (
                <div className="ordering-cart">
                    <div className="ordering-cart-1">
                        <div className="ordering-cart-header">
                            <div className="title">Order</div>
                            <div className="title2">Items</div>
                        </div>
                        <div className="line"></div>
                        <div className="ordering-cart-list-item">
                            <CartItems
                                listOrderFood={listOrderFood}
                                setlistOrderFood={setlistOrderFood}
                                CalcTotal={CalcTotal}
                            />
                        </div>

                        <div className="line1"></div>
                        <div className="ordering-cart-1-payment">
                            <div className="title2">Sub total</div>
                            <div className="title3">{Total}đ</div>
                            <button
                                className="ordering-cart-1-payment-button"
                                onClick={HandleContinuePayment}
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="ordering-cart ordering-cart-full">
                    <div className="ordering-cart-1 ordering-cart-1-1">
                        <div className="ordering-cart-header">
                            <div className="title">Confirmation</div>
                            <div className="title2">Order</div>
                        </div>
                        <div className="line"></div>
                        <div className="ordering-cart-list-item ordering-cart-list-item1">
                            <CartItems
                                listOrderFood={listOrderFood}
                                setlistOrderFood={setlistOrderFood}
                                CalcTotal={CalcTotal}
                            />
                        </div>

                        <div className="line1"></div>
                        <div className="ordering-cart-1-payment ordering-cart-1-payment1">
                            <div className="title2">Sub total</div>
                            <div className="title3">{Total}đ</div>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="ordering-cart-2">
                        <div className="ordering-cart-header">
                            <div className="title">Payment</div>
                            <div className="title2">
                                2 payment method available
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="title1">Payment method</div>
                        <div className="ordering-methods">
                            <div
                                className={
                                    PaymentMethod
                                        ? "ordering-method ordering-method1"
                                        : "ordering-method"
                                }
                                onClick={() => {
                                    setPaymentMethod(true);
                                }}
                            >
                                <i className="fal fa-credit-card"></i>
                                <div>Credit card</div>
                            </div>
                            <div
                                className={
                                    !PaymentMethod
                                        ? "ordering-method ordering-method1"
                                        : "ordering-method"
                                }
                                onClick={() => {
                                    setPaymentMethod(false);
                                }}
                            >
                                <i className="far fa-wallet"></i>
                                <div>Cash</div>
                            </div>
                        </div>

                        {PaymentMethod ? (
                            <>
                                <div className="ordering-infor">
                                    Name
                                    <input type="text" />
                                </div>
                                <div className="ordering-infor">
                                    Card Number
                                    <input type="text" />
                                </div>
                                <div className="ordering-infor">
                                    Phone Number
                                    <input type="text" />
                                </div>
                                <div className="ordering-infor">
                                    Address
                                    <input type="text" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="ordering-infor">
                                    Name
                                    <input type="text" />
                                </div>
                                <div className="ordering-infor">
                                    Address
                                    <input type="text" />
                                </div>
                                <div className="ordering-infor">
                                    Phone Number
                                    <input type="text" />
                                </div>
                            </>
                        )}

                        <div className="ordering-cart-2-btn">
                            <button onClick={HandleCancelPayment}>
                                Cancel
                            </button>
                            <button>Payment</button>
                        </div>
                    </div>
                </div>
            )}
            {/*  */}

            <div
                className={Disable1}
                onClick={HandleCancelShowFoodDetails}
            ></div>
            {ShowFoodDetails ? (
                <>
                    <FoodDetails
                        HandleCancelShowFoodDetails={
                            HandleCancelShowFoodDetails
                        }
                        setlistOrderFood={setlistOrderFood}
                        FoodCur={FoodCur}
                    />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default OrderingAndPayment;
