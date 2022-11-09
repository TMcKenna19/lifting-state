import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';






const Results = props => {
    
    return(
        <>
            
        
            {/* Mapping (forEach loop) through all leads  */}
            {
                props.viewAllLeadInfo.map((lead, i) => {
                    return <table className="table-sm" key={i}>
                        <h1>Leads:</h1>
                        <h4>Name: {lead.FirstName}, {lead.LastName}</h4>
                        <h4>Email: {lead.Email}</h4>
                        <h4>Ph#: {lead.PhoneNumber}</h4>
                        <h4>Zip: {lead.ZipCode}</h4>
                        <h4>Int/Ext: {lead.Location}</h4>
                        <h4>Rms / SQFT: {lead.NumberOfRooms}</h4>
                        <h4>Wthin: {lead.TimeFrame}</h4>
                        <button type="button" className="btn btn-outline-dark mt-2" onClick={(e)=>props.deleteLead(e, i)}>Delete</button>
                    </table>
                   
                })

            }
            
        </>
    );
}

export default Results;