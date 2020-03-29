import React from "react";
import "./FooterList.scss";
import img1 from "../../../assets/icon-1.png";
import img2 from "../../../assets/icon-2.png";
import img3 from "../../../assets/icon-3.png";

const FooterList = () => {
  return (
    <ul className="footer__list">
      <li className="footer__list__item">
        <div className="footer__list__item-img">
          <img src={img1} alt="" />
        </div>
        <p className="footer__list__item-text">
          Стабильный пассивный заработок на основе инновационного метода
        </p>
      </li>
      <li className="footer__list__item">
        <div className="footer__list__item-img">
          <img src={img2} alt="" />
        </div>
        <p className="footer__list__item-text">
          Умножайте капитал и выводи деньги на карту любого банка России
        </p>
      </li>
      <li className="footer__list__item">
        <div className="footer__list__item-img">
          <img src={img3} alt="" />
        </div>
        <p className="footer__list__item-text">
          Без необходимости иметь специальные умения в трейдинге
        </p>
      </li>
    </ul>
  );
};

export default FooterList;
