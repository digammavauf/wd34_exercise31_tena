import { useEffect, useState } from "react";
import CartSingle from "./CartSingle";

const CartMultiple = () => {
    const [items, setItems] = useState([
        {id: 0, name: "Inverter Aircon", price: 20000},
        {id: 1, name: "Fried Chicken", price: 30000},
        {id: 2, name: "Nike Airfoce 1", price: 80000}
    ]);
    return (
        <div className="row align-items-stretch">
            {
                items.map((cartItem)=>(
                    <div className="col-4">
                        <CartSingle id={cartItem.id} name={cartItem.name} price={cartItem.price} />
                    </div>
                ))
            }
        </div>
    );
}
 
export default CartMultiple;