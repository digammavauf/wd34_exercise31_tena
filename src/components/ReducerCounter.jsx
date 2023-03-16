import { useReducer } from "react";
import * as Icon from 'react-bootstrap-icons';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {number: state.number + action.points}
            break;
        case 'decrement':
            return {number: state.number - action.points}
            break;
        case 'reset':
            return {number: 0}
        default:
            break;
    }
}
const ReducerCounter = () => {
    const [count, dispatch] = useReducer(counterReducer, {number: 0});
    return (
        <div>
<h1 className="text-center">Incrementing and Decrementing using Reducer</h1>
            <div className="col-4 mx-auto">
                <div className="d-flex flex-row justify-cotent-around gap-2 text-center mb-1">
                    <button className="btn btn-outline-success" onClick={()=>dispatch({type:'increment',points:5})}><Icon.PlusSquare className="pb-1 fs-5" /></button>
                    <button className="btn btn-outline-info" onClick={()=>dispatch({type:'increment',points:1})}><Icon.PlusCircle className="pb-1 fs-5" /></button>
                    <span className="form-control d-inline fw-bold">Quantity: {count.number}</span>
                    <button className="btn btn-outline-warning" onClick={()=>dispatch({type:'decrement',points:1})}><Icon.DashCircle className="pb-1 fs-5" /></button>
                    <button className="btn btn-outline-danger" onClick={()=>dispatch({type:'decrement',points:5})}><Icon.DashSquare className="pb-1 fs-5" /></button>
                    <button className="btn btn-outline-primary" onClick={()=>dispatch({type:'reset'})}><Icon.Icon0Circle className="pb-1 fs-5" /></button>
                </div>
            </div>
        </div>
    );
}
 
export default ReducerCounter;