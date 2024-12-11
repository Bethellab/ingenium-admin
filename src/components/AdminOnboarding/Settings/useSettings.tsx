import { useSearchParams } from "react-router-dom";

export default function useSettings() {
  const links = [
    { name: "Profile",  href: "?tab=profile", active: "profile" },
    { name: "Password", href: "?tab=password", active: "password" },
    { name: "User roles and permission", href: "?tab=users roles and permission", active: "users roles and permission" },
  

  ];

  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return { currentTab, links };
}
