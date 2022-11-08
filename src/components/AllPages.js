import React from 'react';
import "../sass/allPages.scss"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {createBrowserHistory} from "history";


const AllPages = () => {
    const history = createBrowserHistory({window});
    return (
        <>
            <main className='site-main'>
                <div className="site-main__navbar">
                    <ul className="site-navbar__start nav flex-column">
                        <li className="site-navbar__pages nav-item"><Link to="/" className={`nav-link ${history.location.pathname === "/" ? "active" : ""}`}><HomeOutlinedIcon style={{marginRight: "15px", backgroundColor:""}}/>Главная</Link></li>
                        <li className="site-navbar__pages nav-item"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}><DescriptionOutlinedIcon style={{marginRight: "15px"}}/>Заказы</Link></li>
                        <li className="site-navbar__pages nav-item"><Link to="/product" className={`nav-link ${history.location.pathname === "/product" ? "active" : ""}`}><CasesOutlinedIcon style={{marginRight: "15px"}}/>Товары</Link></li>
                        <li className="site-navbar__pages nav-item"><Link to="/review" className={`nav-link ${history.location.pathname === "/review" ? "active" : ""}`}><StarBorderOutlinedIcon style={{marginRight: "15px"}}/>Отзывы</Link></li>
                        <li className="site-navbar__pages nav-item"><Link to="/checkout" className={`nav-link ${history.location.pathname === "/checkout"   ? "active" : ""} ${history.location.pathname === "/single-product"   ? "active" : ""} `}><ShoppingCartOutlinedIcon style={{marginRight: "15px"}}/>Оформить заказ</Link></li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default AllPages;