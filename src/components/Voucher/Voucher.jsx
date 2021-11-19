import React from "react";
import "../../css/manage-account.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Voucher = () => {
    const [Disable, setDisable] = useState("hide");
    // thông báo thêm thành công
    const notify = () => {
        toast.success("Success!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    // thông báo thêm thất bại
    const notify1 = () => {
        toast.error("Fail!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <div className="manage-account">
                <div className="title">Voucher Management</div>
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
                                <th>Delete</th>
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
                                <td>
                                    <i className="fas fa-times"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>10%</td>
                                <td>10000đ</td>
                                <td>Bún bò</td>
                                <td>11/11/2021</td>
                                <td>11/11/2021</td>
                                <td>
                                    <i className="fas fa-times"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    className="create-account"
                    onClick={() => {
                        setDisable("hide hide1");
                    }}
                >
                    <i className="fas fa-plus"></i>
                </div>
            </div>
            <ToastContainer />
            <div
                className={Disable}
                onClick={() => {
                    setDisable("hide");
                }}
            ></div>
            {Disable !== "hide" ? (
                <div className="new-account">
                    <div className="title">Information</div>
                    <input type="text" placeholder="Rate" />
                    <input type="text" placeholder="Desc" />
                    <select name="product_name">
                        <option value="1">product_name 1</option>
                        <option value="2">product_name 2</option>
                    </select>
                    <button
                        onClick={() => {
                            setDisable("hide");
                        }}
                    >
                        Confirm
                    </button>
                    <i
                        className="fas fa-times-circle"
                        onClick={() => {
                            setDisable("hide");
                        }}
                    ></i>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Voucher;
