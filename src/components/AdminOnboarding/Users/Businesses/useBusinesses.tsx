import { Icon } from "@iconify/react";
import { useState } from "react";


export default function useBusinesses() {
  const [selectedData, setSelectedData] = useState<any>([]);
  const [selectedAction, setSelectedAction] = useState("");

  const BusinessesData = [
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },

    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },

    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },

    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },

    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },

    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },
    {
      name: "BG Koncepts",
      email: "admin@bgkon.co",
      enrolled: 15,
      members: 24,
      plan: "Pro Plan",
      date: "30/11/2024",
      actions: [],
    },







  ];



  const getActions = () => {
    {

      return [
        {
          name: <p className="">View </p>,
          icon: (
            <Icon
              icon="ph:lock-simple"
              className="w-[18px] h-[18px] mr-[10px]"
            />
          ),
          method: (item: any) => {
            setSelectedData(item);
            setSelectedAction("view");
          },
        },

        {
          name: <p className="">Edit</p>,
          icon: (
            <Icon
              icon="ph:lock-edit"
              className="w-[18px] h-[18px] mr-[10px]"
            />
          ),
          method: (item: any) => {
            setSelectedData(item);
            setSelectedAction("ban-user");
          },
        },
        {
          name: <p className="">Deactivate</p>,
          icon: (
            <Icon
              icon="ph:lock-simple"
              className="w-[18px] h-[18px] mr-[10px]"
            />
          ),
          method: (item: any) => {
            setSelectedData(item);
            setSelectedAction("deactivate");
          },
        },

        {
          name: <p className="">Delete</p>,
          icon: (
            <Icon icon="ph:trash" className="w-[18px] h-[19px] mr-[10px]" />
          ),
          method: (item: any) => {
            setSelectedData(item);
            setSelectedAction("delete");
          },
        },
      ];



    }
  };

  const getTableData = () => {
    return BusinessesData.map((item) => ({
      ...item,
      actions: getActions(),
    }));
  };
  return {
    BusinessesData: getTableData(),
    selectedAction,
    selectedData,
    setSelectedAction,
    setSelectedData,

  };

}