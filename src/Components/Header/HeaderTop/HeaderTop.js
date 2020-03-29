import React from "react";
import './HeaderTop.scss';
import telegram from "../../../assets/logo.png";


const HeaderTop = () => (
  <div className="header__top">
    <a href="/" className="header__top__link">
      <img src={telegram} alt="telegram-icon" className="header__top__img" />
    </a>
    <div className="header__top__people">
      <p className="header__top__text">Сейчас проходят регистрацию</p>
      <div className="circle">
        <p className="circle__text">108</p>
        <span className="circle__span">человек</span>
      </div>
    </div>
  </div>
);

export default HeaderTop;
