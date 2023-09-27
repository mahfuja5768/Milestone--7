import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getTheCartFrLS } from "../utils";
import Cart from "./Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBottles(data);
      });
  }, []);

  const handleToAddCart = (bottleId) => {
    // console.log(bottleId)
    addToLS(bottleId);
    const newArray = [...cart, bottleId];
    setCart(newArray);
  };

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getTheCartFrLS();
      //   console.log(storedCart);
      let savedCart = [];
      for(const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      // console.log("saved cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  return (
    <div className="my-12">
      <h1 className="text-2xl font-semibold text-center">
        Total Bottles available: {bottles.length}
      </h1>
      <h1 className="text-2xl font-semibold text-center my-2">
        Bottles in Cart: {cart.length}
      </h1>

      <Cart cart={cart}></Cart>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleToAddCart={handleToAddCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
