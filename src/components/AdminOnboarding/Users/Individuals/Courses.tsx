import { useState } from 'react';

import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const Courses = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <h1 className="bg-gray-200 p-2 rounded-md flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                <span>Courses enrolled <span className='font-semibold ml-2'>3</span></span>
                {isOpen ? (
                    <FaChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-600" />
                )}
            </h1>

            {isOpen && (
                <div>
                    <div className="border mt-4 p-4 rounded-md space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                        Money Matters
                                        <span className='bg-[#E8F0FD] text-primary py-1 px-2 rounded-full font-normal text-sm ml-5'>in progress</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Render Email, Phone, etc. */}
                        <div className=" flex items-center gap-12 ">
                            <div className='flex flex-col space-y-6'>
                                <p className="text-gray-600">Lesson:</p>
                                <p className="text-gray-600">Started:</p>
                                <p className="text-gray-600">Pricing:</p>
                               
                            </div>
                            <div className='flex flex-col space-y-6 font-medium'>
                                <span className="text-gray-900">2 of 5</span>
                                <span className="text-gray-900">30/11/2023 <span className='text-sm text-gray-600 font-normal'>(4w ago)</span></span>
                                <span className="text-gray-900">Subscription</span>
                                
                            </div>

                        </div>
                    </div>

                    <div className="border mt-4 p-4 rounded-md space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                    Fundamentals of Web Development
                                        <span className='bg-[#E8F0FD] text-primary py-1 px-2 rounded-full font-normal text-sm ml-5'>in progress</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Render Email, Phone, etc. */}
                        <div className=" flex items-center gap-12 ">
                            <div className='flex flex-col space-y-6'>
                                <p className="text-gray-600">Lesson:</p>
                                <p className="text-gray-600">Started:</p>
                                <p className="text-gray-600">Pricing:</p>
                               
                            </div>
                            <div className='flex flex-col space-y-6 font-medium'>
                                <span className="text-gray-900">2 of 5</span>
                                <span className="text-gray-900">30/11/2023 <span className='text-sm text-gray-600 font-normal'>(4w ago)</span></span>
                                <span className="text-gray-900">Subscription</span>
                                
                            </div>

                        </div>
                    </div>

                    <div className="border mt-4 p-4 rounded-md space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                    Exploring the World of Digital Art
                                        <span className='bg-[#F0FDF4] text-[#16A34A] py-1 px-2 rounded-full font-normal text-sm ml-5'>completed</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Render Email, Phone, etc. */}
                        <div className=" flex items-center gap-12 ">
                            <div className='flex flex-col space-y-6'>
                                <p className="text-gray-600">Lesson:</p>
                                <p className="text-gray-600">Started:</p>
                                <p className="text-gray-600">Pricing:</p>
                               
                            </div>
                            <div className='flex flex-col space-y-6 font-medium'>
                                <span className="text-gray-900">12 of 12</span>
                                <span className="text-gray-900">30/11/2023 <span className='text-sm text-gray-600 font-normal'>(4w ago)</span></span>
                                <span className="text-gray-900">Free</span>
                                
                            </div>

                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Courses