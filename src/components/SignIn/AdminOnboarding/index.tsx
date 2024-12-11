import { image } from "@/assets/image/image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from 'react-icons/hi';

const AdminOnboarding = () => {
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    // Password validation regex
    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;

        if (isLongEnough && hasUpperCase && hasNumber && hasSpecialChar) {
            setPasswordStrength('strong');
        } else if (isLongEnough && (hasUpperCase || hasNumber || hasSpecialChar)) {
            setPasswordStrength('medium');
        } else {
            setPasswordStrength('weak');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsTyping(newPassword.length > 0);  // Mark typing as true only if password is not empty
        validatePassword(newPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(newConfirmPassword === password);  // Check if passwords match
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!passwordMatch) {
            alert("Passwords do not match!");
            return;
        }

        navigate('/home')

        // Form submission logic goes here
    };

    return (
        <div>
            <div className='flex items-center justify-center border-b'>
                <img src={image.signinlogo} className='w-36 m-4' onClick={() => navigate('/')} />
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <form className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-24 bg-white rounded-lg border-solid border border-[#e9ecef]" onSubmit={handleSubmit}>
                        <div className="flex items-center lg:w-[540px] flex-col gap-2">
                            <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">Create Password</span>
                            <span className="text-md font-normal text-[#6c6a6a] text-center">Fill the details below to create your account</span>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-4 items-start">
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Choose a password</label>
                                    <div className="relative">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span
                                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                            className="absolute right-3 top-2 cursor-pointer text-gray-500"
                                        >
                                            {isPasswordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                        </span>
                                    </div>

                                    {/* Password Strength Indicator */}
                                    {isTyping && (
                                        <div className="w-full h-2 mt-2 bg-gray-300 rounded">
                                            <div
                                                className={`h-full rounded transition-all duration-300 ${passwordStrength === 'strong'
                                                    ? 'bg-green-500'
                                                    : passwordStrength === 'medium'
                                                        ? 'bg-yellow-500'
                                                        : 'bg-red-500'
                                                    }`}
                                                style={{
                                                    width:
                                                        passwordStrength === 'strong'
                                                            ? '100%'
                                                            : passwordStrength === 'medium'
                                                                ? '60%'
                                                                : '30%',
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                    {/* Display instructions and strength indicator only after typing */}
                                    {isTyping && (
                                        <div className="text-md text-gray-600 mt-2">
                                            <p>Your password must contain:</p>
                                            <ul>
                                                <li className={password.length >= 8 ? 'text-green-500' : 'text-red-500'}>
                                                    Minimum 8 characters
                                                </li>
                                                <li className={/[A-Z]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                                    At least one uppercase letter
                                                </li>
                                                <li className={/\d/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                                    At least one number
                                                </li>
                                                <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-500' : 'text-red-500'}>
                                                    At least one symbol
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password Field */}
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`w-full border py-2 px-2 rounded-xl ${!passwordMatch ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        required
                                    />
                                    {!passwordMatch && (
                                        <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-primary text-center w-full py-2 text-white rounded-xl"
                                disabled={!passwordMatch}
                            >
                                Create Password
                            </button>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminOnboarding;
