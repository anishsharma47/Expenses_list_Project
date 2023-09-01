import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Noitem from "./Noitem";

const Home = () => {
  const { listData, setlistData, setTotalAmount, totalAmount } =
    useGlobalContext();

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(listData));
  }, [listData]);

  useEffect(() => {
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  }, [totalAmount]);

  function removieItem(item, index) {
    const updatedItem = listData.filter((elem, ind) => {
      return index !== ind;
    });
    setlistData(updatedItem);
    setTotalAmount(
      0 <= totalAmount - item.input2 ? totalAmount - item.input2 : 0
    );
  }

  return (
    <div className="home">
      <h1>expense list</h1>

      {listData.length !== 0 ? (
        <>
          <button onClick={() => setlistData([])}>remove all</button>
          <div className="home_main_container">
            {listData &&
              listData.map((item, index) => (
                <div key={index} className="home_container">
                  <div>
                    <span className="span_left">category</span>
                    <span className="span_right">{item.input3}</span>
                  </div>
                  <div>
                    <span className="span_left">Expense title</span>
                    <span className="span_right">{item.input1}</span>
                  </div>
                  <div>
                    <span className="span_left">Amount</span>
                    <span className="span_right">{item.input2}</span>
                  </div>
                  <i
                    className="fa-solid fa-trash"
                    onClick={(elem) => removieItem(item, index)}
                  ></i>
                </div>
              ))}
          </div>

          <div className="amount_container">
            <span>your Expenses amount is :</span>
            <span>{totalAmount}</span>
          </div>
        </>
      ) : (
        <Noitem />
      )}
    </div>
  );
};

export default Home;