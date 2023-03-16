import { useState } from "react";
import Timer from "./Timer";

const FormContact = (data) => {
    const [ firstName, setFirstName ] = useState("KodeGo");
    const [ lastName, setLastName ] = useState("Bebeko");
    const submitForm = () => {
        data.callback({firstName: firstName, lastName: lastName});
    }
    return (
        <div>
            <Timer />
            <div className="col-6 mx-auto">
                <form action="submitForm">
                    <label className="mb-1" htmlFor="fistName">First name</label>
                    <input className="form-control mb-2" type="text" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    <label className="mb-1" htmlFor="lastName">Last name</label>
                    <input className="form-control mb-2" type="text" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    <button className="btn btn-success" type="button" onClick={submitForm}>Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default FormContact;