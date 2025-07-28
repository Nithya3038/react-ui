import {useState} from 'react';
import {createContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoiceform from './components/Invoiceform';
import TableAdd from './components/TableAdd';
import InvoicePreview from './components/InvoicePreview';

export const InvoiceContext=createContext();

const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

const generateInvoiceNumber = () => {
  const random = Math.floor(Math.random() * 10000);
  return `INV-${random.toString().padStart(4, '0')}`;
};

const App=()=>{
    const [invoiceData,setInvoiceData]=useState({
    clientName: '',
    invoiceNumber: generateInvoiceNumber(),
    date: getTodayDate(),
    currency: '₹',
    items: [],
});

const isFormFilled =
    invoiceData.clientName && invoiceData.invoiceNumber && invoiceData.date;

    return(
        <InvoiceContext.Provider value={{invoiceData, setInvoiceData}}>
        <Router>
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-md">
            <h1 className ="text-2xl font-bold mb-4">Invoice Form</h1>
             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Invoiceform></Invoiceform>
            {isFormFilled && <TableAdd></TableAdd>}
            <InvoicePreview></InvoicePreview>
            </div>  */}
            <Routes>
            <Route path="/" element={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Invoiceform></Invoiceform>
                  {isFormFilled && <TableAdd />}
                </div>
              }
            />
            <Route path="/InvoicePreview" element={<InvoicePreview />} />
          </Routes>
            </div>
            </div>
            </Router>
        </InvoiceContext.Provider>
    );
};
export default App;
