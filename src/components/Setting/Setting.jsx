import React from "react";
import { useState } from "react";
import "../../css/setting.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userimg from "../../assets/user.png";
const Setting = ({ setUser, User }) => {
    const [CurrentPassword, setCurrentPassword] = useState("");
    const [Password1, setPassword1] = useState("");
    const [Password2, setPassword2] = useState("");

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
            <div className="setting">
                <div className="settingg">
                    <div className="setting-info">
                        <div>
                            ID
                            <input type="text" />
                        </div>
                        <div>
                            Name
                            <input type="text" />
                        </div>
                        <div>
                            Create at
                            <input type="date" className="date-of-birth" />
                        </div>
                        <div>
                            Update at
                            <input type="date" className="date-of-birth" />
                        </div>
                        <div>
                            Email
                            <input type="email" />
                        </div>
                        <div>
                            Role
                            <input type="text" />
                        </div>
                        <button
                            onClick={() => {
                                notify();
                            }}
                        >
                            Save changes
                        </button>
                        {/* <button>Dismiss</button> */}
                    </div>
                    <div className="setting-password">
                        <div>
                            Username
                            <input readOnly type="text" />
                        </div>
                        <div>
                            Current password
                            <input
                                type="password"
                                defaultValue=""
                                autoComplete="off"
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            New password
                            <input
                                type="password"
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                        </div>
                        <div>
                            Confirm password
                            <input
                                type="password"
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => {
                                console.log(Password1);
                                console.log(Password2);
                                console.log(CurrentPassword);
                                console.log(localStorage.getItem("password"));
                                if (
                                    Password1 === Password2 ||
                                    CurrentPassword !==
                                        localStorage.getItem("password")
                                ) {
                                    notify1();
                                } else {
                                }
                            }}
                        >
                            Change password
                        </button>
                    </div>
                </div>
                <div className="setting-avatar">
                    <div className="title">Profile picture</div>
                    <div className="picture">
                        <img src={userimg} alt="" />
                    </div>
                    <label className="edit">
                        <input type="file" />
                        <i className="fas fa-pen"></i>Edit
                    </label>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Setting;
