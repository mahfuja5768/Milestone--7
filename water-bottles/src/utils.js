const getTheCartFrLS = () => {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    return JSON.parse(cartString)
  }
  return [];
};

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS =(id)=>{
   const cart = getTheCartFrLS();
   cart.push(id);
   saveCartToLS(cart)
}


export {getTheCartFrLS, saveCartToLS, addToLS}