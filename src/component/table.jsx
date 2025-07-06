import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import store from "../store/storeCongig";
import { useSelector } from "react-redux";
const Table = () => {
  const CartStore = useSelector((store) => store.cart);
  const cartTotal = CartStore.cartItem
    .map((item) => item.price * item.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Sr No.</label>
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {CartStore.cartItem.map((item, index) => (
            <tr key={item.id + 3663}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  $ {item.price} X {item.quantity} ={" "}
                  {item.price * item.quantity}
                </div>
              </td>
              <td>
                <div className="flex row justify-center gap-3">
                  <button
                    className="btn btn-soft btn-primary"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <p> {item.quantity} </p>
                  <button
                    className="btn btn-soft btn-primary"
                    onClick={() => dispatch(incrementQuantity({ item }))}
                  >
                    +
                  </button>
                </div>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
      <div>
        <p className="text-3xl mt-5">Total Price : $ {cartTotal} </p>
      </div>
    </div>
  );
};

export default Table;
