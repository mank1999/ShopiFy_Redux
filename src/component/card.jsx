import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../store/storeCongig";
import { addItem } from "../store/cartSlice";
export const Card = (props) => {
  const cart = useSelector((store) => store.cart.cartItem);
  const dispatch = useDispatch();

  // console.log(store);
  const { title, description, image, price, id,triggerToast } = props;
  const [quantity, setQuantity] = useState(1);
  const [TotalPrice, setTotalPrice] = useState(price);
  const [available, setAvailable] = useState(false);
  const productInfo = {
    id,
    title,
    image,
    price,
    quantity,
    TotalPrice,
  };
  const onAddCart = async () => {
    setQuantity(quantity + 1);
    await dispatch(addItem(productInfo));
    triggerToast()
  };
  useEffect(() => {
    const isAvailable = cart.some((item) => item.id === id);
    if (isAvailable) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, [cart]);

  return (
    <>
      <div className="card bg-base-100 w-[300px] shadow-2xl shadow-purple-950 rounded-4xl ">
        <figure className="mt-3.5">
          <img src={image} alt="Shoes" className="w-200px h-32 z-10" />
        </figure>
        <div className="card-body">
          <hr />
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-start">
            <p className="text-3xl"> Total Price $ {TotalPrice}</p>
          </div>

          <div className="card-actions justify-center items-center">
            <button className="btn btn-primary" onClick={() => onAddCart()}>
              {available ? "Added" : "Add To Cart"}
            </button>

            {/* <div className="flex row justify-center gap-3">
                <button
                  className="btn btn-soft btn-primary"
                  onClick={() => onQuantityRemove()}
                >
                  -
                </button>
                <p>{quantity} </p>
                <button
                  className="btn btn-soft btn-primary"
                  onClick={() => onQuantityAdd()}
                >
                  +
                </button>
              </div> */}
          </div>
        </div>
      </div>
      ;
    </>
  );
};
