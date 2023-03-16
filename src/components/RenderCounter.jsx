import { useEffect, useState, useRef } from "react";

const RenderCounter = () => {
    const [value, setValue] = useState('');
    const renderCount = useRef(0);
    const displayValue = (e) => {
        setValue(e.target.value);
    }
    useEffect(()=>{
        renderCount.current++;
    });
    const selectingElements = useRef();
    const changeValue=()=>{
        selectingElements.current.value = "Changed value";
    }
    return (
        <div>
            <input ref={selectingElements} type="text" className="form-control bg-dark text-light" onChange={displayValue} />
            <h1>{value}</h1>
            <h3>Render Count: {renderCount.current}</h3>
            <button onClick={changeValue} className="btn btn-success me-2">Change Value</button>
        </div>
    );
}
 
export default RenderCounter;