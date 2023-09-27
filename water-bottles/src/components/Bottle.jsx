const Bottle = ({ bottle , handleToAddCart}) => {
//   console.log(bottle);
  const { img, id, name, price } = bottle;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={bottle.img}
            alt="bottles"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bottle.name}</h2>
          <p>Price: {bottle.price} Tk</p>
            <button onClick={()=>handleToAddCart(bottle.id)} className="btn btn-primary bg-gray-600 border-none normal-case my-3">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
