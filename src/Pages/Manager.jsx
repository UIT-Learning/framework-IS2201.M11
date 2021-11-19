import React from "react";
import { Route, Switch } from "react-router";
import NavbarManager from "../components/Navbar/NavbarManager";
import EditMenu from "../components/EditMenu/EditMenu";
import ManageAccount from "../components/ManageAccount/ManageAccount";
import HistoryOfManage from "../components/History/HistoryOfManage";
import Setting from "../components/Setting/Setting";
import ManageOrder from "../components/ManageOrder/ManageOrder";
import Category from "../components/Category/Category";
import Voucher from "../components/Voucher/Voucher";

const Manager = ({ setUser, User }) => {
    return (
        <>
            <NavbarManager setUser={setUser} />
            <Switch>
                <Route path="/" exact component={EditMenu}></Route>
                <Route path="/category" exact component={Category}></Route>
                <Route path="/voucher" exact component={Voucher}></Route>
                <Route
                    path="/History"
                    exact
                    component={HistoryOfManage}
                ></Route>
                <Route
                    path="/manageorder"
                    exact
                    component={ManageOrder}
                ></Route>
                <Route
                    path="/ManageAccount"
                    exact
                    component={ManageAccount}
                    User={User}
                ></Route>
                <Route path="/Setting" exact>
                    <Setting setUser={setUser} User={User} />
                </Route>
            </Switch>
        </>
    );
};

export default Manager;
