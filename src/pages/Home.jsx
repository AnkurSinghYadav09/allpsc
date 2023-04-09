import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/products/action";
import ProductCard from "../components/ProductCard";

const Homes = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  const productsData = useSelector(
    (state) => state.productReducer.products.products
  );
  console.log(sort);

  useEffect(() => {
    dispatch(productAction(sort,filter));
  }, [sort,filter]);

  return (
    <div>
      <button onClick={() => setSort("asc")}>ASCENDING </button>
      <button onClick={() => setSort("desc")}>desending </button>
   <br />
   <br />
   <br />
    <button onClick={() => setFilter("Laptop")}>Laptop</button>
    <button onClick={() => setFilter("Mobile")}>Mobile</button>
    <button onClick={() => setFilter("Head_Phones")}>Head_Phones</button>
      <h3>token :- {token}</h3>

      <div
        style={{
          display: "flex",
        }}
      >
        {productsData?.map((item, i) => {
          return (
            <div key={i}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homes;
