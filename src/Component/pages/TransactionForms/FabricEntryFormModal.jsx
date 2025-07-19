import React, { useState } from 'react';

export default function FabricEntryFormModal({ onClose }) {
  // State for all form fields
  const [form, setForm] = useState({
    trnNo: '', invoiceNo: '', invoiceDate: '', party: '', trnDate: '',
    fabricFor: '', meter: '', rate: '', amount: '',
    disPercent: '', disAmt: '', cgstPercent: '', cgstValue: '',
    sgstPercent: '', sgstValue: '', disAmount: '', finalAmount: ''
  });
  const [rows, setRows] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddRow = e => {
    e.preventDefault();
    setRows(prev => [
      ...prev,
      {
        meter: form.meter,
        amount: form.amount,
        discount: form.disAmt,
        cgst: form.cgstValue,
        sgst: form.sgstValue
      }
    ]);
    // Optionally clear some fields
    setForm(prev => ({ ...prev, meter: '', rate: '', amount: '', disPercent: '', disAmt: '', cgstPercent: '', cgstValue: '', sgstPercent: '', sgstValue: '' }));
  };

  return (
    <div className="flex w-[1300px] h-[500px] bg-white rounded overflow-hidden">
      {/* Left: Form */}
      <div className="flex-1 p-4 flex flex-col gap-4 min-w-[500px]">
        {/* Party and Bill Detail */}
        <fieldset className="border rounded p-2 mb-2">
          <legend className="text-sm text-blue-900 px-2">Party and Bill Detail</legend>
          <div className="grid grid-cols-6 gap-2 items-center mb-2">
            <label className="col-span-1 font-bold text-blue-900">Trn No</label>
            <input name="trnNo" value={form.trnNo} onChange={handleChange} className="col-span-1 border rounded px-2 py-1 bg-green-200" />
            <label className="col-span-1 font-bold text-blue-900">Invoice No</label>
            <input name="invoiceNo" value={form.invoiceNo} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Invoice Date</label>
            <input name="invoiceDate" value={form.invoiceDate} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" placeholder="19-07-2025 11:29:23 PM" />
          </div>
          <div className="grid grid-cols-6 gap-2 items-center">
            <label className="col-span-1 font-bold text-blue-900">Party</label>
            <select name="party" value={form.party} onChange={handleChange} className="col-span-2 border rounded px-2 py-1">
              <option value="">Select Party</option>
              <option value="Party1">Party 1</option>
              <option value="Party2">Party 2</option>
            </select>
            <label className="col-span-1 font-bold text-blue-900">Trn Date</label>
            <input name="trnDate" value={form.trnDate} onChange={handleChange} className="col-span-2 border rounded px-2 py-1" placeholder="19-07-2025 11:29:23 PM" />
          </div>
        </fieldset>
        {/* Fabric Detail */}
        <fieldset className="border rounded p-2">
          <legend className="text-sm text-blue-900 px-2">Fabric Detail</legend>
          <div className="grid grid-cols-12 gap-2 items-center mb-2">
            <label className="col-span-1 font-bold text-blue-900">Fabric For</label>
            <select name="fabricFor" value={form.fabricFor} onChange={handleChange} className="col-span-2 border rounded px-2 py-1">
              <option value="">Select</option>
              <option value="Fabric1">Fabric 1</option>
              <option value="Fabric2">Fabric 2</option>
            </select>
            <label className="col-span-1 font-bold text-blue-900">Meter</label>
            <input name="meter" value={form.meter} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Rate</label>
            <input name="rate" value={form.rate} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Amount</label>
            <input name="amount" value={form.amount} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
          </div>
          <div className="grid grid-cols-12 gap-2 items-center mb-2">
            <label className="col-span-1 font-bold text-blue-900">Dis %</label>
            <input name="disPercent" value={form.disPercent} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Amt</label>
            <input name="disAmt" value={form.disAmt} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">CGST%</label>
            <input name="cgstPercent" value={form.cgstPercent} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Value</label>
            <input name="cgstValue" value={form.cgstValue} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">SGST%</label>
            <input name="sgstPercent" value={form.sgstPercent} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Value</label>
            <input name="sgstValue" value={form.sgstValue} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
          </div>
          <div className="grid grid-cols-6 gap-2 items-center mb-2">
            <label className="col-span-1 font-bold text-blue-900">DisAmount</label>
            <input name="disAmount" value={form.disAmount} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <label className="col-span-1 font-bold text-blue-900">Final Amount</label>
            <input name="finalAmount" value={form.finalAmount} onChange={handleChange} className="col-span-1 border rounded px-2 py-1" />
            <div className="col-span-2 flex justify-end">
              <button onClick={handleAddRow} className="px-6 py-2 bg-white border-2 border-blue-900 text-blue-900 font-bold rounded hover:bg-blue-50">Add</button>
            </div>
          </div>
        </fieldset>
      </div>
      {/* Right: Table */}
      <div className="flex-1 bg-[#f1f2f4] p-2 overflow-auto min-w-[350px]">
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-white">
              <th className="border px-2 py-1">Mtr</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Discount</th>
              <th className="border px-2 py-1">CGST</th>
              <th className="border px-2 py-1">SGST</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={5} className="text-center py-4">*</td></tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="border px-2 py-1">{row.meter}</td>
                  <td className="border px-2 py-1">{row.amount}</td>
                  <td className="border px-2 py-1">{row.discount}</td>
                  <td className="border px-2 py-1">{row.cgst}</td>
                  <td className="border px-2 py-1">{row.sgst}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Close</button>
        </div>
      </div>
    </div>
  );
} 