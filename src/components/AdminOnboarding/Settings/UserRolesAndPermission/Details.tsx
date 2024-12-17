
import { Avatar } from "@/components/core/Avatar/Avatar";
import PermissionManager from './Permission'

const Details = ({ data, active }: { data: any, active: any }) => {


    return (
        <div>
            <div>




                <div className="border mt-4 p-4 rounded-md space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="flex-shrink-0">
                                <Avatar image={data?.name} size="32" />
                            </div>
                            <div>
                                <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                    {data.name}{" "}

                                </p>
                            </div>
                        </div>
                        <div>
                            <span
                                className={`text-sm font-normal ml-2 px-2 py-1 rounded ${active === "Active user"
                                    ? "bg-green-200 text-green-800"
                                    : "bg-green-100 text-green-800"
                                    }`}
                            >
                                {data.active}
                            </span>

                        </div>
                    </div>

                    {/* Render Email, Phone, etc. */}
                    <div className=" flex items-center gap-10 ">
                        <div className='flex flex-col space-y-4'>
                            <p className="text-gray-600">Email address:</p>
                            <p className="text-gray-600">Assigned role:</p>
                            <p className="text-gray-600">Last usage:</p>
                            <p className="text-gray-600">Date:</p>

                        </div>
                        <div className='flex flex-col space-y-4 font-medium'>
                            <span className="text-gray-900">{data.email}</span>
                            <span className="text-gray-900">{data.role}</span>
                            <span className="text-gray-900">{data.last}</span>
                            <span className="text-gray-900">{data.date}</span>
                        </div>

                    </div>


                </div>

                <div className="py-8">
                    <h1 className="text-xl font-semibold mb-4">Permissions</h1>
                    <PermissionManager />
                </div>


                {/* Fixed button at the bottom */}
                <div className="fixed bottom-0 w-[570px] bg-white border-t py-4 flex gap-6 items-center">
                    <button className="border-red-600 border text-red-600 p-2 rounded-lg w-full">
                        Delete user
                    </button>

                    <button className="bg-primary text-white p-2 rounded-lg w-full">
                        Deactivate
                    </button>



                </div>

            </div>
        </div>
    );
};

export default Details;
