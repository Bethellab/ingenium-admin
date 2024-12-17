
import { useState } from "react";
import UserTab from "./UserTab";
import {useUsers } from "./useUsers";
import { RenderIf } from "@/components/hoc";
import Individuals from "./Individuals";
import Businesses from "./Businesses";

const Users = () => {

    const { currentTab, links } = useUsers();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: string) => {
        setSearchQuery(query); // Update the search query state
    };


    return (
        <div>

            <div>
                <UserTab links={links}
                    currentTab={currentTab}
                    onSearch={handleSearch}
                    searchQuery={searchQuery} />
            </div>

            <div>
                <RenderIf condition={currentTab === "individuals"}>
                    <Individuals searchQuery={searchQuery} />
                </RenderIf>
                <RenderIf condition={currentTab === "businesses"}>
                    <Businesses searchQuery={searchQuery} />
                </RenderIf>


            </div>



        </div>
    )
}

export default Users