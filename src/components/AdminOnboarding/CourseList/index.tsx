import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { courseListHeading } from "@/constant/setting";
import useCourseList from "./useCourseList";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const categories = ["All", "Development", "Design", "Marketing", "Business"];
  const statuses = ["All", "Published", "Draft", "Archived"];

  const { courseListData, getEnrolledClass } = useCourseList();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // Filtered data based on search query
  const filteredCourses = courseListData?.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.name.toLowerCase().includes(query)

    );
  });

  const totalRows = filteredCourses.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const currentData = filteredCourses.slice(
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
    <div className="p-4 lg:p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-4">
        <h1 className="text-xl font-bold">
          All Courses{" "}
          <span className="text-lg text-gray-600 font-medium">({totalRows})</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0">
          {/* Search Input */}
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border py-2 px-4 rounded-md w-full sm:w-auto"
            placeholder="Search"
          />

          {/* Categories Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setCategoriesOpen(!isCategoriesOpen)}
              className="border-2 py-2 px-4 rounded-md gap-3 text-gray-600 bg-gray-100 border-gray-300 flex items-center justify-between w-full sm:w-auto"
            >
              Categories: {selectedCategory}
              <svg width="15" height="7" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#AEAAAB" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            {isCategoriesOpen && (
              <ul className="absolute bg-white border rounded-md mt-1 shadow-lg w-full sm:w-40">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCategoriesOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

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
              <ul className="absolute bg-white border rounded-md mt-1 shadow-lg w-full sm:w-40">
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

          <button
            onClick={() => navigate("/courses/analytics")}
            className="py-2 px-4 rounded-md text-white bg-primary w-full sm:w-auto"
          >
            Create new course
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-4 overflow-x-auto">
        <Table headers={courseListHeading} data={filteredCourses}>
          <>
            {filteredCourses
              ? filteredCourses.map((item: any) => (
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
                    <td className="text-sm bg-white border-b border-gray-200">
                      {item.chapter}
                    </td>
                    <td className="text-sm bg-white border-b border-gray-200">
                      <span
                        className={`${getEnrolledClass(
                          item.enrolled
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
                        {item.enrolled}
                      </span>
                    </td>
                    <td className="text-sm bg-white border-b border-gray-200 font-semibold">
                      {item.enrollment}
                    </td>
                    <td className="text-sm bg-white border-b border-gray-200">
                      {item.average} %
                    </td>
                    <td className="text-sm bg-white border-b border-gray-200">
                      {item.pricing}
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

    </div>
  );
};

export default CourseList;
