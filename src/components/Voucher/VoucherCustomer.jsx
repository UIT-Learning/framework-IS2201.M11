import React from "react";
import "../../css/manage-account.css";

const VoucherCustomer = () => {
    return (
        <>
            <div className="manage-account">
                <div className="title">Voucher List</div>
                <div className="line"></div>
                <div className="table-account">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Rate</th>
                                <th>Desc</th>
                                <th>Product Name</th>
                                <th>Create at</th>
                                <th>Update at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>10%</td>
                                <td>10000đ</td>
                                <td>Bún bò</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10%</td>
                                <td>10000đ</td>
                                <td>Bún bò</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default VoucherCustomer;
