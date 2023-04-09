import React from 'react';
import "./Root.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;