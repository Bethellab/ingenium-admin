import { useSearchParams } from "react-router-dom";

export default function useUsers() {
  const links = [
    { name: "Individuals", number: 220,  href: "?tab=individuals", active: "individuals" },
    { name: "Businesses", number: 44, href: "?tab=businesses", active: "businesses" },
  

  ];

  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return { currentTab, links };
}
