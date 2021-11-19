import React from "react";
import "../../css/manage-order.css";
import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";

const ManageOrder = () => {
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
            <div className="manage-order">
                <div className="title">Manage Orders</div>
                <div className="line"></div>
                <div className="manage-list-order">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Customer</th>
                                <th>Create at</th>
                                <th>Update at</th>
                                <th>Address</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={HandleShowDetail}>
                                <td>1</td>
                                <td>A</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                                <td>Viet Nam</td>
                                <td>500000</td>
                                <td>Pending</td>
                                <td>
                                    <i
                                        className="fas fa-times-circle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("hi");
                                        }}
                                    ></i>
                                </td>
                            </tr>
                            <tr onClick={HandleShowDetail}>
                                <td>1</td>
                                <td>A</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                                <td>Viet Nam</td>
                                <td>500000</td>
                                <td>Pending</td>
                                <td>
                                    <i
                                        className="fas fa-times-circle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("hi");
                                        }}
                                    ></i>
                                </td>
                            </tr>
                            <tr onClick={HandleShowDetail}>
                                <td>1</td>
                                <td>A</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                                <td>Viet Nam</td>
                                <td>500000</td>
                                <td>Pending</td>
                                <td>
                                    <i
                                        className="fas fa-times-circle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("hi");
                                        }}
                                    ></i>
                                </td>
                            </tr>
                            <tr onClick={HandleShowDetail}>
                                <td>1</td>
                                <td>A</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                                <td>Viet Nam</td>
                                <td>500000</td>
                                <td>Pending</td>
                                <td>
                                    <i
                                        className="fas fa-times-circle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("hi");
                                        }}
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={Disable} onClick={HandleCancelShowDetail}></div>

            {Detail ? (
                <OrderDetails HandleCancelShowDetail={HandleCancelShowDetail} />
            ) : undefined}
        </>
    );
};

export default ManageOrder;
