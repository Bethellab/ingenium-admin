import { useState } from 'react';
import { Avatar } from "@/components/core/Avatar/Avatar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Details = ({ data, active }: { data: any, active: any }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <div>
                {/* Personal Information Section with Dropdown Toggle */}
                <h1 className="bg-gray-200 p-2 rounded-md flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                    <span>Personal Information</span>
                    {isOpen ? (
                        <FaChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                        <FaChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                </h1>


                {/* Conditional rendering of the details */}
                {isOpen && (
                    <div className="border mt-4 p-4 rounded-md space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="flex-shrink-0">
                                    <Avatar image={data?.name} size="32" />
                                </div>
                                <div>
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                        {data.name}{" "}
                                        <span
                                            className={`text-sm font-normal ml-2 px-2 py-1 rounded ${active === "Active user"
                                                ? "bg-green-200 text-green-800"
                                                : "bg-green-100 text-green-800"
                                                }`}
                                        >
                                            {data.active}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                {/* Placeholder for an icon */}
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_d_5026_24330)">
                                        <rect x="2" y="1" width="36" height="36" rx="12" fill="white" />
                                        <rect x="2.5" y="1.5" width="35" height="35" rx="11.5" stroke="#D0D5DD" />
                                        <path
                                            d="M19.9993 19.834C20.4596 19.834 20.8327 19.4609 20.8327 19.0007C20.8327 18.5404 20.4596 18.1673 19.9993 18.1673C19.5391 18.1673 19.166 18.5404 19.166 19.0007C19.166 19.4609 19.5391 19.834 19.9993 19.834Z"
                                            stroke="#605E5E"
                                            strokeWidth="1.67"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.9993 14.0007C20.4596 14.0007 20.8327 13.6276 20.8327 13.1673C20.8327 12.7071 20.4596 12.334 19.9993 12.334C19.5391 12.334 19.166 12.7071 19.166 13.1673C19.166 13.6276 19.5391 14.0007 19.9993 14.0007Z"
                                            stroke="#605E5E"
                                            strokeWidth="1.67"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.9993 25.6673C20.4596 25.6673 20.8327 25.2942 20.8327 24.834C20.8327 24.3737 20.4596 24.0007 19.9993 24.0007C19.5391 24.0007 19.166 24.3737 19.166 24.834C19.166 25.2942 19.5391 25.6673 19.9993 25.6673Z"
                                            stroke="#605E5E"
                                            strokeWidth="1.67"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_5026_24330" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="1" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5026_24330" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5026_24330" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Render Email, Phone, etc. */}
                        <div className=" flex items-center gap-10 ">
                            <div className='flex flex-col space-y-4'>
                                <p className="text-gray-600">Email address:</p>
                                <p className="text-gray-600">Phone number:</p>
                                <p className="text-gray-600">Last usage:</p>
                                <p className="text-gray-600">Date:</p>

                            </div>
                            <div className='flex flex-col space-y-4 font-medium'>
                                <span className="text-gray-900">{data.email}</span>
                                <span className="text-gray-900">{data.phone}</span>
                                <span className="text-gray-900">{data.last}</span>
                                <span className="text-gray-900">{data.date}</span>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
