import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { BusinessesHeading } from "@/constant/setting";
import useBusinesses from './useBusinesses'
import { Avatar } from "@/components/core/Avatar/Avatar";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";
import Details from './Details'
import Courses from './Courses'
import Payment from './Payment'
import Subscription from './Subscription'


const Businesses = ({ searchQuery }: { searchQuery: string }) => {

    const [activeTab, setActiveTab] = useState<"details" | "courses" | "payment" | "subscription">("details");


    const { BusinessesData, selectedAction, selectedData, setSelectedAction, setSelectedData } = useBusinesses();




    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(12);

    // Filter the sellers based on the search term
    const filteredBusinesses = BusinessesData.filter(
        (business) =>
            business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            business.email.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const totalRows = filteredBusinesses.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const currentData = filteredBusinesses.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };


    const MotionTr = motion.tr;




    return (
        <div>

            {/* Table Section */}
            <div className="mt-4 overflow-x-auto">
                <Table headers={BusinessesHeading} data={filteredBusinesses}>
                    <>
                        {filteredBusinesses
                            ? filteredBusinesses.map((item: any) => (
                                <Fragment key={item.name}>
                                    <MotionTr
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="cc-custom-table-data-row"
                                        data-testid={item?.name}
                                    >
                                        <td>
                                            <input
                                                type="radio"
                                                className="w-4 h-4 border border-gray-100"
                                            />
                                        </td>

                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">

                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Avatar image={item?.name} size="32" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap font-semibold text-md">
                                                        {item.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm bg-white border-gray-200">
                                            <p className="text-gray-900">{item.email}</p>
                                        </td>

                                        <td className="text-sm bg-white border-b border-gray-200">
                                            {item.enrolled}
                                        </td>

                                        <td className="text-sm bg-white border-b border-gray-200 font-semibold">
                                            {item.members}
                                        </td>
                                        <td className="text-sm bg-white border-b border-gray-200 font-semibold">
                                            {item.plan}
                                        </td>


                                        <td className="text-sm bg-white border-b border-gray-200">
                                            {item.date}
                                        </td>
                                        <td>
                                            <Actions
                                                actions={item?.actions}
                                                id={item?.name}
                                                item={item}
                                            />
                                        </td>
                                    </MotionTr>
                                </Fragment>
                            ))
                            : null}
                    </>
                </Table>
            </div>

             {/****Pagination */}
      <div className="flex items-center gap-6 mt-4 justify-end">
        <div className="flex items-center gap-4 text-gray-900 font-medium">
          <h1>
            Rows per page: <span className="ml-2">{rowsPerPage}</span>
          </h1>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to page 1 when rows per page change
            }}
            className="text-sm bg-white border border-gray-300 rounded px-2 py-1"
          >
            {[5, 10, 12, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="font-medium text-gray-900">
          <h1>
            {Math.min((currentPage - 1) * rowsPerPage + 1, totalRows)} -{" "}
            {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/**** left icon */}
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? "opacity-50" : ""}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#E8F0FD" />
              <path d="M14 16L10 12L14 8" stroke="#0086F2" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>


          {/** right icon*/}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? "opacity-50" : ""}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" transform="matrix(-1 0 0 1 24 0)" fill="#E8F0FD" />
              <path d="M10 16L14 12L10 8" stroke="#0086F2" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </button>




        </div>
      </div>

            {selectedAction === "view" && (
                <>

                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                    <div>
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-lg z-50 overflow-scroll"
                        >
                            <div className="py-4 px-6 border-b flex items-center justify-between">


                                <h1 className="text-2xl font-semibold">Business Profile</h1>

                                <button
                                    className=" text-gray-500 hover:text-gray-800"
                                    onClick={() => {
                                        setSelectedAction("");
                                        setSelectedData([]);
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>

                            </div>
                            <div>
                                {/* Tabs */}
                                <div className="flex px-6 gap-10 border-b">
                                    <button
                                        className={` py-4 text-center ${activeTab === "details"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveTab("details")}
                                    >
                                        Details
                                    </button>
                                    <button
                                        className={` py-4 text-center ${activeTab === "courses"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveTab("courses")}
                                    >
                                        Courses
                                    </button>
                                    <button
                                        className={` py-4 text-center ${activeTab === "subscription"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveTab("subscription")}
                                    >
                                        Subscription
                                    </button>
                                    <button
                                        className={` py-4 text-center ${activeTab === "payment"
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveTab("payment")}
                                    >
                                        Payment
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    {activeTab === "details" && (
                                        <div>
                                            <Details data={selectedData} />
                                        </div>
                                    )}
                                    {activeTab === "courses" && (
                                        <div>
                                            <Courses />
                                        </div>
                                    )}
                                    {activeTab === "payment" && (
                                        <div>
                                            <Payment />
                                        </div>
                                    )}
                                    {activeTab === "subscription" && (
                                        <div>
                                            <Subscription />
                                        </div>
                                    )}
                                </div>



                            </div>
                        </motion.div>

                    </div>




                </>


            )}





        </div>
    )
}

export default Businesses