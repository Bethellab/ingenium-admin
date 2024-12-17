import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { EarningsHeading } from "@/constant/setting";
import useEarnings from "./UseEarnings";
import { motion } from "framer-motion";
import { Fragment } from "react";


const Earning = () => {


    const [isStatusOpen, setStatusOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const [selectedStatus, setSelectedStatus] = useState("All");
    const statuses = ["All", "Published", "Draft", "Archived"];
    const { EarningsData, getActiveClass } = useEarnings();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(12);


    // Filtered and Paginated Data
    const filteredEarning = EarningsData?.filter((earn) => {
        const query = searchQuery.toLowerCase();
        return earn.name.toLowerCase().includes(query);
    });
    const totalRows = filteredEarning.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const currentData = filteredEarning.slice(
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


            <div className="py-4 w-full ">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between">
                    <div className="container mx-auto my-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        {/* Header Section */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-800">Total Earnings</span>
                            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-lg border border-gray-300">
                                <span className="text-sm text-gray-600">Monthly</span>
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        {/* Earnings Section */}
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">Total Count</span>
                            <div className="flex items-center mt-2">
                                <span className="text-2xl font-bold text-gray-900">₦ 830,576</span>
                                <span className="ml-2 text-sm text-gray-500">(+45% this month)</span>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto my-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-800">Subscriptions</span>
                            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-lg border border-gray-300">
                                <span className="text-sm text-gray-600">Monthly</span>
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-24 mt-4">
                            {/* Total Count */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Total Count</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-gray-900">190</span>
                                    <span className="text-sm text-gray-400">(+24 this month)</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-12 bg-gray-200" />

                            {/* New Subscriptions */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">New Subs</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-gray-900">10</span>
                                    <span className="text-sm text-gray-400">(-4 this month)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto my-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-800">Courses</span>
                            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-lg border border-gray-300">
                                <span className="text-sm text-gray-600">Monthly</span>
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-24 mt-4">
                            {/* Total Count */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Total Count</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-gray-900">250</span>
                                    <span className="text-sm text-gray-400">(+24 this month)</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-12 bg-gray-200" />

                            {/* New Subscriptions */}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Completion rate</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-gray-900">59.5%</span>
                                    <span className="text-sm text-gray-400">(-4 this month)</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Similar responsiveness for other cards */}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <h1 className="font-semibold text-xl">Transactions logs <span className="text-gray-500">({totalRows})</span></h1>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0 mx-6">
                    <input
                        type="search"
                        className="border py-2 px-4 rounded-md w-full sm:w-auto"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />



                    {/* Status Dropdown */}
                    <div className="relative w-full sm:w-auto">
                        <button
                            onClick={() => setStatusOpen(!isStatusOpen)}
                            className="border-2 py-2 px-4 rounded-md gap-3 text-gray-600 bg-gray-100 border-gray-300 flex items-center justify-between w-full sm:w-auto"
                        >
                            Status: {selectedStatus}
                            <svg width="15" height="7" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#AEAAAB" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        {isStatusOpen && (
                            <ul className="absolute bg-white border rounded-md mt-1 shadow-lg w-full sm:w-40 ">
                                {statuses.map((status) => (
                                    <li
                                        key={status}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedStatus(status);
                                            setStatusOpen(false);
                                        }}
                                    >
                                        {status}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Status Dropdown */}
                    <div className="relative w-full sm:w-auto">
                        <button

                            className="border-2 py-2 px-4 rounded-md gap-3 text-gray-600 bg-gray-100 border-gray-300 flex items-center justify-between w-full sm:w-auto"
                        >
                            Date: All
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.75 7.5H1.25M11 1.5V4.5M5 1.5V4.5M4.85 16.5H11.15C12.4101 16.5 13.0402 16.5 13.5215 16.2548C13.9448 16.039 14.289 15.6948 14.5048 15.2715C14.75 14.7902 14.75 14.1601 14.75 12.9V6.6C14.75 5.33988 14.75 4.70982 14.5048 4.22852C14.289 3.80516 13.9448 3.46095 13.5215 3.24524C13.0402 3 12.4101 3 11.15 3H4.85C3.58988 3 2.95982 3 2.47852 3.24524C2.05516 3.46095 1.71095 3.80516 1.49524 4.22852C1.25 4.70982 1.25 5.33988 1.25 6.6V12.9C1.25 14.1601 1.25 14.7902 1.49524 15.2715C1.71095 15.6948 2.05516 16.039 2.47852 16.2548C2.95982 16.5 3.58988 16.5 4.85 16.5Z" stroke="#AEAAAB" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                    </div>




                </div>
            </div>



            <div>
                {/* Table Section */}
                <div className="mt-4 overflow-x-auto">
                    <Table headers={EarningsHeading} data={currentData}>
                        <>
                            {currentData
                                ? currentData.map((item: any) => (
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
                                                <p className="text-gray-900">{item.id}</p>
                                            </td>
                                            <td className="text-sm bg-white border-gray-200">
                                                <p className="text-gray-900">{item.name}</p>
                                            </td>
                                            <td className="text-sm bg-white border-b border-gray-200">
                                                {item.email}
                                            </td>
                                            <td className="text-sm bg-white border-b border-gray-200">
                                                {item.plan}
                                            </td>
                                            <td className="text-sm bg-white border-b border-gray-200">
                                                {item.method}
                                            </td>


                                            <td className="text-sm bg-white border-b border-gray-200">
                                                <span
                                                    className={`${getActiveClass(
                                                        item.status
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
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="text-sm bg-white border-b border-gray-200 font-semibold">
                                                {item.date}
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



            </div>







        </div>
    )
}

export default Earning