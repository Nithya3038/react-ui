import React, { useContext, useRef } from 'react';
import { InvoiceContext } from '../App';
import html2pdf from 'html2pdf.js';

const InvoicePreview=()=> {
  const {invoiceData} = useContext(InvoiceContext);

  const totalAmount = invoiceData.items.reduce((total,item)=>total+Number(item.amount),0);

  const previewRef = useRef();

  const handleDownload=()=>{
    const element = previewRef.current;
    const opt = {
      margin:       0.5,
      filename:     'invoice.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
    <div ref={previewRef} className="bg-white p-6 shadow-lg rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Invoice Preview</h2>

      <div className="mb-2">
        <strong>Client Name: </strong>{invoiceData.clientName}
      </div>
      <div className="mb-2">
        <strong>Invoice Number: </strong>{invoiceData.invoiceNumber}
      </div>
      <div className="mb-2">
        <strong>Date: </strong>{invoiceData.date}
      </div>
      <div className="mb-4">
        <strong>Currency: </strong>{invoiceData.currency}
      </div>

      <table className="w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Item</th>
            <th className="border p-2">Amount ({invoiceData.currency})</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.item}</td>
              <td className="border p-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-right font-semibold">
        Total: {invoiceData.currency} {totalAmount}
      </p>

      </div>

      <button onClick={handleDownload}
        className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Download PDF</button>

      </>
  );
};

export default InvoicePreview;
