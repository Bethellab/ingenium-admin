import { Link } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Analytics = () => {

    const [sortByDropdownOpen, setSortByDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setSortByDropdownOpen((prevState) => !prevState);
    };

    const [sortByDropdownOpen2, setSortByDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setSortByDropdownOpen2((prevState) => !prevState);
    };

   


    return (
        <div className="">

            <div className="flex flex-col lg:flex-row justify-between items-center border-b py-3 mx-6">
                {/* Breadcrumb */}
                <nav className="text-sm sm:text-lg text-gray-600   py-2">
                    <Link to="/courses" className="">
                        Courses
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <Link to="/home">
                        Money Matter
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="font-semibold">Details</span>
                </nav>

                <div className="gap-3 flex items-center">
                <button className="bg-primary text-white rounded-md px-2 py-2 whitespace-nowrap" >Edit Course</button>
                <button className="bg-transparent text-gray-600 border-2 border-gray-300 rounded-md px-2 py-2 whitespace-nowrap" >Deactivate</button>
                <button className="bg-transparent text-red-600 border-2 border-red-600 rounded-md px-2 py-2 whitespace-nowrap"  >Delete</button>

                </div>

            

               

            </div>


            {/* Cards Section */}
            <div className="py-4 w-full ">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-2 justify-between">
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                            Total enrollment
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">20</span>
                                <span className="text-md text-gray-500">Users</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                            Total completions
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">4</span>
                                <span className="text-md text-gray-500">Users</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                            Average completion
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">73</span>
                                <span className="text-md text-gray-500">%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                            Average quiz grade
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">24.35</span>
                                <span className="text-md text-gray-500">%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                            Chat forum
                            </span>
                        </div>
                        <div className="flex justify-between gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">120</span>
                                <span className="text-md text-gray-500">messages</span>
                            </div>
                            <button className="bg-primary rounded-full p-1 text-white">Open chat</button>
                        </div>
                    </div>
                    {/* Similar responsiveness for other cards */}
                </div>
            </div>

            {/* Completed Lessons Section */}
            <div className="py-4 w-full">
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col gap-4 w-full lg:w-[50%]">
                        <div className="flex flex-col md:flex-row justify-between lg:items-center w-full">
                            <span className="text-2xl font-semibold text-[#262626] tracking-[-0.2px]">
                                Completed lessons
                            </span>

                            <div className="relative flex items-center">
                                <span>Sort by:</span>
                                <button
                                    className="flex items-center gap-2 border border-[#b6b4b5] rounded-lg px-3 py-1 text-sm"
                                    onClick={toggleDropdown}
                                >
                                    <span className="text-[12px] text-[#6d7380]">
                                        Completions descending
                                    </span>
                                    <FaChevronDown className="text-[#6d7380]" />
                                </button>

                                {sortByDropdownOpen && (
                                    <div className="absolute right-0 mt-64 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Completions ascending");
                                                    setSortByDropdownOpen(false);
                                                }}
                                            >
                                                Completions ascending
                                            </li>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Completions descending");
                                                    setSortByDropdownOpen(false);
                                                }}
                                            >
                                                Completions descending
                                            </li>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Date");
                                                    setSortByDropdownOpen(false);
                                                }}
                                            >
                                                Date
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="flex flex-col border border-[#e9e9e9] rounded-lg">
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="w-full md:w-1/2">
                                    <div className="py-4 px-4">
                                        <span className="text-lg font-medium text-[#231f20]">
                                            Lesson
                                        </span>
                                    </div>
                                    {["Financial Basics", "Investing 101", "Building Wealth", "Quiz #1"].map((lesson, index) => (
                                        <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                            <span className="text-md text-[#6c6a6a]">{lesson}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="py-4 px-4">
                                        <span className="text-lg font-medium text-[#231f20]">
                                            Completions
                                        </span>
                                    </div>
                                    {["12", "12", "6", "5"].map((completion, index) => (
                                        <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                            <span className="text-md text-[#6c6a6a]">{completion}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full lg:w-[48%]">
                        <div className="flex flex-col md:flex-row justify-between lg:items-center w-full">
                            <span className="text-2xl font-semibold text-[#262626] tracking-[-0.2px]">
                                Assessement Questions
                            </span>
                            <div className="relative flex items-center">
                                <span>Sort by:</span>
                                <button
                                    className="flex items-center gap-2 border border-[#b6b4b5] rounded-lg px-3 py-1 text-sm"
                                    onClick={toggleDropdown2}
                                >
                                    <span className="text-[12px] text-[#6d7380]">
                                        Completions descending
                                    </span>
                                    <FaChevronDown className="text-[#6d7380]" />
                                </button>

                                {sortByDropdownOpen2 && (
                                    <div className="absolute right-0 mt-64 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Completions ascending");
                                                    setSortByDropdownOpen2(false);
                                                }}
                                            >
                                                Completions ascending
                                            </li>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Completions descending");
                                                    setSortByDropdownOpen2(false);
                                                }}
                                            >
                                                Completions descending
                                            </li>
                                            <li
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    console.log("Sort by Date");
                                                    setSortByDropdownOpen2(false);
                                                }}
                                            >
                                                Date
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full border border-[#e9e9e9] rounded-lg">
                            {/* Lessons Column */}
                            <div className="flex flex-col w-1/2 border-t">
                                <div className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-lg font-medium text-[#231f20]">Lesson</span>
                                </div>
                                {["Quiz #1", "Quiz #1", "Quiz #1", "Quiz #1"].map((lesson, index) => (
                                    <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                        <span className="text-md text-[#6c6a6a]">{lesson}</span>
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-col w-[700px] border-t">
                                <div className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-lg font-medium text-[#231f20]">Question text</span>
                                </div>
                                {["What is compound interest?", "Which of the following is a characteristic of…", "What is compound interest?", "Which of the following is a characteristic of…"].map((completion, index) => (
                                    <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                        <span className="text-md text-[#6c6a6a]">{completion}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col w-1/2 border-t">
                                <div className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-lg font-medium text-[#231f20]">Average Score</span>
                                </div>
                                {["86.36%", "34.09%", "86.36%", "34.09%"].map((completion, index) => (
                                    <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                        <span className="text-md text-[#6c6a6a]">{completion}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col gap-4 w-full mt-6">
                    <div className="flex flex-col gap-4 w-full items-start mx-auto my-0">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-semibold text-[#262626] tracking-[-0.2px]">
                                Top Students
                            </span>
                        </div>

                    </div>

                    <div className="flex w-full border border-[#e9e9e9] rounded-lg mt-2">
                        {/* Lessons Column */}
                        <div className="flex flex-col w-1/2 border-t">
                            <div className="py-4 px-4 border-t border-[#eeeeee]">
                                <span className="text-lg font-medium text-[#231f20]">Users</span>
                            </div>
                            {["Adeloba Joshua", "Albert Flores", "Jerome Bell", "Ralph Edwards", "Adeloba Joshua", "Albert Flores", "Jerome Bell", "Ralph Edwards"].map((lesson, index) => (
                                <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-md text-[#6c6a6a]">{lesson}</span>
                                </div>
                            ))}
                        </div>

                        {/* Completions Column */}
                        <div className="flex flex-col w-1/2 border-t">
                            <div className="py-4 px-4 border-t border-[#eeeeee]">
                                <span className="text-lg font-medium text-[#231f20]">Completed lessons</span>
                            </div>
                            {["12", "10", "10", "13", "12", "10", "10", "13"].map((completion, index) => (
                                <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-md text-[#6c6a6a]">{completion}</span>
                                </div>
                            ))}
                        </div>
                        {/* Completions Column */}
                        <div className="flex flex-col w-1/2 border-t">
                            <div className="py-4 px-4 border-t border-[#eeeeee]">
                                <span className="text-lg font-medium text-[#231f20]">Completion Percent</span>
                            </div>
                            {["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"].map((completion, index) => (
                                <div key={index} className="py-4 px-4 border-t border-[#eeeeee]">
                                    <span className="text-md text-[#6c6a6a]">{completion}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Similar changes for other sections */}
        </div>

    )
}

export default Analytics


