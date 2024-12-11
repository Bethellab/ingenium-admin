import { useState } from "react";
import { Table } from "@/components/core/Table/Table";
import { BusinessesHeading } from "@/constant/setting";
import useBusinesses from './useBusinesses'
import { Avatar } from "@/components/core/Avatar/Avatar";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Actions } from "@/components/core/Table/Actions/Actions";


const Businesses = ({ searchQuery }: { searchQuery: string }) => {

    const { BusinessesData, selectedAction, setSelectedAction, setSelectedData } = useBusinesses();

    // Filter the sellers based on the search term
    const filteredBusinesses = BusinessesData.filter(
        (business) =>
            business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            business.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

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





        </div>
    )
}

export default Businesses