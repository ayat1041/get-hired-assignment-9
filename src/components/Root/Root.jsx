import React, { createContext } from 'react';
import "./Root.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { Outlet, useLoaderData } from 'react-router-dom';

const Root = () => {
    // console.log(data);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;