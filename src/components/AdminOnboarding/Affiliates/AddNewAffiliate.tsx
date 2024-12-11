import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewAffiliate = () => {
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const toggleCourse = (course: string): void => {
        if (selectedCourses.includes(course)) {
            setSelectedCourses(selectedCourses.filter((c) => c !== course));
        } else {
            setSelectedCourses([...selectedCourses, course]);
        }
        setShowDropdown(!showDropdown)
    };

    const removeCourse = (course: string): void => {
        setSelectedCourses(selectedCourses.filter((c) => c !== course));
    };

    const navigate = useNavigate()

    const courses = [
        "How to make money",
        "Advanced Programming",
        "Digital Marketing",
        "Graphic Design",
        "Entrepreneurship",
    ];

    return (
        <div>
            <div className="flex justify-between items-center border-b py-2 px-4">
                <h2 className="text-md">New Affiliate</h2>

            </div>

            <div className="flex flex-col items-center justify-center mx-6 md:mx-80 lg:mx-64 mt-12 md:mt-24">
                <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
                    {/* Text Section */}
                    <div className="lg:w-1/3">
                        <p className="text-md text-gray-700">
                            Add a new affiliate using this sign-up form, and we will send them a
                            link that they can share with their public audience. Your affiliate
                            will gain a commission for every referral using the link sent to them.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-[700px] w-full">
                        <div className="flex flex-col gap-6">
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-md font-medium text-gray-800">Name</label>
                                <div className="flex items-center gap-2 w-full bg-white border border-gray-300 rounded-md px-3 py-2">
                                    <input
                                        type="text"
                                        className="flex-grow bg-transparent outline-none text-gray-700"
                                        placeholder="Enter name"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-md font-medium text-gray-800">Email</label>
                                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2">
                                    <input
                                        type="email"
                                        className="flex-grow bg-transparent outline-none text-gray-700"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-2">
                                <label className="text-md font-medium text-gray-800">Courses</label>

                                {/* Dropdown Button */}
                                <div
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="cursor-pointer flex items-center justify-between bg-white border border-gray-300 rounded-md px-3 py-2"
                                >
                                    {/* Display Selected Courses */}
                                    {selectedCourses.length > 0 ? (
                                        <div className="flex items-center flex-wrap gap-2">
                                            {selectedCourses.map((course) => (
                                                <div
                                                    key={course}
                                                    className="flex items-center bg-primary text-white px-2 py-1 rounded-md gap-1"
                                                >
                                                    <span>{course}</span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent dropdown from toggling
                                                            removeCourse(course);
                                                        }}
                                                        className="text-white w-4"
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">Choose courses</span>
                                    )}
                                    <svg
                                        className={`w-4 h-4 transform transition-transform ${showDropdown ? "rotate-180" : "rotate-0"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>

                                {/* "All Courses" Checkbox */}
                                <div className="flex items-center gap-2 mt-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedCourses([...courses]); // Select all courses
                                            } else {
                                                setSelectedCourses([]); // Deselect all courses
                                            }
                                        }}
                                        checked={selectedCourses.length === courses.length && courses.length > 0}
                                    />
                                    <span>All Courses</span>
                                </div>

                                {/* Dropdown List */}
                                {showDropdown && (
                                    <div className="absolute top-full left-0 mt-1 w-full border border-gray-300 rounded-md shadow-md bg-white z-10">
                                        {courses.map((course) => (
                                            <div
                                                key={course}
                                                className={`flex items-center px-3 py-2 hover:bg-gray-100 hover:border hover:border-primary cursor-pointer ${selectedCourses.includes(course) ? "bg-blue-100" : ""
                                                    }`}
                                                onClick={() => toggleCourse(course)}
                                                
                                            >
                                                <span
                                                    className={`text-gray-700 ${selectedCourses.includes(course)
                                                            ? "text-blue-800 font-semibold"
                                                            : ""
                                                        }`}
                                                >
                                                    {course}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>




                            {/* Affiliate Fee Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-md font-medium text-gray-800">
                                    Affiliate Fee (%)
                                </label>
                                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-3 py-2">
                                    <input
                                        type="number"
                                        className="flex-grow bg-transparent outline-none text-gray-700"
                                        placeholder="Enter fee"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                <button onClick={() => navigate('/affiliatelist')}  className=" px-2 w-32 bg-blue-600 text-white text-md font-medium py-2 rounded-md">
                                    Add affiliate
                                </button>
                                <button onClick={() => navigate('/affiliaties')} className="px-2 w-32 bg-white border border-black text-black text-md font-medium py-2 rounded-md">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddNewAffiliate