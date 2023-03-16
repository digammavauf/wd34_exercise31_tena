import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';

const CartSingle = (data) => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(()=>count*2000);
    });

    return (
        <div id={data.id} className="card border border-dark border-4 h-100">
            <div className="card-header">
                <h1 class="card-title">{data.name}</h1>
                <h3 class="card-subtitle">&#x20b1; {data.price.toLocaleString("us-en")}</h3>
            </div>
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, hic cupiditate! Cupiditate, in corrupti quisquam maxime similique quaerat suscipit inventore id nesciunt impedit blanditiis rem beatae debitis dignissimos labore vel.</p>
            </div>
            <div className="card-footer">
                <div className="d-flex flex-row justify-cotent-around gap-2 text-center mb-1">
                    <button className="btn btn-outline-success" onClick={()=>setCount(()=>Math.min(10,count+1))}><Icon.PlusCircle className="pb-1 fs-5" /></button>
                    <span className="form-control d-inline fw-bold">Quantity: {count}</span>
                    <button className="btn btn-outline-danger" onClick={()=>setCount(()=>Math.max(0,count-1))}><Icon.DashCircle className="pb-1 fs-5" /></button>
                </div>
                <h2>Total Price: {price.toLocaleString("en-us")}</h2>
            </div>
        </div>
    );
}
 
export default CartSingle;