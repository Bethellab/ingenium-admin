import { useState } from 'react';

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Subscription = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <div>
                {/* Personal Information Section with Dropdown Toggle */}
                <h1 className="bg-gray-200 p-2 rounded-md flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                    <span>Active subscriptions</span>
                    {isOpen ? (
                        <FaChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                        <FaChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                </h1>


                {/* Conditional rendering of the details */}
                {isOpen && (
                    <div>
                        <div className="border mt-4 p-4 rounded-md space-y-6">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='text-lg font-semibold'>Money Matters</h1>
                                    <span className='bg-purple-800 text-white p-1 rounded-full text-sm px-2'>Pro plan</span>

                                </div>
                                <h1 className='text-2xl font-semibold'>$24.99</h1>
                            </div>

                            <div className='flex justify-between items-center'>
                                <h1 className=' text-gray-600'>Next billing: <span className=' text-gray-900'>Dec 12, 2023</span></h1>

                                <span className=' text-gray-600'>Billed monthly</span>

                            </div>


                        </div>
                        <div className="border mt-4 p-4 rounded-md space-y-6">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='text-lg font-semibold'>Money Matters</h1>
                                    <span className='bg-purple-800 text-white p-1 rounded-full text-sm px-2'>Pro plan</span>

                                </div>
                                <h1 className='text-2xl font-semibold'>$24.99</h1>
                            </div>

                            <div className='flex justify-between items-center'>
                                <h1 className=' text-gray-600'>Next billing: <span className=' text-gray-900'>Dec 12, 2023</span></h1>

                                <span className=' text-gray-600'>Billed monthly</span>

                            </div>


                        </div>

                    </div>

                )}
            </div>
        </div>
    );
};

export default Subscription;
