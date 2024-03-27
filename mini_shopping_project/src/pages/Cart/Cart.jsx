import React, { useContext } from "react";
import { cartContex } from "../../App";
import "./cart.css";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, setCart } = useContext(cartContex);

  const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  function handelDelete(id) {
    const filterData = cart.filter((data) => data.productId != id);
    setCart(filterData);
  }

  return (
    <div className="cartPage">
      <h2>Total Cart Item :- {cart.length} </h2>
      <h2>Total Price :- {totalPrice}</h2>
      <div className="allCart">
        {cart.map((data, i) => {
          return (
            <div className="cart" key={i}>
              <img src={data.thumbnail} alt="" />
              <p>${data.price}</p>
              <p>{data.title}</p>
              <MdDelete
                onClick={() => handelDelete(data.productId)}
                className="deleteBtn"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
