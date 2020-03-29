import React from "react";
import "./FooterForm.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const FooterForm = ({ checkBox, checkedHandler }) => {
  return (
    <form action="" className="footer__form form">
      <h2 className="form__title">Получить доступ к платформе</h2>
      <input type="text" className="form-input__input" placeholder="Имя" />
      <input type="text" className="form-input__input" placeholder="Фамилия" />
      <input type="email" className="form-input__input" placeholder="Email" />
      <input
        type="text"
        className="form-input__input"
        placeholder="Номер телефона"
      />
      <div className="form-label">
        <div
          className="inner-checkbox"
          onClick={() => checkedHandler("checkbox_1", checkBox.checkbox_1)}
        >
          <span
            className={
              checkBox.checkbox_1 ? "form-input__label" : "form-input__label--true"
            }
          />
          Я согласен с Пользовательским соглашением
        </div>
        <div
          className="inner-checkbox"
          onClick={() => checkedHandler("checkbox_2", checkBox.checkbox_2)}
        >
          <span
            className={
              checkBox.checkbox_2 ? "form-input__label" : "form-input__label--true"
            }
          />
          Я согласен на обработку персональных данных
        </div>
      </div>
      <div className="form-btn">
        <Link to="/success">
          <Button text="Подключиться" />
        </Link>
      </div>
    </form>
  );
};

export default FooterForm;
