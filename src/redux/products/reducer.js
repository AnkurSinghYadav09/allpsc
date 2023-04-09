const initial = {
  loading: false,
  products: [],
};

const productReducer=(state={...initial},action)=>{
      const {type,payload}=action
    //   console.log(payload)
      switch (type) {
        case "productSuccess":
          return { ...state,loading: true, products:payload };
        default:
          return state;
      }
}

export {productReducer};
