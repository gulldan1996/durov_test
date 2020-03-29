import React, { useState } from "react";
import "./Footer.scss";

import FooterList from "./List/FooterList";
import FooterForm from "./Form/FooterForm";

const Footer = () => {
  const [checkBox, setInput] = useState({
    checkbox_1: false,
    checkbox_2: true
  });
  const checkedHandler = (name, check) => {
    setInput({
      ...checkBox,
      [name]: !check
    });
  };

  return (
    <footer className="footer__container">
      <div className="footer">
      <FooterList />
      <FooterForm checkedHandler={checkedHandler} checkBox={checkBox} />
      </div>
    </footer>
  );
};

export default Footer;
