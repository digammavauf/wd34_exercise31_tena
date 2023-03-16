import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';

const StateCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1 className="text-center">Incrementing and Decrementing using State</h1>
            <div className="col-4 mx-auto">
                <div className="d-flex flex-row justify-cotent-around gap-2 text-center mb-1">
                    <button className="btn btn-outline-success" onClick={increment}><Icon.PlusCircle className="pb-1 fs-5" /></button>
                    <span className="form-control d-inline fw-bold">Quantity: {count}</span>
                    <button className="btn btn-outline-danger" onClick={decrement}><Icon.DashCircle className="pb-1 fs-5" /></button>
                </div>
            </div>
        </div>
    );
}
 
export default StateCounter;