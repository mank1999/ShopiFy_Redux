import React from "react";
import Table from "../component/table";
const CartModal = ({ children }) => {
  return (
    <>
      <span
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        {children}
      </span>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">ShopiFii Cart </h3>
          <Table />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
