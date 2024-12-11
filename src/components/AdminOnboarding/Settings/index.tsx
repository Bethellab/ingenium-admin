import SettingsTab from "./SettingsTab"
import useSettings from "./useSettings";
import { RenderIf } from "@/components/hoc";
import Profile from './Profile'
import Password from './Password'
import UserRolesAndPermission from "./UserRolesAndPermission";


const Settings = () => {
    const { currentTab, links } = useSettings();


    return (
        <div>
            <div>
                <SettingsTab links={links}
                    currentTab={currentTab}
                />
            </div>

            <div>
                <RenderIf condition={currentTab === "profile"}>
                    <Profile />
                </RenderIf>
                <RenderIf condition={currentTab === "password"}>
                    <Password />
                </RenderIf>
                <RenderIf condition={currentTab === "users roles and permission"}>
                    <UserRolesAndPermission />
                </RenderIf>

            </div>


        </div>
    )
}


export default Settings