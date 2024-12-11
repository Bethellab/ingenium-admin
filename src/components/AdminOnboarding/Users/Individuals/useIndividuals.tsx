import { Icon } from "@iconify/react";
import { useState } from "react";


export default function useIndividual()  {
    const [selectedData, setSelectedData] = useState<any>([]);
    const [selectedAction, setSelectedAction] = useState("");

    const IndividualData = [
        {
            name: "Adeloba Joshua",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
     
    
        {
            name: "John Dan",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "David Mark",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Josh Ade",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Kelvin Mark",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
        {
            name: "Henry John",
            email: "adelobajoshua@gmail.com",
            phone: "+234 815 744 0669",
            enrollment: 5,
            active: "Active user",
            last: "19 Sep 2024, 03:00 PM",
            date: "30/11/2024",
            actions: [],
        },
      
    ];

    
    const getActiveClass = (active: string) => {
        switch (active) {
          case "Active user":
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
        return IndividualData.map((item) => ({
          ...item,
          actions: getActions(),
        }));
      };
    return {
        IndividualData: getTableData(),
        selectedAction,
        selectedData,
        setSelectedAction,
        setSelectedData,
        getActiveClass
      };

}