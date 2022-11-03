import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [IntOrExt, setIntOrExt] = useState("");
    const [NumberOfRooms, setNumberOfRooms] = useState(0);
    const [TimeFrame, setTimeFrame] = useState("")

    
    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log("onSubmitHandler")
        const customerInfo = {FirstName, LastName, Email, PhoneNumber, ZipCode, IntOrExt, NumberOfRooms, TimeFrame};
        /** Pass in customerInfo into newLead ln 16 App  */
        props.newLead(customerInfo)
        /** clear input value after submit */
        e.target.reset();
       
    }

    return(
        <div>
            <h1>Request a Quote</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="FirstName"></label>
                    <input type="text" name="FirstName"className="form-control-md mt-3" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="LastName"></label>
                    <input type="text" name="LastName" className="form-control-md mt-2" placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Email"></label>
                    <input type="text" name="Email" className="form-control-md mt-2" placeholder="Email:"  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="PhoneNumber"></label>
                    <input type="tel" name="PhoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="PH# 555-555-5555"  className="form-control-md mt-2" onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="ZipCode"></label>
                    <input type="text" name="ZipCode" className="form-control-md mt-2" placeholder="Zip Code:"  onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="IntOrExt"></label>
                    <input type="text" name="IntOrExt" className="form-control-md mt-2" placeholder="Interior/Exterior:"  onChange={(e) => setIntOrExt(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="NumberOfRooms" name="NumberOfRooms"></label>
                    <input type="text" name="NumberOfRooms" className="form-control-md mt-2" placeholder="# of Rooms / sqft:"  onChange={(e) => setNumberOfRooms(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Desriptopm"></label>
                    <input name="Time Frame" className="form-control-md mt-2" placeholder="Time Frame:"  onChange={(e) => setTimeFrame(e.target.value)}></input>   
                </div>
                <div>
                    <input type="submit" value="Submit" className="form-control-md mt-2" />
                </div>

            </form>
        </div>
    );
}

export default Form;