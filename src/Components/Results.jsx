import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// const deleteHandler = e =>{
//     console.log("deleteHandler")
// }

const Results = props => {
    return(

        /**
         * display one lead at a time 
         * <div>
            <h1>Results</h1>
            <h5>First Name: {props.viewCustomerLeadInfo.FirstName}</h5>
            <h5>Last Name: {props.viewCustomerLeadInfo.LastName}</h5>
            <h5>Email: {props.viewCustomerLeadInfo.Email}</h5>
            <h5>Phone Number: {props.viewCustomerLeadInfo.PhoneNumber}</h5>
            <h5>Zip Code: {props.viewCustomerLeadInfo.ZipCode}</h5>
            <h5>Interior or Exterior: {props.viewCustomerLeadInfo.IntOrExt}</h5>
            <h5>Number of Rooms: {props.viewCustomerLeadInfo.NumberOfRooms}</h5>
            <h5>Time Frame: {props.viewCustomerLeadInfo.TimeFrame}</h5>
        </div>
         */
        <>
        
        
            {/* Mapping (forEach loop) through all leads  */}
            {
                props.viewAllLeadInfo.map((lead, i) => {
                    return <table className="table-sm">
                        <h1>Leads:</h1>
                        <h4>Name: {lead.FirstName}, {lead.LastName}</h4>
                        <h4>Email: {lead.Email}</h4>
                        <h4>Ph#: {lead.PhoneNumber}</h4>
                        <h4>Zip: {lead.ZipCode}</h4>
                        <h4>Int/Ext: {lead.Location}</h4>
                        <h4>Rms / SQFT: {lead.NumberOfRooms}</h4>
                        <h4>Wthin: {lead.TimeFrame}</h4>
                    </table>
                   
                })

            }
            
        </>
    );
}

export default Results;