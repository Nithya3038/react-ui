import {useContext} from 'react';
import {InvoiceContext} from '../App';
import {useNavigate} from 'react-router-dom';

const TableAdd=()=>{
  const{invoiceData,setInvoiceData}=useContext(InvoiceContext);
  const navigate=useNavigate();

   const handleDelete=(id)=>{
  const updatedItems = invoiceData.items.filter((item,index)=>index!==id);
  setInvoiceData({ ...invoiceData, items: updatedItems });
};

const goToPreview = () => {
    if (
      invoiceData.items.length > 0
    ) {
      navigate('/InvoicePreview');
    } else {
      alert('Please fill out the invoice form');
    }
  };
  
    return(
      
        <div>
            <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border px-2">Item</th>
            <th className="border px-2">Amount({invoiceData.currency})</th>
            <th className="border px-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {invoiceData.items.map((item,index)=>(

          <tr key={index}>
            <td className="border px-2">{item.item}</td>
            <td className="border px-2">{item.amount}</td>
            <td className="border px-2">
              <button onClick={()=>handleDelete(index)}
              className="text-red-400">Delete</button>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
      <p className="font-bold mt-2">Total:{invoiceData.currency}{" "}
      {invoiceData.items.reduce((total,item)=>total+ Number(item.amount),0)}</p>
      
      {invoiceData.items.length > 0 && (
      <button onClick={goToPreview} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">Preview Invoice</button>)}

    </div>
    )
};
export default TableAdd;