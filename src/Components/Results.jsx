import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Results = props => {
    return(

        /**
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
        {/* <table className="table-sm table-bordered">
        <h1>Leads:</h1>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Ph #</th>
                <th>Zip Code</th>
                <th>Location</th>   
                <th>Size</th>
                <th>Time Frame</th>
            </tr>
            {
                props.viewAllLeadInfo.map((lead, i) => {
                    return <tr>
                        <td>{lead.FirstName}</td>
                        <td>{lead.LastName}</td>
                        <td>{lead.Email}</td>
                        <td>{lead.PhoneNumber}</td>
                        <td>{lead.ZipCode}</td>
                        <td>{lead.Location}</td>
                        <td>{lead.NumberOfRooms}</td>
                        <td>{lead.TimeFrame}</td>
                    </tr>
                })
            }

        </table> */}
        
            
            {
                props.viewAllLeadInfo.map((lead, i) => {
                    return <table className="table-sm">
                        <h1>Leads:</h1>
                        <h4>First: {lead.FirstName}</h4>
                        <h4>Last: {lead.LastName}</h4>
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