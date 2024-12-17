import { Icon } from "@iconify/react";
import { useState } from "react";


export default function useEarnings() {
  const [selectedData, setSelectedData] = useState<any>([]);
  const [selectedAction, setSelectedAction] = useState("");

  const EarningsData = [
   

    {
      id: "TXN-2023-XYZ-456",
      name: "Adeloba Joshua",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "Adeloba Joshua",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
    {
      id: "TXN-2023-XYZ-456",
      name: "John Folarin",
      email: "johnfolarin@hotmail.com",
      plan: "Pro plan",
      method: "Paystack",
      status: "successful",
      date: "19 Sep 2024, 03:00 PM",

    },
  



  ];


  const getActiveClass = (status: string) => {
    switch (status) {
      case "successful":
        return "bg-[#F0FDF4] text-[#16A34A] rounded-full py-2 w-32  text-center";
      case "not active":
        return "bg-[#9F180E] text-white rounded-full py-2 px-8 text-center";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };


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
    return EarningsData.map((item) => ({
      ...item,
      actions: getActions(),
    }));
  };
  return {
    EarningsData: getTableData(),
    selectedAction,
    selectedData,
    setSelectedAction,
    setSelectedData,
    getActiveClass
  };

}