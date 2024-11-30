"use client"
import React, { useState } from 'react';
import { Menu, ChevronRight } from 'lucide-react';

const SimulatorLayout = () => {
  // State for registers and RAM
  const [registers, setRegisters] = useState({
    ACC: '0000000000000001',
    PC: '0000000000000000',
    SP: '0000000000000000',
    IR: '0100000000000000',
    DIN: '0000000000000001',
    DOUT: '0000000000000001'
  });

  const [ram, setRam] = useState([
    { address: 0, value: '0008' },
    { address: 1, value: '2009' },
    { address: 2, value: '1008' },
    { address: 3, value: '4000' },
    { address: 4, value: '0000' },
    { address: 5, value: '0000' }
  ]);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Menu Bar */}
      <div className="flex items-center p-1 bg-gray-200 border-b">
        <div className="flex space-x-4 text-sm">
          <button className="px-2 hover:bg-gray-300">File</button>
          <button className="px-2 hover:bg-gray-300">View</button>
          <button className="px-2 hover:bg-gray-300">Info</button>
          <button className="px-2 hover:bg-gray-300">License</button>
          <button className="px-2 hover:bg-gray-300">ram1</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* CPU Architecture View */}
        <div className="flex-1 p-4 border-r">
          <div className="h-full relative">
            {/* Register displays */}
            <div className="absolute left-4 top-32 space-y-24">
              {/* ACC Register */}
              <div className="border p-1 bg-white w-48">
                ACC: {registers.ACC}
              </div>
              {/* PC Register */}
              <div className="border p-1 bg-white w-48">
                PC: {registers.PC}
              </div>
              {/* SP Register */}
              <div className="border p-1 bg-white w-48">
                SP: {registers.SP}
              </div>
            </div>

            {/* Right side registers */}
            <div className="absolute right-4 top-32 space-y-24">
              {/* IR Register */}
              <div className="border p-1 bg-white w-48">
                IR: {registers.IR}
              </div>
              {/* DIN Register */}
              <div className="border p-1 bg-white w-48">
                DIN: {registers.DIN}
              </div>
            </div>

            {/* DOUT Register */}
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <div className="border p-1 bg-white w-48">
                DOUT: {registers.DOUT}
              </div>
            </div>

            {/* AND Gate */}
            <div className="absolute right-32 top-64">
              <div className="border p-1 bg-white">
                AND 0FFF
              </div>
            </div>
          </div>
        </div>

        {/* RAM View */}
        <div className="w-64 bg-white border-l">
          <div className="h-full overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border-b text-left">Address</th>
                  <th className="p-2 border-b text-right">Data</th>
                </tr>
              </thead>
              <tbody>
                {ram.map((entry) => (
                  <tr key={entry.address} className="hover:bg-gray-50">
                    <td className="p-2 border-b">{entry.address}</td>
                    <td className="p-2 border-b text-right font-mono">{entry.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex justify-between p-2 bg-gray-100 border-t">
        <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Micro Step
        </button>
        <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Instruction
        </button>
      </div>
    </div>
  );
};

export default SimulatorLayout;