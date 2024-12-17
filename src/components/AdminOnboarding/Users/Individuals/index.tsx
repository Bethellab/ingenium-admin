
import { Table } from "@/components/core/Table/Table";
import { IndividualsHeading } from "@/constant/setting";
import useIndividuals from './useIndividuals'
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";
import Details from './Details'
import Courses from './Courses'
import Payment from './Payment'



const Individuals = ({ searchQuery }: { searchQuery: string }) => {
    const [activeTab, setActiveTab] = useState<"details" | "courses" | "payment">("details");

    const { IndividualData, selectedAction, selectedData, setSelectedAction, setSelectedData, getActiveClass } = useIndividuals();





    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(12);

    // Filter the sellers based on the search term
    const filteredIndividuals = IndividualData.filter(
        (individual) =>
            individual.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            individual.email.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const totalRows = filteredIndividuals.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const currentData = filteredIndividuals.slice(
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
                <Table headers={IndividualsHeading} data={filteredIndividuals}>
                    <>
                        {filteredIndividuals
                            ? filteredIndividuals.map((item: any) => (
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
                                        <td className="text-sm bg-white border-gray-200">
                                            <p className="text-gray-900">{item.name}</p>
                                        </td>
                                        <td className="text-sm bg-white border-gray-200">
                                            <p className="text-gray-900">{item.email}</p>
                                        </td>
                                        <td className="text-sm bg-white border-b border-gray-200">
                                            {item.phone}
                                        </td>
                                        <td className="text-sm bg-white border-b border-gray-200">
                                            {item.enrollment}
                                        </td>
                                        <td className="text-sm bg-white border-b border-gray-200">
                                            <span
                                                className={`${getActiveClass(
                                                    item.active
                                                )} flex items-center px-4 gap-2`}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.78581 0.333984C3.11247 0.333984 0.119141 3.32732 0.119141 7.00065C0.119141 10.674 3.11247 13.6673 6.78581 13.6673C10.4591 13.6673 13.4525 10.674 13.4525 7.00065C13.4525 3.32732 10.4591 0.333984 6.78581 0.333984ZM9.97248 5.46732L6.19247 9.24732C6.09914 9.34065 5.97247 9.39398 5.83914 9.39398C5.70581 9.39398 5.57914 9.34065 5.48581 9.24732L3.59914 7.36065C3.40581 7.16732 3.40581 6.84732 3.59914 6.65398C3.79247 6.46065 4.11247 6.46065 4.30581 6.65398L5.83914 8.18732L9.26581 4.76065C9.45914 4.56732 9.77914 4.56732 9.97248 4.76065C10.1658 4.95398 10.1658 5.26732 9.97248 5.46732Z"
                                                        fill="#16A34A"
                                                    />
                                                </svg>
                                                {item.active}
                                            </span>
                                        </td>
                                        <td className="text-sm bg-white border-b border-gray-200 font-semibold">
                                            {item.last}
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


                                <h1 className="text-2xl font-semibold">User Profile</h1>

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
                                            <Details data={selectedData} active={getActiveClass} />
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
                                </div>



                            </div>
                        </motion.div>

                    </div>




                </>


            )}





        </div>
    )
}

export default Individuals