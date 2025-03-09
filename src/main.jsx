import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Account from './Account/Account.jsx'
import SignUp from './Login/signup.jsx'
import Login from './Login/login.jsx'
// import About from './AboutUs/AboutUs.jsx'
import FurnitureList from './Productpages/FurnitureList.jsx'
import ApplianceList from './Productpages/ApplianceList.jsx'

import BicycleList from './Productpages/BicycleList.jsx'
import ContactUs from './ContactUs/Contactus.jsx'

import ElectronicList from './Productpages/ElectronicList.jsx'
import FittnessList from './Productpages/FitnessList.jsx'
import SellingPage from './SellingPages/SellingPage.jsx'
import Bed from './RentingProducts/bed.jsx'
import WashingMachine from './RentingProducts/WashingMachine.jsx'
import Beddetails from './productdetails/beddetail.jsx'
import Myproducts from './SellingPages/myproducts.jsx'
import WishlistPage from './WishlistPage/Wishlistpage.jsx'

import { ToastContainer } from 'react-toastify'

const router= createBrowserRouter([
 
{
  path:"/",
  element:<Layout />,
  
  children:[
    {path:"", element:<App/>},
    {path:"/home", element:<App/>}, 
    // {path:"/aboutus",element:< About/>},
    {path:"/contactus", element:<ContactUs/>},
    {path:"/property",element:<SellingPage />},

    {path:"/account",element:<Account />},
    {path:"/signup",element:<SignUp />},
    {path:"/login",element:<Login />},
    {path:"/bed",element:<Bed />},
    {path:"/wash",element:<WashingMachine />},

    {path:"/beddetails",element:<Beddetails/>},

    {path:"/myproducts",element:<Myproducts/>},


    {path:"/furniture",element:< FurnitureList/>},
    {path:"/appliances",element:<ApplianceList/>},
    {path:"/electronic",element:<ElectronicList/>},
    {path:"/fitness" ,element:<FittnessList/>},
    {path:"/bicycle",element:<BicycleList/>},

    {path:"/wishlist",element:<WishlistPage/>}
    
  ]  
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
