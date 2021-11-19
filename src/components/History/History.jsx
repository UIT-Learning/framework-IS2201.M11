import React from "react";
import "../../css/history.css";
import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";

const History = () => {
    const [Disable, setDisable] = useState("hide");
    const [Detail, setDetail] = useState(false);

    function HandleShowDetail() {
        setDetail(true);
        setDisable("hide hide1");
    }

    function HandleCancelShowDetail() {
        setDetail(false);
        setDisable("hide");
    }

    return (
        <>
            <div className="history">
                <div className="history-report">
                    <div className="history-header">
                        <div className="title">History</div>
                        <div className="title2">Monday 27 Sep, 2021</div>
                    </div>

                    <div className="line"></div>
                    <div className="history-order-report">
                        <div className="history-title">Order History</div>
                        <div className="line"></div>
                        <div className="history-list-order">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Voucher</th>
                                        <th>Create at</th>
                                        <th>Update at</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={HandleShowDetail}>
                                        <td>1</td>
                                        <td>Bún bò</td>
                                        <td>3</td>
                                        <td>10%</td>
                                        <td>11/11/2021</td>
                                        <td>11/11/2021</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr onClick={HandleShowDetail}>
                                        <td>1</td>
                                        <td>Bún bò</td>
                                        <td>3</td>
                                        <td>10%</td>
                                        <td>11/11/2021</td>
                                        <td>11/11/2021</td>
                                        <td>Pending</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="history-totals">
                        <div className="history-total">
                            <div>
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <div className="history-num">11,521,000 đ</div>
                            <div className="history-tt">Total spending</div>
                        </div>
                        <div className="history-total">
                            <div>
                                <i className="fas fa-bookmark"></i>
                            </div>
                            <div className="history-num">3,230</div>
                            <div className="history-tt">Total ordered</div>
                        </div>
                        <div className="history-total">
                            <div>
                                <i className="fas fa-utensils-alt"></i>
                            </div>
                            <div className="history-num">15,140</div>
                            <div className="history-tt">Total dish ordered</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Disable} onClick={HandleCancelShowDetail}></div>
            {Detail === true ? (
                <OrderDetails HandleCancelShowDetail={HandleCancelShowDetail} />
            ) : (
                <></>
            )}
        </>
    );
};

export default History;
