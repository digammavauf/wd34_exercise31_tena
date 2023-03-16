import { useRef, useEffect } from "react";
import RenderCounter from '../components/RenderCounter';

const UseReferencePage = () => {
    const selectingElements = useRef();
    useEffect(()=>{
        console.log("Rendered something");
    });
    const getValue = () => {
        alert(selectingElements.current.value);
    }
    const changeValue = () => {
        selectingElements.current.value = "Changed value";
    }
    const getClass = () => {
        alert(selectingElements.current.classList);
    }
    return (
        <div>
            <h1>Use Reference Page</h1>
            <input ref={selectingElements} type="text" className="form-control bg-dark text-light mb-2" />
            <button onClick={getValue} className="btn btn-primary me-2">Get Value</button>
            <button onClick={changeValue} className="btn btn-success me-2">Change Value</button>
            <button onClick={getClass} className="btn btn-danger">Get Class</button>
            <hr/>
            <RenderCounter />
        </div>
    );
}
 
export default UseReferencePage;