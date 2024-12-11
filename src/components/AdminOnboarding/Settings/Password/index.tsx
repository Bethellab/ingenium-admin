

const Password = () => {
    return (
        <div>
            <div>
            <div className='flex justify-center items-center'>
                <div className="flex justify-center w-full lg:w-[600px]  p-6 flex-col gap-6 lg:mt-12 bg-white">
                    <div className="flex justify-center">
                      <h1 className="font-semibold text-2xl">Change Password</h1>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label>Old password</label>
                            <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter old password" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>New password</label>
                            <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter new password" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Comfirm password</label>
                            <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Comfirm password" />
                        </div>

                        <button className="bg-primary text-white p-2 rounded-md w-44">Update password</button>
                    </div>


                </div>

            </div>

        </div>


        </div>
    )
}

export default Password