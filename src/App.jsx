import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from'./Components/Form';
import Results from './Components/Results';

function App() {
  /** Catches data from leadFormInfo after onSubmit ln 15 Form */
  //(B) const [customerLeadInfo, setCustomerLeadInfo] = useState({});
  const [allLeadInfo, setAllLeadInfo] = useState([]);

  /* (B) const addCustomerInfo = lead =>{
         setCustomerLeadInfo(lead);
  } */
  const addCustomerInfo = newLead =>{
    setAllLeadInfo([...allLeadInfo, newLead]);
  }
  

  return (
    <div className="App">
     <Form newLead={addCustomerInfo}/>
     <Results viewAllLeadInfo = {allLeadInfo}/>
    </div>
  );
}


export default App;
