import React, { useState } from "react";
import { useGlobalContext } from "../context";

const PopUpMenu = () => {
  const {
    expanse,
    setAmount,
    setexpanse,
    amount,
    saveData,
    showMenu,
    options,
    dropdown_field,
  } = useGlobalContext();

  function subHandler() {
    saveData();
    showMenu();
  }

  function closePopup() {
    showMenu();
  }

  return (
    <div className="popupmenu">
      <form className="form">
        <i className="fa-solid fa-xmark" onClick={closePopup}></i>
        <label className="category" htmlFor="category">
          Choose a category:
        </label>

        <select
          onChange={dropdown_field}
          className="dropdown"
          name="category"
          id="option_field"
        >
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>

        <label className="label">expense title</label>
        <input
          className="input_field"
          value={expanse}
          onChange={(e) => setexpanse(e.target.value)}
          type="text"
        />

        <label className="label">expense amount</label>
        <input
          className="input_field"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
        />

        <button className="btn" onClick={(e) => subHandler(e)}>
          save
        </button>
      </form>
    </div>
  );
};

export default PopUpMenu;
