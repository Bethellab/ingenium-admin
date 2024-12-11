import { Icon } from "@iconify/react";
import { useState } from "react";


export default function useCourseList()  {
    const [selectedData, setSelectedData] = useState<any>([]);
    const [selectedAction, setSelectedAction] = useState("");

    const courseListData = [
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Subscription",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Creative Writing for Children",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "One-time pay",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Fundamentals of Music Theory",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Subscription",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "The Art of Public Speaking",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Free",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "One-time pay",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Subscription",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Subscription",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "Free",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Money Matters",
            chapter: 5,
            enrolled: "active",
            enrollment: 57,
            average: 49.8,
            pricing: "One-time pay",
            date: "30/11/2024",
            actions: [],
        },
       
    ];

    
    const getEnrolledClass = (enrolled: string) => {
        switch (enrolled) {
          case "active":
            return "bg-[#F0FDF4] text-[#16A34A] rounded-full py-2  text-center";
          case "not ctive":
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
        return courseListData.map((item) => ({
          ...item,
          actions: getActions(),
        }));
      };
    return {
        courseListData: getTableData(),
        selectedAction,
        selectedData,
        setSelectedAction,
        setSelectedData,
        getEnrolledClass
      };

}