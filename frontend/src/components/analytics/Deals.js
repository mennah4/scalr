import React from 'react';

export default function Deals({ deals }) {
  return (
    <div className="container text-sm mx-auto overflow-x-auto sm:mx-0">
      <table className="min-w-full shadow rounded overflow-hidden">
        <thead className="text-white">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              CRM Score
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Owner
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Stage
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {Array.from({ length: 5 }).map((deal, i) => (
            <tr key={i}>
              <td className="px-6 py-2 whitespace-nowrap">IBM</td>
              <td className="px-6 py-2 whitespace-nowrap">
                <div class="flex items-center gap-1">
                    <div class="h-2.5 w-2.5 rounded-full bg-indigo-500 me-2"></div> 
                    <span className={`text-green-500`}>75</span>
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap">Kate Steavenson</td>
              <td className="px-6 py-2 whitespace-nowrap">45,000</td>
              <td className="px-6 py-2 whitespace-nowrap">Negotations</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

