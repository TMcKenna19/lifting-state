import React from "react";

const Results = props => {
    return(
        <div>
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
    );
}

export default Results;