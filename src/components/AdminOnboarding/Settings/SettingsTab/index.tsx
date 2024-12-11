
import { NavLink } from "react-router-dom";


interface LinkProps {
    name: string;
    href: string;
    active: string;
}
interface TabbarProps {
    links: LinkProps[];
    currentTab: string | null;
   

}


const SettingsTab = ({ links, currentTab }: TabbarProps) => {

   
   
    return (

        <div>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center border-b ">
                <div>
                    <div className="flex items-center space-x-8  px-2 py-3  ">
                        {/* Links */}
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={`block text-xl text-gray-600 ${link.active === currentTab
                                    ? "text-gray-900 font-semibold border-b-2 border-b-primary"
                                    : ""
                                    }   `}
                            >
                                {link.name}  
                            </NavLink>
                        ))}
                    </div>

                </div>
                
            </div>


        </div>

    )
}

export default SettingsTab