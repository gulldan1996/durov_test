import React from "react";
import "./HeaderBottom.scss";
import Button from '../../Button/Button';
import monitor from '../../../assets/monitor.png';

const HeaderBottom = () => (
  <div className="header__bottom bottom">
    <div className="bottom__left">
      <h2 className="bottom__title">
      Запустите ваш онлайн-заработок в режиме автопилота
      </h2>
      <p className="bottom__text">
      Революционная программа, на основе искусственного интеллекта от Павла и Николая Дуровых
      </p>
      <div className="bottom__btn bottom__btn--normal">
        <Button text="Узнать условия заработка" />
      </div>
    </div>
    <div className="bottom__img">
      <img src={monitor} alt="" className="bottom__img--size" />
    </div>
    <div className="bottom__btn bottom__btn--small">
      <Button text="Узнать условия заработка" />
    </div>
  </div>
);

export default HeaderBottom;
