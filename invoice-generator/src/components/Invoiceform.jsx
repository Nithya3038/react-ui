import {useState, useContext, useEffect} from 'react';
import {InvoiceContext} from '../App';
import {useNavigate} from 'react-router-dom';

const InvoiceForm =() => {
  const{invoiceData, setInvoiceData} = useContext(InvoiceContext);
  // const[clientName,setClientName]=useState('');
  // const[invoiceNumber, setinvoiceNumber]=useState('');
  // const[date,setDate]=useState('');
  // const[currency, setCurrency]=useState('₹')
  const[item, setItem]=useState('');
  const[amount, setAmount]=useState('');
  const navigate=useNavigate();

  useEffect(() => {
  console.log("Invoice data updated:",invoiceData);
  },[]);

  const handleChange=(e) => {
    setInvoiceData({...invoiceData, [e.target.name]:e.target.value});
  };

  const handleAddItem=()=>{
    if(item!=='' && amount!==''){
      const newItem={item,amount};
      setInvoiceData({...invoiceData, items:[...invoiceData.items,newItem]});
      setItem('');
      setAmount('');
    }
  };

//   const handleDelete=(id)=>{
//   const updatedItems = invoiceData.items.filter((item,index)=>index!==id);
//   setInvoiceData({ ...invoiceData, items: updatedItems });
// };

  const clearForm =()=> {
    setInvoiceData({
      clientName:'',
      invoiceNumber:generateInvoiceNumber(),
      date:getTodayDate(),
      currency:'₹',
      items:[],
    });
  };

  return (
    <div>
      <label className="block font-semibold">Client Name</label>
      <input
        name="clientName"
        // value={clientName}
        // onChange={(e)=>setClientName(e.target.value)}
        value={invoiceData.clientName}
        onChange={handleChange}
        className="border p-2 w-full mb-2"/>

      <label className="block font-semibold">Invoice Number</label>
      <input
        name="invoiceNumber"
        defaultValue={invoiceData.invoiceNumber}
        readOnly
        className="border p-2 w-full mb-2"/>

      <label className="block font-semibold">Date</label>
      <input
        type="date"
        name="date"
        value={invoiceData.date}
        onChange={handleChange}
        className="border p-2 w-full mb-2"/>

      <label className="block font-semibold">Currency</label>
      <input
      className="border p-2 w-full mb-2"
       type="currency"
       name="currency"
       defaultValue={invoiceData.currency} />
       
      <div className="mt-4">
        <h2 className="font-bold mb-2">Add Items</h2>
        <input
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border p-2 w-full mb-2"/>

        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full mb-2"/>

          <div className="flex justify-between mt-4">
          <button onClick={handleAddItem}
          className="bg-gray-600 text-white px-4 py-2 rounded">Add</button>
          
          <button onClick={clearForm}
          className="bg-gray-300 text-black px-4 py-2 rounded">Clear</button>
          </div>

      </div>

      {/* <table className="w-full mt-4 border">
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
      {invoiceData.items.reduce((total,item)=>total+ Number(item.amount),0)}</p> */}
    
    </div>
  );
};

export default InvoiceForm;

