

const UserRolesAndPermission = () => {
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

        </div>
    )
}

export default UserRolesAndPermission