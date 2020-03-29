import React from "react";
import "./Success.scss";
import Button from "../../Components/Button/Button";

const Success = () => {
  return (
    <section className="success__container">
      <div className="success">
        <div className="success__header">
          <h2 className="success__header-heading">Ваш личный аккаунт создан!</h2>
          <p className="success__header-paragraph">
            {" "}
            Осталось всего несколько шагов до вашего заработка…
          </p>
        </div>
        <div className="success__description">
          <p className="description__paragraph">
            firstname, вы успешно прошли регистрацию! Чтобы начать использовать
            все технологии нашей платформы, вам осталось:
          </p>
          <ul className="description__list">
            <li className="description__list__item">
              1.Дождаться звонка нашего консультанта и получить от него все
              инструкции: как пользоваться кабинетом и выводить прибыль удобным
              для вас способом
            </li>
            <li className="description__list__item">
              2.Внести желаемую сумму на счет для запуска автоматической
              торговли платформой
            </li>
            <li className="description__list__item">
              3.Начать онлайн-торговлю и получить свой первый заработок!{" "}
            </li>
          </ul>
        </div>
        <div className="success__btn">
          <Button text="Перейти в личный кабинет" />
        </div>
      </div>
    </section>
  );
};

export default Success;
