import React, { createContext } from 'react';
import "./Root.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { Outlet, useLoaderData } from 'react-router-dom';
export const JobsContext = createContext("");
const Root = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <JobsContext.Provider value= {data}>
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </JobsContext.Provider>
    );
};

export default Root;