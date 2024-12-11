import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { IndividualsHeading } from "@/constant/setting";
import useIndividuals from './useIndividuals'
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";


const Individuals = ({ searchQuery }: { searchQuery: string }) => {

    const { IndividualData, selectedAction, setSelectedAction, setSelectedData, getActiveClass } = useIndividuals();

    // Filter the sellers based on the search term
    const filteredIndividuals = IndividualData.filter(
        (individual) =>
            individual.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            individual.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

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





        </div>
    )
}

export default Individuals