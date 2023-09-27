
const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className="text-center">
            <div className="flex gap-5 mx-auto">
            {
                cart.map((bottle, idx)=><img key={idx} src={bottle.img} className="w-20"></img>)
            }
            </div>
        </div>
    );
};

export default Cart;