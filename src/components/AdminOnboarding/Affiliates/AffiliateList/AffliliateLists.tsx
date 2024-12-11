import { AiOutlineCopy, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const AffiliateLists = () => {
    return (

        <div className="flex justify-center items-center mt-12 px-4">
            <div className="flex flex-col gap-2 w-full lg:w-[1200px] mx-auto">
                <h1 className="font-semibold text-xl text-center lg:text-left">Affiliate link</h1>
                <div className="inline-block overflow-hidden rounded-lg shadow-md bg-white border w-full">
                    {/* Scrollable Table Wrapper */}
                    <div className="overflow-x-auto">
                        <table className="w-full leading-normal">
                            <thead>
                                <tr>
                                    {/* Name Column */}
                                    <th scope="col" className="px-5 py-3 text-sm lg:text-md font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                        Name/Email
                                    </th>

                                    {/* Course Column */}
                                    <th scope="col" className="px-5 py-3 text-sm lg:text-md font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                        Course
                                    </th>

                                    {/* Affiliate Fee Column */}
                                    <th scope="col" className="px-5 py-3 text-sm lg:text-md font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                        Affiliate Fee (%)
                                    </th>

                                    {/* Sales Column */}
                                    <th scope="col" className="px-5 py-3 text-sm lg:text-md font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                        Sales
                                    </th>

                                    {/* Actions Column */}
                                    <th scope="col" className="px-5 py-3 text-sm lg:text-md font-semibold text-left text-gray-800 uppercase border-b border-gray-200">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 2 */}
                                <tr className="bg-white border-b border-gray-200">
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">Jane mdith</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">
                                            How To Make The Best Financial Investment With Salaries
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md flex space-x-3">
                                        <AiOutlineCopy
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Copy clicked for Jane mdith")}
                                        />
                                        <AiOutlineEdit
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Edit clicked for Jane mdith")}
                                        />
                                        <AiOutlineDelete
                                            className="text-red-500 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Delete clicked for Jane mdith")}
                                        />
                                    </td>
                                </tr>

                                <tr className="bg-white border-b border-gray-200">
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">Jane mdith</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">
                                            How To Make The Best Financial Investment With Salaries
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md flex space-x-3">
                                        <AiOutlineCopy
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Copy clicked for Jane mdith")}
                                        />
                                        <AiOutlineEdit
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Edit clicked for Jane mdith")}
                                        />
                                        <AiOutlineDelete
                                            className="text-red-500 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Delete clicked for Jane mdith")}
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-gray-200">
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">Jane mdith</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">
                                            How To Make The Best Financial Investment With Salaries
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md flex space-x-3">
                                        <AiOutlineCopy
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Copy clicked for Jane mdith")}
                                        />
                                        <AiOutlineEdit
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Edit clicked for Jane mdith")}
                                        />
                                        <AiOutlineDelete
                                            className="text-red-500 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Delete clicked for Jane mdith")}
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-gray-200">
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">Jane mdith</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">
                                            How To Make The Best Financial Investment With Salaries
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md">
                                        <p className="text-gray-900">$800</p>
                                    </td>
                                    <td className="px-5 py-5 text-sm lg:text-md flex space-x-3">
                                        <AiOutlineCopy
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Copy clicked for Jane mdith")}
                                        />
                                        <AiOutlineEdit
                                            className="text-gray-600 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Edit clicked for Jane mdith")}
                                        />
                                        <AiOutlineDelete
                                            className="text-red-500 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-800"
                                            onClick={() => console.log("Delete clicked for Jane mdith")}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AffiliateLists