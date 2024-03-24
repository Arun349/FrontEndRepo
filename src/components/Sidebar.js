import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "../components/Dashboard.css";
// import Navbar from './Navbar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
 
 
 
 
 
function Sidebar() {
  return (
 
    <div>
        
    <div class="container-fixed dashboard" id='dashboard'>
    <div class="row flex-nowrap">
        <div class="bg col-md-4 col-lg-3 min-vh-100 color">
            <div class="p-2">
            <a class="d-flex text-decoration-none align-items-center">
            <ManageAccountsIcon fontSize='large' style={{color:"HighlightText",paddingRight:5}} /><span class="fs-5 d-none d-sm-inline" style={{color:"HighlightText"}}>Admin Panel</span>
            </a>
            <hr style={{color:"white"}}></hr>
            <ul class="nav nav-pills flex-column mt-4">
                <li class="nav-item item">
                <a href="./uploadFile" class="nav-link text-white" >
                <PhonelinkSetupIcon fontSize='medium'style={{paddingRight:5}} /><span class="fs-6 d-none d-sm-inline Menu" >Adding Mobile</span>
                </a>
                </li>
                <li class="nav-item item">
                    <a href="#product" class="nav-link text-white">
                    <Inventory2Icon fontSize='medium'style={{paddingRight:5}}/> <span class="fs-6 d-none d-sm-inline">Managing Stocks</span>
                    </a>
                </li>
                <li class="nav-item item">
                    <a href="#order" class="nav-link text-white">
                        <ShoppingBagIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6 d-none d-sm-inline">Order Details</span>
                    </a>
                </li>
                <li class="nav-item item">
                    <a href="./customer" class="nav-link text-white">
                        <PeopleIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6  d-none d-sm-inline">Customer Details</span>
                    </a>
                </li>
                <li class="nav-item item">
                    <a href="/" class="nav-link text-white">
                    <LogoutIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6 d-none d-sm-inline">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </div>
   
   
 
  )
};
 
export default Sidebar;