import React, { useEffect, useState } from "react";
// import Card from "../component/card";
import { Card } from "../component/card";
import { fetchProducts } from "../store/cartSlice";
import store from "../store/storeCongig";
import { useSelector } from "react-redux";
import Crousel from "../component/crousel";
import TimeStamp from "../component/timeStamp";
import ToastMsg from "../component/toast";
const Home = () => {
  const CartStore = useSelector((store) => store.cart);
  useEffect(() => {
    store.dispatch(fetchProducts());
    // const timer = setTimeout(() => setLoading(false), 3000);
    // return () => clearTimeout(timer);
  }, []);
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Auto close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return (
    <>
      
      <Crousel />
      <div className="flex flex-wrap justify-center m-1 p-2 gap-3.5 flex-col items-center">
        <p className="text-4xl">🔥 Trending Now: Shop Our Newest Arrivals </p>
        <TimeStamp />{" "}
      </div>
      <div className="p-6 m-9 mt-14  flex flex-wrap gap-6 justify-center   ">
        {CartStore.loading ? (
          <div className=" flex justify-center ">
            <span className="loading loading-bars loading-xl w-36 h-60 flex justify-center "></span>
          </div>
        ) : (
          CartStore.Products.map((product) => (
            <Card
              triggerToast={triggerToast}
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={Math.floor(product.price)}
            />
          ))
        )}
      </div>
      {showToast && <ToastMsg />}
    </>
  );
};

export default Home;
