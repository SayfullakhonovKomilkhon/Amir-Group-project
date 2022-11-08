import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../sass/navbar.scss"
import blue from "@mui/material/colors/blue";
import AllPages from "./AllPages";

const Navbar = () => {
    return (
        <>
            <header className='site-header'>
                <div className="site-header__top-wrapper d-flex justify-content-between text-center">
                    <div className="site-header-start">
                        <a href="" className="site-header-logo btn">
                            {/*<img src="" alt=""/>*/}
                            LOGO
                        </a>
                    </div>
                    <div className="site-header-end d-flex">
                        <div className="site-header__badge">
                            <a href="#" className="site-header__badge-icon btn">
                                <Badge badgeContent={1} color="success" style={{color:"#7af576"}}>
                                    <NotificationsIcon style={{color: "grey", height: "24px", width: "24px"}}/>
                                </Badge>
                            </a>
                        </div>
                        <div className="site-header__account">
                            <a href="#" className="site-header__follow btn">
                                Личный кабинет
                                <AccountCircleIcon style={{width: "32px", height: "32px", background:"#3D639D", color:"#fff", marginLeft: "12px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;