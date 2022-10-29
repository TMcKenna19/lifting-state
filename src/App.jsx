import { useState } from 'react';
import './App.css';
import Form from'./Components/Form';
import Results from './Components/Results';

function App() {
  /** Catches data from customerQuoteInfo after onSubmit ln 17 Form */
  const [customerLeadInfo, setCustomerLeadInfo] = useState({});

  const addCustomerInfo = lead =>{
    setCustomerLeadInfo(lead);
  }
  

  return (
    <div className="App">
     <Form newLead={addCustomerInfo}/>
     <Results viewCustomerLeadInfo = {customerLeadInfo}/>
    </div>
  );
}

/**  */
export default App;
