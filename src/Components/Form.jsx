import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [IntOrExt, setIntOrExt] = useState("");
    const [NumberOfRooms, setNumberOfRooms] = useState(0);
    const [Discription, setDisctiption] = useState("")

    
    const onSubmitHandler = e =>{
        e.preventDefault();
    }

    return(
        <div>
            <h1>Request a Quote</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="FirstName">First Name:</label>
                    <input type="text" name="FirstName" className="form-control-md mt-3" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" name="LastName" className="form-control-md mt-2" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" name="Email" className="form-control-md mt-2" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="PhoneNumber">Phone Number:</label>
                    <input type="tel" name="PhoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control-md mt-2" onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="ZipCode">Zip Code:</label>
                    <input type="text" name="ZipCode" className="form-control-md mt-2" onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="IntOrExt">Interior or Exterior:</label>
                    <input type="text" name="IntOrExt" className="form-control-md mt-2" onChange={(e) => setIntOrExt(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="NumberOfRooms" name="NumberOfRooms">Number of rooms:</label>
                    <input type="text" name="NumberOfRooms" className="form-control-md mt-2" onChange={(e) => setNumberOfRooms(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Desriptopm">Description</label>
                    <textarea name="Description" id="" cols="30" rows="8" className="form-control-md mt-2" onChange={(e) => setDisctiption(e.target.value)}></textarea>   
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
}

export default Form;