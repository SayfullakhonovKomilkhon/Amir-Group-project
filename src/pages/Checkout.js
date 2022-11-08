import React, {useEffect, useState} from 'react';
import AllPages from "../components/AllPages";
import "../sass/checkout.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";

const Checkout = () => {
    const [mobile, setMobile] = useState([])
    const history = createBrowserHistory({window});

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {{
                setMobile(res.data)
            }})
    }, [])

    return (
        <div className="d-flex">
            <AllPages/>
            <header className='header-checkout'>
                <div className="header-checkout__top">
                    <p>Заявки > <span>Оформить заказ</span></p>
                </div>
                <div className="header-checkout__middle">
                    <h2 from="checking">Оформить заказ</h2>
                </div>
                <div className="header-checkout__bottom">
                    <label htmlFor="checking" className=" header-checkout__bottom-label d-flex">
                        <input id="checking" type="text" className="form-control" placeholder="Поиск по названию товара"/>
                        <button type="button" className="btn"><SearchOutlinedIcon/></button>
                    </label>
                </div>
                <div className="main-checkout ">
                    <div className="main-checkout__top">
                        <h3>Все товары (121)</h3>
                    </div>
                    <div className="main-checkout__middle d-flex">
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img" src="images/card-1.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__bundle">
                                                <img src="images/icon-bundle.svg" alt=""/>
                                            </div>
                                            <div className="card-icon__discount">
                                                <img src="images/icon-discount.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img w-auto ml-4" src="images/card-2.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img ml-4" src="images/card-3.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img ml-5" src="images/card-4.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__bundle">
                                                <img src="images/icon-bundle.svg" alt=""/>
                                            </div>
                                            <div className="card-icon__discount">
                                                <img src="images/icon-discount.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img w-auto ml-4" src="images/card-5.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main-checkout__middle d-flex">
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img" src="images/card-1.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__bundle">
                                                <img src="images/icon-bundle.svg" alt=""/>
                                            </div>
                                            <div className="card-icon__discount">
                                                <img src="images/icon-discount.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img w-auto ml-4" src="images/card-2.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img ml-4" src="images/card-3.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img ml-5" src="images/card-4.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__bundle">
                                                <img src="images/icon-bundle.svg" alt=""/>
                                            </div>
                                            <div className="card-icon__discount">
                                                <img src="images/icon-discount.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/single-product" className="nav-link main-checkout__product">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header">
                                        <img className="card-header__img w-auto ml-4" src="images/card-5.png" alt=""/>
                                        <div className="card-header__icon">
                                            <div className="card-icon__trade">
                                                <img src="images/icon-trade.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body__bottom">
                                        <h4>Смартфон Samsung G...</h4>
                                        <p className='price'>7 300 000 сум </p>
                                        <p className="discount-price"><span className="discount-price__number">от 2 435 000 сум</span> <span className="discount-price__time">x24</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="footer-pagination d-flex justify-content-center">
                    <Stack spacing={2}>
                        <Pagination count={10} color="primary" />
                    </Stack>
                </div>
            </header>
        </div>
    );
};

export default Checkout;