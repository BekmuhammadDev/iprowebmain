import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const orderList = [
  { id: 1, title: "Ux&UI dizayn", description: "Loyiha Mindmapini ishlab chiqish va ushbu arxetektura asosida optimal yechimga ega dizaynlarni chizish" },
  { id: 2, title: "Frontend Development", description: "React va Vue orqali mukammal UI yaratish va interaktiv sahifalar yaratish" },
  { id: 3, title: "Backend Development", description: "Node.js va Django orqali server tomonida ishlovchi tizimlarni yaratish" },
  { id: 4, title: "Mobile App Development", description: "React Native va Flutter orqali mobil ilovalar yaratish" },
  { id: 5, title: "SEO Optimization", description: "Web-saytlarni Google va boshqa qidiruv tizimlarida optimallashtirish" }
];

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 sm:p-10 relative z-50">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-11">Shopping Cart</h2>

      {/* Scrollable container */}
      <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
        {orderList.map((order) => (
          <div key={order.id} className="w-full h-[194px] bg-[#252527] px-6 py-6">
            <h1 className="text-lg sm:text-2xl font-semibold text-center mb-3">{order.title}</h1>
            <p className="text-sm sm:text-base font-normal text-center">{order.description}</p>
          </div>
        ))}
      </div>

      {/* "Make an order" Button */}
      <button
        className="bg-[#0186EF] rounded-lg w-full sm:w-auto px-10 py-4 mt-6 text-white"
        onClick={() => setIsOpen(true)}
      >
        Make an order
      </button>

      {/* Sliding Sidebar (Order Form) */}
      <div className={`fixed top-0 right-0 w-full max-w-[748px] h-full bg-[#292d32] py-[25px] px-6 sm:px-[51px] shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Request form</h2>
          <button className="text-white text-3xl" onClick={() => setIsOpen(false)}><IoClose /></button>
        </div>

        {/* Form */}
        <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">

          {/* Company name */}
          <label className="flex flex-col gap-2">
            <span>*Company name</span>
            <input type="text" className="p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" autoComplete="off" />
          </label>

          {/* Service type */}
          <label className="flex flex-col gap-2">
            <span>*Service type</span>
            <input type="text" className="p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" autoComplete="off" />
          </label>

          {/* Deadline */}
          <label className="flex flex-col gap-2">
            <span>*Deadline (in a month)</span>
            <input type="text" className="p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" autoComplete="off" />
          </label>

          {/* Proposed amount */}
          <label className="flex flex-col gap-2">
            <span>*Proposed amount (in dollars)</span>
            <input type="text" className="p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" autoComplete="off" />
          </label>

          {/* Link for example */}
          <label className="flex flex-col gap-2 sm:col-span-2">
            <span>Link for example</span>
            <input type="text" className="p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" autoComplete="off" />
          </label>

          {/* Description */}
          <label className="flex flex-col gap-2 sm:col-span-2">
            <span>*Other description</span>
            <textarea className="h-[232px] resize-none p-3 bg-[#3A3F47] rounded-md text-white outline-none w-full" />
          </label>
        </form>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition w-full py-3 rounded-md text-white text-lg font-semibold">
            Make an order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
