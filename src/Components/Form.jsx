import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = props => {
    // (B)
    // const [FirstName, setFirstName] = useState("");
    // const [LastName, setLastName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [PhoneNumber, setPhoneNumber] = useState("");
    // const [ZipCode, setZipCode] = useState("");
    // const [IntOrExt, setIntOrExt] = useState("");
    // const [NumberOfRooms, setNumberOfRooms] = useState(0);
    // const [TimeFrame, setTimeFrame] = useState("")


    const [leadFormInfo, setLeadFormInfo] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        ZipCode: '',
        Location: "",
        NumberOfRooms: '',
        TimeFrame: ''

    });

    const onChangeHandler = e => {
        setLeadFormInfo({...leadFormInfo, [e.target.name]: e.target.value})
    }
  
    const onSubmitHandler = e =>{
        e.preventDefault();
        /*(B) const customerInfo = {FirstName, LastName, Email, PhoneNumber, ZipCode, IntOrExt, NumberOfRooms, TimeFrame};
        props.newLead(customerInfo)
        */
        console.log("onSubmitHandler")
        /** Pass in leadFormInfo into newLead ln 16 App  */
        props.newLead(leadFormInfo)
        e.target.reset();   
    }

    

    

    return(
        <div>
            <h1>Request a Quote</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="FirstName"></label>
                    <input type="text" name="FirstName"className="form-control-md mt-3" placeholder="First Name"  onChange={onChangeHandler}/>  {/**(B) onChange={(e) => setFirstName(e.target.value)}/>  */}
                </div>
                <div>
                    <label htmlFor="LastName"></label>
                    <input type="text" name="LastName" className="form-control-md mt-2" placeholder="Last Name"  onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="Email"></label>
                    <input type="text" name="Email" className="form-control-md mt-2" placeholder="Email:"  onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="PhoneNumber"></label>
                    <input type="tel" name="PhoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="PH# 555-555-5555"  className="form-control-md mt-2" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="ZipCode"></label>
                    <input type="text" name="ZipCode" className="form-control-md mt-2" placeholder="Zip Code:"  onChange={onChangeHandler} />
                </div>
                <div className="form-control-md mt-2">
                    <label htmlFor="Location">Interior</label>
                    <input type="radio" name="Location" value="Interior"className="form-control-md mt-2" placeholder="Location:"  onChange={onChangeHandler} />
                    <label htmlFor="Location">Exterior</label>
                    <input type="radio" name="Location" value="Exterior"className="form-control-md mt-2" placeholder="Location:"  onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="NumberOfRooms" name="NumberOfRooms"></label>
                    <input type="text" name="NumberOfRooms" className="form-control-md mt-2" placeholder="# of Rooms / sqft:"  onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="Desriptopm"></label>
                    <input name="TimeFrame" className="form-control-md mt-2" placeholder="Time Frame:(weeks)"  onChange={onChangeHandler}></input>   
                </div>
                <div>
                    <input type="submit" value="Submit" className="form-control-md mt-2" />
                </div>

            </form>
        </div>
    );
}

export default Form;