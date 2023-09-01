import React, { useState } from "react";
import PopUpMenu from "./PopUpMenu";
import { useGlobalContext } from "../context";

const Header = () => {
  const { setPopUpMenu, popUpMenu } = useGlobalContext();

  return (
    <>
      <div className="header">
        <h1>logo</h1>
        <button className="add_btn clicked" onClick={(e) => setPopUpMenu(true)}>
          Add Exp..
        </button>
      </div>
      {popUpMenu && <PopUpMenu />}
    </>
  );
};

export default Header;
