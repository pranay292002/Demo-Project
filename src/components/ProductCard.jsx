import React from "react";
import {useDispatch} from 'react-redux';
import { addToCart } from "../redux/slices/cartSlice";
import {useNavigate } from 'react-router-dom';
import {toast } from "react-toastify"

const ProductCard = ({img, title, price,id}) => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between w-[270px]">
        <div onClick={()=>navigate(`/product/${id}`)} >
          <img src={img} alt="product" className="w-full h-48 " />
          <h2 className="text-lg  mt-2">{title}</h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-md text-gray-800 mt-1">{price}$</p>
          <button onClick={(e)=>{e.stopPropagation(); dispatch(addToCart({id, title, price})); toast.success("Product added in cart")}} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
