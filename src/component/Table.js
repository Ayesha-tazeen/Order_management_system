
import React from 'react';

function Table({ data }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-white text-gray-600">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Shipiify#</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Shipping</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Order Type</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {data.map((row, index) => (
              <tr key={index} className="bg-white text-gray-600 ">
                <td className="border-t border-gray-300 px-4 py-2"> <span className=" px-4 py-2"> <input type="checkbox" /></span>{row.id}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.shipiify}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.date}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.status}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.customer}</td>
                <td className="border-t border-gray-300  px-4 py-2">{row.email}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.country}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.shipping}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.source}</td>
                <td className="border-t border-gray-300 px-4 py-2">{row.orderType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
