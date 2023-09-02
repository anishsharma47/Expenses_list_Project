import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

const getloacalitem = () => {
  let list = localStorage.getItem("ExpenseList");

  if (list) {
    return JSON.parse(localStorage.getItem("ExpenseList"));
  } else {
    return [];
  }
};

const getAmount = () => {
  let amo = localStorage.getItem("sumofamount");

  if (amo) {
    return JSON.parse(localStorage.getItem("sumofamount"));
  } else {
    return "";
  }
};

const AppProvider = ({ children }) => {
  const [expanse, setexpanse] = useState("");
  const [amount, setAmount] = useState("");
  const [popUpMenu, setPopUpMenu] = useState(false);
  const [dropdown, setDropDown] = useState({});
  const [listData, setlistData] = useState(getloacalitem());
  const [optionvalue, setOptionValue] = useState("food");
  const [totalAmount, setTotalAmount] = useState(getAmount());

  function dropdown_field(e) {
    setOptionValue(e.target.value);
  }

  function showMenu() {
    setPopUpMenu(false);
  }

  let exp_obj = {
    input1: expanse ? expanse : "-",
    input2: amount ? amount : "0",
    input3: optionvalue,
  };

  function saveData() {
    if (!expanse && !amount) {
      alert("please input valid string");
    } else {
      setlistData([...listData, exp_obj]);
      setTotalAmount(Number(totalAmount) + Number(amount));
      setexpanse("");
      setAmount("");
    }
  }

  const options = [
    { label: "food" },
    { label: "shopping" },
    { label: "fuel" },
    { label: "other" },
  ];

  return (
    <AppContext.Provider
      value={{
        totalAmount,
        setTotalAmount,
        options,
        dropdown_field,
        expanse,
        setexpanse,
        setAmount,
        amount,
        setlistData,
        listData,
        popUpMenu,
        setPopUpMenu,
        saveData,
        showMenu,
        dropdown,
        setDropDown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
