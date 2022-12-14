import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = props => {
    
    const [leadFormInfo, setLeadFormInfo] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        ZipCode: '',
        Location: '',
        NumberOfRooms: '',
        TimeFrame: '',
        isCalled: false

    });
       
    const onChangeHandler = e => {
        console.log("onChange")
        setLeadFormInfo({...leadFormInfo, [e.target.name]: e.target.value});
        
    };
    
    
    const onSubmitHandler = e =>{
        e.preventDefault();     
        /** Pass in leadFormInfo into newLead ln 16 App  */
        props.newLead(leadFormInfo);
        setLeadFormInfo({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        ZipCode: "",
        Location: "",
        NumberOfRooms: "",
        TimeFrame: "",
        isCalled: false
        });
        
    };

 
    return(
        <div>
            <h1>Request a Quote</h1>
            <form className="form-control mt-2">
                <div>
                    <label htmlFor="FirstName"></label>
                    <input type="text" name="FirstName" value={leadFormInfo.FirstName} className="form-control mt-" placeholder="First Name"  onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="LastName"></label>
                    <input type="text" name="LastName" value={leadFormInfo.LastName} className="form-control mt-" placeholder="Last Name"  onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="Email"></label>
                    <input type="text" name="Email" value={leadFormInfo.Email} className="form-control mt-" placeholder="Email:"  onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="PhoneNumber"></label>
                    <input type="tel" name="PhoneNumber" value={leadFormInfo.PhoneNumber} placeholder="PH# 555-555-5555"  className="form-control mt-" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="ZipCode"></label>
                    <input type="text" name="ZipCode" value={leadFormInfo.ZipCode} className="form-control mt-" placeholder="Zip Code:"  onChange={onChangeHandler} />
                </div>
                <div>
                <select onChange={onChangeHandler} value={leadFormInfo.Location} name="Location" className="form-control mt-4" aria-label="Default select example" required>
                    <option hidden value="">Surface</option>
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Both">Both</option>
                </select>

                </div>
                <div>
                    <label htmlFor="NumberOfRooms" name="NumberOfRooms"></label>
                    <input type="text" name="NumberOfRooms" value={leadFormInfo.NumberOfRooms} className="form-control mt-" placeholder="# of Rooms / sqft:"  onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="TimeFrame"></label>
                    <input name="TimeFrame" value={leadFormInfo.TimeFrame} className="form-control mt-" placeholder="Time Frame:(weeks)"  onChange={onChangeHandler}></input>   
                </div>
                <div>
                    <button onClick={onSubmitHandler} type="button" class="btn btn-outline-dark mt-4 mb-2">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default Form;