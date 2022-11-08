import React, { useRef, useState } from "react";
import AllPages from "./AllPages";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.scss"
import "../sass/singleProduct.scss"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


const SingleProduct = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="d-flex">
            <AllPages/>

            <main className="main-product">
                <div className="main-product__title">
                    <p>Заявки > Оформить заказ > <span>Смартфон Apple iPhone 11 128 Gb Slim Box черный</span></p>
                </div>
                <div className="main-product__middle">
                    <div className="main-product__information">
                        <h2>Смартфон Apple iPhone 11 128 Gb Slim Box черный</h2>
                    </div>
                    <div className="main-product__slider">
                        <div className="row">
                            <div className="col-lg-6">
                                <Slider {...settings} style={{background: "#F3F5F8", marginLeft: "30px", width: "480px", height: "380px", borderRadius: "16px"}}>
                                    <div className="main-product__slider-img">
                                        <img style={{margin: "30px auto"}} src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                    <div className="main-product__slider-img">
                                        <img src="images/slider-1.png" alt=""/>
                                    </div>
                                </Slider>
                                <div className="main-product__slider-icon">
                                    <div className="card-icon__bundle">
                                        <img src="images/icon-bundle.svg" alt=""/>
                                    </div>
                                    <div className="card-icon__trade">
                                        <img src="images/icon-trade.svg" alt=""/>
                                    </div>
                                    <div className="card-icon__discount">
                                        <img src="images/icon-discount.svg" alt=""/>
                                    </div>
                                    <div className="card-icon__trade-green">
                                        <img src="images/icon-discount.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main-discount">
                                    <div className="main-discount__price">
                                        <p>Цена телефона</p>
                                        <h4>6 000 000 сум </h4>
                                    </div>
                                    <div className="main-discount__all-price d-flex justify-content-between">
                                        <div className="main-discount__price-phone">
                                            <p>Общая цена (с наценкой)</p>
                                            <h4>7 300 000 сум </h4>
                                        </div>
                                        <h5><span>2 433 333 сум</span>x3</h5>
                                    </div>
                                    <Box sx={{ width: '481px' }}>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            textColor="secondary"
                                            indicatorColor="secondary"
                                            aria-label="secondary tabs example"
                                            style={{borderRadius: "6px", display: "flex", justifyContent: "space-between"}}
                                        >
                                            <Tab value="one" label="3 мес" style={{borderRadius: "6px 0 0 6px", width: "25%"}} />
                                            <Tab value="two" label="6 мес"style={{width: "25%"}} />
                                            <Tab value="three" label="12 мес"style={{width: "25%"}} />
                                            <Tab value="four" label="24 мес" style={{borderRadius: "0 6px 6px 0", width: "25%"}}/>
                                        </Tabs>
                                    </Box>
                                    <p className="main-checkout__product-tab-price">Наценка: <span>5%</span></p>
                                </div>
                                <div className="main-discount__about">
                                    <h4>Общие характеристики</h4>
                                    <p>Тип: моноблок (классический) <br/>
                                        Стандарт: 2G, 3G, 4G (LTE), 5G <br/>
                                        Операционная система: iOS 14 <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-product__bottom">
                        <h3 className="main-product__stock">Акции</h3>
                        <div className="main-product__discount d-flex justify-content-between">
                            <div className="main-product__discount-part d-flex">
                                <div className="card-icon__trade">
                                    <img src="images/icon-trade.svg" alt=""/>
                                </div>
                                <div className="main-product__discount-part-title">
                                    <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                                    <p>- 400 000 сум</p>
                                </div>
                            </div>
                            <div className="main-product__discount-part-checkbox">
                                <Checkbox {...label}  color="success" style={{marginRight: "30px"}} />
                            </div>
                        </div>
                        <div className="line">

                        </div>
                        <div className="main-product__discount d-flex justify-content-between">
                            <div className="main-product__discount-part d-flex">
                                <div className="card-icon__bundle">
                                    <img src="images/icon-bundle.svg" alt=""/>
                                </div>
                                <div className="main-product__discount-part-title">
                                    <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                                    <p>- 400 000 сум</p>
                                </div>
                            </div>
                            <div className="main-product__discount-part-checkbox">
                                <Checkbox {...label}  color="success" style={{marginRight: "30px"}} />
                            </div>
                        </div>
                        <div className="line">

                        </div>
                        <div className="main-product__discount d-flex justify-content-between">
                            <div className="main-product__discount-part d-flex">
                                <div className="card-icon__discount">
                                    <img src="images/icon-discount.svg" alt=""/>
                                </div>
                                <div className="main-product__discount-part-title">
                                    <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                                    <p>- 400 000 сум</p>
                                </div>
                            </div>
                            <div className="main-product__discount-part-checkbox">
                                <Checkbox {...label}  color="success" style={{marginRight: "30px"}} />
                            </div>
                        </div>
                        <div className="line">

                        </div>
                        <div className="main-product__discount d-flex justify-content-between">
                            <div className="main-product__discount-part d-flex">
                                <div className="card-icon__trade-green">
                                    <img src="images/icon-discount.svg" alt=""/>
                                </div>
                                <div className="main-product__discount-part-title">
                                    <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                                    <p>- 400 000 сум</p>
                                </div>
                            </div>
                            <div className="main-product__discount-part-checkbox">
                                <Checkbox {...label}  color="success" style={{marginRight: "30px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="main-product__button">
                        <button type="button" className="btn">Добавить в корзину</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SingleProduct;


