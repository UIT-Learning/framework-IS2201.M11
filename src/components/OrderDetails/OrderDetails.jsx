import React from "react";

const OrderDetails = ({ HandleCancelShowDetail }) => {
    return (
        <>
            <div className="order-detail">
                <i
                    className="fas fa-times-circle"
                    onClick={HandleCancelShowDetail}
                ></i>
                <div className="history-title">Order Details</div>
                <div className="order-detail-info">
                    <div className="order-detail-info1">
                        <div>Name: A</div>
                        <div>Phone number: 0123</div>
                        <div>Address: Viet nam</div>
                    </div>
                    <div className="order-detail-info2">
                        <div>Type of payment: Cash</div>
                        <div>Status: Paid</div>
                    </div>
                </div>
                <div className="order-detail-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Order note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hu tieu</td>
                                <td>2</td>
                                <td>15000</td>
                                <td>it nuoc</td>
                            </tr>
                            <tr>
                                <td>Hu tieu</td>
                                <td>2</td>
                                <td>15000</td>
                                <td>it nuoc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="line1"></div>
                <div className="order-detail-total">
                    <div>Total:</div>
                    <div>1000000đ</div>
                    <button>Accept</button>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;
