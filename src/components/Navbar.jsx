import React, { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { filterProducts, setProducts } from "../redux/slices/productSlice";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  useDebounce  from "../hooks/useDebounce";

const Navbar = () => {
  const cart = useSelector(state => state.cart.items);
  const [query, setQuery] = useState("");
  
  const debounce = useDebounce(query, 2000);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if(debounce?.length > 2) {
      dispatch(filterProducts(debounce ));
    }
  }, [debounce]);


  
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <a href="/" className="pl-8">
          Logo
        </a>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-zinc-200 text-black p-1 rounded-lg"
          placeholder="search"
        ></input>
        <div className="px-4 cursor-pointer flex justify-between space-x-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
          <Badge badgeContent={cart.length} color="primary" >
            <IoCart style={{fontSize:"25px"}}/>
          </Badge>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
