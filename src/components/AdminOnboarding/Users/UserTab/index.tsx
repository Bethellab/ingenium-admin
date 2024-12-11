import { useState, ChangeEvent } from "react";
import { NavLink } from "react-router-dom";


interface LinkProps {
    name: string;
    href: string;
    number: number;
    active: string;
}
interface TabbarProps {
    links: LinkProps[];
    currentTab: string | null;
    onSearch: (query: string) => void;
    searchQuery: string;

}


const UserTab = ({ links, currentTab,  onSearch, searchQuery }: TabbarProps) => {

    const [isStatusOpen, setStatusOpen] = useState(false);

    const [selectedStatus, setSelectedStatus] = useState("All");




    const statuses = ["All", "Published", "Draft", "Archived"];

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value); // Call onSearch with the new query
    };
    return (

        <div>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center border-b ">
                <div>
                    <div className="flex items-center space-x-12  px-2 py-3  ">
                        {/* Links */}
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={`block text-2xl text-gray-600 ${link.active === currentTab
                                    ? "text-gray-900 font-semibold border-b-2 border-b-primary"
                                    : ""
                                    }   `}
                            >
                                {link.name}  <span className="text-gray-600 text-lg">({link.number})</span>
                            </NavLink>
                        ))}
                    </div>

                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0 mx-6">
                    <input
                        type="search"
                        className="border py-2 px-4 rounded-md w-full sm:w-auto"
                        placeholder="Search"
                        value={searchQuery} // Bind the search query here
                        onChange={handleSearchChange} // Update the query when typing
                    />



                    {/* Status Dropdown */}
                    <div className="relative w-full sm:w-auto">
                        <button
                            onClick={() => setStatusOpen(!isStatusOpen)}
                            className="border-2 py-2 px-4 rounded-md text-gray-600 bg-gray-100 border-gray-300 flex items-center justify-between w-full sm:w-auto"
                        >
                            Status: {selectedStatus}
                            <span className="ml-1">▼</span>
                        </button>
                        {isStatusOpen && (
                            <ul className="absolute bg-white border rounded-md mt-1 shadow-lg w-full sm:w-40 ">
                                {statuses.map((status) => (
                                    <li
                                        key={status}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedStatus(status);
                                            setStatusOpen(false);
                                        }}
                                    >
                                        {status}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                </div>
            </div>


        </div>

    )
}

export default UserTab