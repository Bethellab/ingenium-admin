import { image } from "@/assets/image/image"
import { useNavigate } from "react-router-dom"


const AffiliatesTab = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-16 mx-6">
                <div className="flex items-center flex-col gap-2">
                    <img src={image.gift} alt="Teaching" />
                    <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">
                    No Affiliates Yet
                    </span>
                    <span className="text-md font-normal text-[#6c6a6a] text-center ">
                    It looks like you haven’t added any affiliates yet. Start building your network and boost your reach by adding affiliates who can help resell your courses
                    </span>
                    <button
                        className="bg-primary text-center py-2 text-white rounded-xl lg:w-96 mt-4"
                        onClick={() => navigate('/addnewaffiliate')}
                    >
                        Add new affiliate
                    </button>
                </div>
            </div>


        </div>
    )
}

export default AffiliatesTab