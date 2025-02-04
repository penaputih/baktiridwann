import Image from "next/image";
import React, { useState } from "react";
import lightImage from "../../../public/assets/img/youtube2.png";
import handleSwitchValue from "../../../utils/theme";

const SwitchDark = () => {

  return (
    <>
    <a href="https://www.youtube.com/@diggystudio">
    <label className="theme-switcher-label d-flex">
      <input
        className="theme-switcher" />
      <div className="switch-handle">
        <span className="light-text">
          <Image src={lightImage} alt="swicher" className="filter_1" priority />
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
    </a>
    
  </>
  );
};

export default SwitchDark;
