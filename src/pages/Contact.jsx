import FormContact from "../components/FormContact";
import { useEffect, useState } from "react";

const Contact = () => {
    const [data, setData] = useState({});
    const getData = (FormData) => {
        setData(FormData)
    }
    useEffect(()=>{
        console.log("Something rendered");
    });
    return (
        <div>
            <h1 className="t-shadow-success">Contact us</h1>
            <FormContact callback={getData} />
        </div>
    );
}
 
export default Contact;