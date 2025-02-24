import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((acc, item) => (acc += (item.price*item.quantity)), 0);

  return (
    <>
      <h1 className="text-lg font-bold m-5">Cart</h1>

      <table>
        <tbody>
          {cart.map((item) => (
            <tr
              key={item.id}
              className="flex justify-between items-center space-x-10 m-5"
            >
              <td className="w-[800px] text-left">{item.title}</td>
              <td>{item.price}$</td>
              <td>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-1 bg-zinc-500 text-white rounded-lg border border-black cursor-pointer"
                >
                  Remove
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                      })
                    )
                  }
                  className="p-1 bg-zinc-500 text-white rounded-lg border border-black cursor-pointer"
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        
        
         
        </tbody>
      </table>
      <div className="flex justify-center items-center font-semibold">Total : {Math.ceil(totalCost)}$</div>
    </>
  );
};

export default Cart;
