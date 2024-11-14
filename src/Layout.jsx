import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import Account from "./Account/account";
import { useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout(){
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    return(
        <>
        {<Navbar />}
        {<Outlet />}
        
        {!isLoginPage && <Footer /> }
        
        <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            theme="light"
            transition:Bounce></ToastContainer>
        </>
    )
}

export default Layout;