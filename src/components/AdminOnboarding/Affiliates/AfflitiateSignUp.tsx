import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AffiliateSignUp = () => {
    const [courses, setCourses] = useState([
        { id: 1, title: 'How To Make The Best Financial Investment With Salaries', enabled: false },
        { id: 2, title: 'How To Plan Your Budget Like A Pro', enabled: false },
        { id: 3, title: 'How To Save More Effectively', enabled: false },
        { id: 4, title: 'Understanding Taxes and Deductions', enabled: false },
    ]);

     // Toggle the enabled state for a specific course
     const handleToggle = (id: number) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === id ? { ...course, enabled: !course.enabled } : course
            )
        );
    };

    const navigate = useNavigate()


    return (
        <div className=" lg:mx-48 mt-12 flex justify-center items-center flex-col">
            {/* Affiliate Link Section */}
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-36  w-full mb-8">
                <div className="lg:w-1/3 w-full mb-4 lg:mb-0">
                    <h2 className="text-2xl font-semibold">Affiliate Link</h2>
                    <p className="text-md text-gray-600">Anyone can become your affiliate by using this link. Affiliates would earn a commission on every sale through referrals.</p>
                </div>
                <div className="lg:w-1/3 w-full">
                    <h2 className="text-md mb-2">Your Affiliate Link</h2>
                    <div className="flex items-center gap-2 w-full bg-white border border-gray-300 rounded-md px-3 py-2">
                        https://copy32this9linksyay
                    </div>
                </div>
            </div>

            {/* Affiliate Link Section */}
            <div className="flex  flex-col lg:flex-row items-start gap-4 lg:gap-52  w-full mb-8 mt-10">
                <div className="lg:w-1/3 w-full mb-4 lg:mb-0">
                    <h2 className="text-2xl font-semibold">Affiliate Link</h2>
                    <p className="text-md text-gray-600">Anyone can become your affiliate by using this link. Affiliates would earn a commission on every sale through referrals.</p>
                </div>
                <div className="lg:w-2/3 w-full">
                    <div className="py-8">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-sm bg-white border">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase  border-b border-gray-200">
                                                Enable
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                                Courses
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase  border-b border-gray-200">
                                                Affiliate Fee (%)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.map((course, index) => (
                                            <tr key={index} className="bg-white border-b border-gray-200">
                                                {/* Enable Column */}
                                                <td className="px-5 py-5 text-sm flex justify-center items-center">
                                                    {course.enabled ? (
                                                        <MdToggleOn
                                                            className="text-[#8149FB] text-2xl w-12 h-12 cursor-pointer"
                                                            onClick={() => handleToggle(course.id)}
                                                        />
                                                    ) : (
                                                        <MdToggleOff
                                                            className="text-gray-500 text-2xl w-12 h-12 cursor-pointer"
                                                            onClick={() => handleToggle(course.id)}
                                                        />
                                                    )}
                                                </td>

                                                {/* Courses Column */}
                                                <td className="px-5 py-5 text-sm">
                                                    <p className="text-gray-900">{course.title}</p>
                                                </td>

                                                {/* Affiliate Fee Column */}
                                                <td className="px-5 py-5 text-sm">
                                                    <input
                                                        type="number"
                                                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-md"
                                                        placeholder="Enter fee"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                         {/* Buttons */}
                         <div className="flex items-center gap-4 mt-4">
                                <button onClick={() => navigate('/affiliatelist')} className=" px-2 w-32 bg-blue-600 text-white text-md font-medium py-2 rounded-md">
                                    Save changes
                                </button>
                                <button onClick={() => navigate('/affiliaties')}  className="px-2 w-32 bg-white border border-black text-black text-md font-medium py-2 rounded-md">
                                    Cancel
                                </button>
                            </div>


                    </div>

                </div>
            </div>

           
        </div>

    );
};

export default AffiliateSignUp;
