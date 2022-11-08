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
  

  return (
    <div className="App">
     <Form newLead={addCustomerInfo}/>
     <Results viewAllLeadInfo = {allLeadInfo}/>
    </div>
  );
}

/**  */
export default App;
