import React, { useEffect, useState } from "react";
import store from "../store/storeCongig";
import { Provider, useSelector } from "react-redux";
import CartModal from "../page/cart";
import { productNames } from "../assets/product";
const Header = () => {
  const cart = useSelector((store) => store.cart.cartItem);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [increment, setIncrement] = useState(10);
  useEffect(() => {
    const filter =
      // Boolean(search.length) &&
      productNames.filter((product) =>
        product.toLowerCase().includes(search.toLowerCase())
      );
    // let increment = 10
    let spliceData = filter.slice(0, increment);
    setData(spliceData);
  }, [search]);
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ShopiFie</a>
      </div>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <div>
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            list="exampleList"
            value={search}
          />
          {Boolean(search.length) && (
            <box
              defaultValue="Server location"
              className="justify-start flex flex-col w-full bg-white absolute border-r-4  shadow-2xl"
            >
              {data.map((rs, index) => (
                <>
                  <box
                    key={index + 12}
                    onClick={() => handleSearch(rs)}
                    className="hover:bg-amber-200 m-1 p-1 pointer-cursor"
                  >
                    {rs}
                  </box>
                  <hr />
                </>
              ))}
            </box>
          )}
        </div>
      </label>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <CartModal>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <button>
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                    +
                  </svg>
                  <span className="badge badge-sm indicator-item bg-red-500 text-white">
                    {cart.length}
                  </span>
                </div>
              </button>
            </div>
          </CartModal>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
