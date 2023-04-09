import axios from "axios";

const productAction = (sort, filter) => {
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?";
  if (sort) {
    url += `&sort=price&order=${sort}`;
  }
  if (filter) {
    url += `&filter=${filter}`;
  }

  console.log(url);
  return (dispatch) => {
    axios.get(url).then((res) => {
      // console.log(res.data.data)
      dispatch({
        type: "productSuccess",
        payload: { products: res.data.data },
      });
    });
  };
};

export { productAction };
