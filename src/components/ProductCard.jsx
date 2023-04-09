import React from "react";

const ProductCard = (item) => {
  const data = item.item;

  return (
    <div>
      <img style={{height:"200px",width:"300px"}} src={data.img} alt="##" />
      <h6>{data.id}</h6>
      <h3>{data.brand}</h3>
      <h2>{data.price}</h2>
      <button>ADD to CART</button>
    </div>
  );
};

export default ProductCard;
