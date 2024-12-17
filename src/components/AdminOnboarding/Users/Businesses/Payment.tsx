import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PaymentRow = ({ payment }: { payment: any }) => {
    return (
        <div className="flex items-center bg-white border-t border-[#ebeef2] h-[56px]">
            <div className="w-[124px] flex items-center pl-4 pr-4">
                <span className="text-xs font-medium text-[#1c1b1c]">{payment.transactionId}</span>
            </div>
            <div className="w-[72px] flex items-center pl-4 pr-4">
                <span className="text-xs font-medium text-[#1c1b1c]">${payment.amount}</span>
            </div>
            <div className="flex-grow flex items-center pl-4 pr-4">
                <span className="text-xs font-medium text-[#1c1b1c]">{payment.pricing}</span>
            </div>
            <div className="flex-grow flex items-center pl-4 pr-4">
                <span className="text-xs font-medium text-[#1c1b1c]">{payment.method}</span>
            </div>
            <div className="flex-grow flex items-center pl-4 pr-4">
                <button className={`bg-[#f0fdf4] rounded-full px-3 py-1 flex items-center ${payment.status === 'Paid' ? 'text-[#16a34a]' : 'text-[#e11d48]'}`}>
                    <span className="text-xs font-medium">{payment.status}</span>
                </button>
            </div>
            <div className="flex-grow flex items-center pl-4 pr-4">
                <span className="text-xs font-medium text-[#1c1b1c]">{payment.date}</span>
            </div>
        </div>
    );
};

const Payment = () => {
    const [isOpen, setIsOpen] = useState(true);
    const payments = [
        {
            transactionId: '453h969292297...',
            amount: 23.99,
            pricing: 'Subscription',
            method: 'Paystack',
            status: 'Paid',
            date: '30/11/2023',
        },
        {
            transactionId: '453h969292297...',
            amount: 23.99,
            pricing: 'Subscription',
            method: 'Paystack',
            status: 'Paid',
            date: '30/11/2023',
        },
        {
            transactionId: '453h969292297...',
            amount: 23.99,
            pricing: 'Subscription',
            method: 'Paystack',
            status: 'Paid',
            date: '30/11/2023',
        },
        {
            transactionId: '453h969292297...',
            amount: 23.99,
            pricing: 'Subscription',
            method: 'Paystack',
            status: 'Paid',
            date: '30/11/2023',
        },
        {
            transactionId: '453h969292297...',
            amount: 23.99,
            pricing: 'Subscription',
            method: 'Paystack',
            status: 'Paid',
            date: '30/11/2023',
        },
        // More payment data here
    ];

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <div>
            <h1 className="bg-gray-200 p-2 rounded-md flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                <span>Recent payments</span>
                {isOpen ? (
                    <FaChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-600" />
                )}
            </h1>

            {isOpen && (
                <div className="mt-2">
                    <div className="flex flex-col items-start rounded-lg border border-[#ebeef2] overflow-hidden">
                        <div className="flex items-end bg-[rgba(235,238,242,0.4)] border-t w-full border-[#ebeef2]">
                            <div className="w-[124px] h-[40px] flex items-center pl-4 pr-24">
                                <span className="text-xs font-medium text-[#1c1b1c] whitespace-nowrap">Transaction ID</span>
                            </div>
                            <div className="w-[72px] h-[40px] flex items-center pl-4 pr-4">
                                <span className="text-xs font-medium text-[#1c1b1c]">Amount</span>
                            </div>
                            <div className="h-[40px] flex items-center pl-4 pr-4 flex-grow">
                                <span className="text-xs font-medium text-[#1c1b1c]">Pricing</span>
                            </div>
                            <div className="h-[40px] flex items-center pl-4 pr-4 flex-grow">
                                <span className="text-xs font-medium text-[#1c1b1c]">Method</span>
                            </div>
                            <div className="h-[40px] flex items-center pl-4 pr-4 flex-grow">
                                <span className="text-xs font-medium text-[#1c1b1c]">Status</span>
                            </div>
                            <div className="h-[40px] flex items-center pl-4 pr-4 flex-grow">
                                <span className="text-xs font-medium text-[#1c1b1c]">Date</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            {payments.map((payment, index) => (
                                <PaymentRow key={index} payment={payment} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
