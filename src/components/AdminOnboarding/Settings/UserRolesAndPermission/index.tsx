import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { UserRolesAndPermissionHeading } from "@/constant/setting";
import useRolesAndPermission from './useRolesAndPermission'
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";



const UserRolesAndPermission = () => {
    const [isStatusOpen, setStatusOpen] = useState(false);

    const [selectedStatus, setSelectedStatus] = useState("All");
    const statuses = ["All", "Published", "Draft", "Archived"];
    const { userRolesAndPermissionData, selectedAction, setSelectedAction, setSelectedData, getActiveClass } = useRolesAndPermission();

    const MotionTr = motion.tr;


    return (
        <div>

            <div className="flex justify-between mt-4">
                <h1 className="font-semibold text-xl">User roles <span className="text-gray-600">(4)</span></h1>
                <button className="border border-primary p-2 text-primary font-semibold rounded-lg flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99935 1.16602V12.8327M1.16602 6.99935H12.8327" stroke="#0086F2" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Create Custom role
                </button>
            </div>

            <div className="py-4 w-full ">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between">
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                                Super Admin
                            </span>
                        </div>
                        <div className="flex justify-between gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">1</span>
                                <span className="text-md text-gray-500">Account</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full p-1 text-primary">Show details</span>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33398 6H14.6673M14.6673 6L9.66732 1M14.6673 6L9.66732 11" stroke="#0086F2" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                                Content Moderator
                            </span>
                            <span className="border border-primary text-primary bg-blue-50 px-1 rounded-full">custom role</span>
                        </div>
                        <div className="flex justify-between gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">4</span>
                                <span className="text-md text-gray-500">Accounts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full p-1 text-primary">Show details</span>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33398 6H14.6673M14.6673 6L9.66732 1M14.6673 6L9.66732 11" stroke="#0086F2" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                                Customer Support
                            </span>
                            <span className="border border-primary text-primary bg-blue-50 px-1 rounded-full">custom role</span>
                        </div>
                        <div className="flex justify-between gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">6</span>
                                <span className="text-md text-gray-500">Accounts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full p-1 text-primary">Show details</span>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33398 6H14.6673M14.6673 6L9.66732 1M14.6673 6L9.66732 11" stroke="#0086F2" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[32%] items-start bg-white rounded-lg border border-gray-300 p-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base sm:text-lg text-gray-900">
                                Data Analyst
                            </span>
                            <span className="border border-primary text-primary bg-blue-50 px-1 rounded-full">custom role</span>
                        </div>
                        <div className="flex justify-between gap-2 w-full p-3 bg-gray-100 border-l-4 border-primary rounded-md">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-gray-900">4</span>
                                <span className="text-md text-gray-500">Accounts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded-full p-1 text-primary">Show details</span>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33398 6H14.6673M14.6673 6L9.66732 1M14.6673 6L9.66732 11" stroke="#0086F2" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>


                    {/* Similar responsiveness for other cards */}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <h1 className="font-semibold text-xl">User roles <span className="text-gray-600">(4)</span></h1>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0 mx-6">
                    <input
                        type="search"
                        className="border py-2 px-4 rounded-md w-full sm:w-auto"
                        placeholder="Search"
                    // Update the query when typing
                    />



                    {/* Status Dropdown */}
                    <div className="relative w-full sm:w-auto">
                        <button
                            onClick={() => setStatusOpen(!isStatusOpen)}
                            className="border-2 py-2 px-4 rounded-md text-gray-600 bg-gray-100 border-gray-300 flex items-center justify-between w-full sm:w-auto"
                        >
                            Status: {selectedStatus}
                            <span className="ml-1">▼</span>
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

                    <button className="bg-primary rounded-lg text-white p-2 flex items-center gap-2">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8327 6.33398V1.33398M13.3327 3.83398H18.3327M13.3327 15.5007V14.5007C13.3327 13.1005 13.3327 12.4005 13.0602 11.8657C12.8205 11.3953 12.4381 11.0128 11.9677 10.7731C11.4329 10.5007 10.7328 10.5007 9.33268 10.5007H5.66602C4.26588 10.5007 3.56582 10.5007 3.03104 10.7731C2.56063 11.0128 2.17818 11.3953 1.9385 11.8657C1.66602 12.4005 1.66602 13.1005 1.66602 14.5007V15.5007M10.416 4.25065C10.416 5.86148 9.11018 7.16732 7.49935 7.16732C5.88852 7.16732 4.58268 5.86148 4.58268 4.25065C4.58268 2.63982 5.88852 1.33398 7.49935 1.33398C9.11018 1.33398 10.416 2.63982 10.416 4.25065Z" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Invite user
                    </button>


                </div>
            </div>



            <div>
                  {/* Table Section */}
            <div className="mt-4 overflow-x-auto">
                <Table headers={UserRolesAndPermissionHeading} data={userRolesAndPermissionData}>
                    <>
                        {userRolesAndPermissionData
                            ? userRolesAndPermissionData.map((item: any) => (
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
                                            {item.role}
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



            </div>

        </div>
    )
}

export default UserRolesAndPermission