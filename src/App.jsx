import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from'./Components/Form';
import Results from './Components/Results';

function App() {
  /** Catches data from leadFormInfo after onSubmit ln 15 Form */
  const [allLeadInfo, setAllLeadInfo] = useState([]);

  const addCustomerInfo = newLead =>{
    setAllLeadInfo([...allLeadInfo, newLead]);
  }

  const deleteLead = (e, idx ) =>{
    let newLeadFormInfo = allLeadInfo.filter((lead, i)=>{
        return i !=idx
    })
    setAllLeadInfo(newLeadFormInfo)
  }
  
 
  
  
  return (
    <div className="App">
     <Form newLead={addCustomerInfo}/>
     <Results viewAllLeadInfo = {allLeadInfo}
     deleteLead = {deleteLead} />
    </div>
  );
}


export default App;
