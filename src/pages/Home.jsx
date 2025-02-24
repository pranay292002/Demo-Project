import React, { useEffect, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const fetchproducts = useMemo(() => {
    dispatch(setProducts());
  }, [dispatch]);
  const { filterdList, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    fetchproducts;
  }, [dispatch]);

  error && toast.error("Error ! while fetching Products");

  return (
    <>
      <h1 className="text-lg font-bold m-5">Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filterdList.length > 0 ? (
            filterdList.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))
          ) : (
            <div>Sorry! No Data Found</div>
          )}
        </div>
      )}
    </>
  );
};

export default memo(Home);
