import {useState} from 'react';
import {createContext} from 'react';
import Invoiceform from './components/Invoiceform';
// import InvoicePreview from './components/InvoicePreview';
export const InvoiceContext=createContext();

const App=()=>{
    const [invoiceData,setInvoiceData] = useState({
    clientName: '',
    invoiceNumber: '',
    date: '',
    currency: '',
    items: [],
});

    return(
        <InvoiceContext.Provider value={{invoiceData, setInvoiceData}}>
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-md">
            <h1 className ="text-2xl font-bold mb-4">Invoice Generator</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Invoiceform></Invoiceform>
            {/* <InvoicePreview></InvoicePreview> */}
            </div> 
            </div>
            </div>
        </InvoiceContext.Provider>
    );
};
export default App;
