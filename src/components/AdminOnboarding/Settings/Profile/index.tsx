import { useState } from "react";
import { image } from "@/assets/image/image";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-12 bg-white">
                    <div className="flex justify-center">
                        <img src={image.profile_icon} className="w-16 h-16 rounded-full" alt="Profile" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label>First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                                className={`w-full border border-gray-300 py-2 px-2 rounded-xl ${
                                    isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
                                }`}
                                placeholder="John"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                                className={`w-full border border-gray-300 py-2 px-2 rounded-xl ${
                                    isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
                                }`}
                                placeholder="Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                readOnly={!isEditing}
                                className={`w-full border border-gray-300 py-2 px-2 rounded-xl ${
                                    isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
                                }`}
                                placeholder="johndoe@gmail.com"
                            />
                        </div>

                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="bg-primary text-white p-2 rounded-md w-44"
                        >
                            {isEditing ? "Save Profile" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
