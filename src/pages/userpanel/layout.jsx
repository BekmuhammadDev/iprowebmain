import React, { useState } from "react";
import { requests as mockRequests } from "../../mocks/mock";

const Request = () => {
  const [requests, setRequests] = useState(mockRequests);
  const [tempRequests, setTempRequests] = useState([...mockRequests]);

  const getCurrentTime = () => {
    return new Date().toLocaleString("en-GB", { 
      year: "numeric", 
      month: "2-digit", 
      day: "2-digit", 
      hour: "2-digit", 
      minute: "2-digit", 
      second: "2-digit",
      hour12: false, // 24 soat formatida chiqishi uchun
    });
  };
  

  // Statusni o'zgartirish
  const handleStatusChange = (index, newStatus) => {
    const updatedRequests = [...tempRequests];
    updatedRequests[index].status = newStatus;
    updatedRequests[index].updated = getCurrentTime();
    setTempRequests(updatedRequests);
  };

  // Cashbackni o'zgartirish
  const handleCashbackChange = (index, newCashback) => {
    const updatedRequests = [...tempRequests];
    updatedRequests[index].cashback = newCashback;
    updatedRequests[index].updated = getCurrentTime();
    setTempRequests(updatedRequests);
  };

  // O'zgarishlarni tasdiqlash
  const handleConfirmChanges = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index] = { ...tempRequests[index] };
    setRequests(updatedRequests);
    setTempRequests(updatedRequests);
  };

  // Requestni o‘chirish
  const handleDeleteRequest = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
    setTempRequests(updatedRequests);
  };

  return (
    <div className="p-5">
      <div className="mt-6 p-4 rounded-lg flex justify-between">
        <h2 className="text-3xl font-normal">Requests Table</h2>
      </div>

      {/* Table */}
      <div className="mt-4 bg-[#292d32] relative px-4 rounded-lg z-50 shadow-lg">
        <div className="max-h-[537px] overflow-y-auto">
          <table className="w-full">
            <thead className="border-b border-white sticky top-0 bg-[#292d32] z-10">
              <tr>
                <th className="p-4 text-left">Number request</th>
                <th className="p-4 text-left">Topic</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Last updated</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Cashback</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tempRequests.map((req, index) => (
                <tr key={index} className="border-b-2 border-gray-600">
                  <td className="p-4">{req.id}</td>
                  <td className="p-4">{req.topic}</td>
                  <td className="p-4">{req.date}</td>
                  <td className="p-4">{req.updated}</td>
                  <td className="p-4">
                    <select
                      value={req.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      className={`p-2 bg-gray-700 rounded-md focus:outline-none ${
                        req.status === "Pending" ? "text-yellow-400" :
                        req.status === "Accepted" ? "text-green-500" :
                        "text-red-600"
                      }`}
                    >
                      <option value="Pending" className="bg-gray-700 text-yellow-400">Pending</option>
                      <option value="Accepted" className="bg-gray-700 text-green-500">Accepted</option>
                      <option value="Rejected" className="bg-gray-700 text-red-600">Rejected</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={req.cashback}
                      onChange={(e) => handleCashbackChange(index, e.target.value)}
                      className="p-2 w-20 bg-gray-700 rounded-md"
                    />
                    $
                  </td>
                  <td className="p-4 flex gap-2">
                    <button 
                      className="px-2 py-1 bg-green-500 rounded-md text-white"
                      onClick={() => handleConfirmChanges(index)}
                    >
                      Confirm
                    </button>
                    <button 
                      className="px-2 py-1 bg-red-500 rounded-md text-white"
                      onClick={() => handleDeleteRequest(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Request;