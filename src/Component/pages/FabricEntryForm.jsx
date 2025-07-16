import React from 'react'

function FabricEntryForm() {
  return (
    <div className="bg-[#f1f2f4]">
      {/* Title Bar */}
      <div className="w-full bg-sky-400 text-[#234] font-bold text-lg px-4 py-2 flex items-center shadow-sm select-none">
        Swissfort Mfg.
      </div>
      {/* Menu Bar */}
      <div className="w-full bg-white flex items-center px-4 h-8 border-b border-gray-200 shadow-sm">
        <button className="mr-6 text-black font-normal text-base focus:outline-none hover:underline">Master</button>
        <button className="text-black font-normal text-base focus:outline-none hover:underline">Transaction</button>
      </div>
      {/* Content Area */}
      <div className="w-full h-[calc(100vh-64px)] bg-[#f1f2f4] p-4">
        {/* Page content goes here */}
      </div>
    </div>
  )
}

export default FabricEntryForm
