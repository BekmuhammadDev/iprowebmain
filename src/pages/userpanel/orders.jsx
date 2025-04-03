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
        <div className="p-10 relative z-50">
            <h2 className="text-3xl font-semibold mb-11">Shopping Cart</h2>

            {/* Scrollable container */}
            <div className="max-h-[450px] overflow-y-auto space-y-4 pr-2">
                {orderList.map((order) => (
                    <div key={order.id} className="w-full h-[194px] bg-[#252527] px-[27px] py-[43px]">
                        <h1 className="text-2xl font-semibold text-center mb-3">{order.title}</h1>
                        <p className="text-base font-normal text-center">{order.description}</p>
                    </div>
                ))}
            </div>

            {/* "Make an order" Button */}
            <button
                className="bg-[#0186EF] rounded-lg px-[97px] py-4 mt-5"
                onClick={() => setIsOpen(true)}
            >
                Make an order
            </button>

            {/* Sliding Sidebar (Order Form) */}
            <div className={`fixed top-0 right-0 w-[748px] h-full bg-[#292d32] py-[55px] px-[51px] shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Close Icon */}
                <button className="text-white text-xl font-bold mb-4" onClick={() => setIsOpen(false)}></button>

                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold text-white mb-6">Request form</h2>
                    <button className="text-4xl" onClick={() => setIsOpen(false)}><IoClose /></button>
                </div>

                {/* Form Inputs */}
                <div>

                    <form action="#" className="grid grid-cols-2 gap-10 mb-3">
                        <label>
                            <h1 className="mb-2">*Full name</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <h1 className="mb-2">*Company name</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <h1 className="mb-2">*Phone</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <h1 className="mb-2">*Service type</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <h1 className="mb-2">*Deadline (in a month)</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <h1 className="mb-2">*Proposed amount (in dollars)</h1>
                            <input
                                type="text"
                                className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                                autoComplete="off"
                            />
                        </label>

                    </form>
                    <label htmlFor="#">
                        <h1>*Other description</h1>
                        <textarea className=" resize-none h-[232px] w-full p-3 mb-3 bg-gray-700 rounded-md"></textarea>
                    </label>

                    {/* Buttons */}
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 py-3 w-full px-6 rounded-md text-white">Make an order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
