import { image } from '@/assets/image/image';
import  { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import {  useNavigate } from 'react-router-dom';



const AdminLoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate()
   
   
   

    return (
        <div>
            <div className='flex items-center justify-center border-b'>
                <img src={image.signinlogo} className='w-36 m-4' onClick={() => navigate('/')} />
            </div>
            <div className='flex justify-center items-center'>
                <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-32 bg-white rounded-lg border-solid border border-[#e9ecef]">
                    <div className="flex items-center lg:w-[540px] flex-col gap-2">
                        <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">Admin Login</span>
                        <span className="text-md font-normal text-[#6c6a6a] text-center">Enter your credentials to log in</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-col gap-2 w-full">
                            <label>Email</label>
                            <input type="email" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Password</label>
                            <div className="relative">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                    placeholder="Enter your password"
                                />
                                <span
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    className="absolute right-3 top-2 cursor-pointer text-gray-500"
                                >
                                    {isPasswordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/overview')} className="bg-primary text-center w-full py-2 text-white rounded-xl">Log In</button>
                        <p className="text-center">Forgot Your Password? <span className="text-primary underline cursor-pointer" onClick={() => navigate('/forgotPassword?role=admin')}>Click here</span></p>

                       
                    </div>
                </div>

            </div>


        </div>

    );
};

export default AdminLoginForm;
