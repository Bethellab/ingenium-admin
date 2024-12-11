import React, { useState,  ReactNode } from "react";
import { useOutsideTouch } from "@/hooks";
import { Icon } from "@iconify/react";
import { RenderIf } from "@/components/hoc";

interface ActionsList {
  name: string | ReactNode;
  method?: (data: any) => void;
  icon?: ReactNode;
  permission?: string;
}

interface ActionsProps {
  actions: ActionsList[];
  id: number | string;
  item?: any;
  trigger?: any;
  buttonClassName?: string;
  module?: string;
  iconType?: "dot" | "caret";
}

export const Actions: React.FC<ActionsProps> = ({
  actions,
  id,
  item,
  trigger,
  buttonClassName,
  iconType = "dot",
}) => {
  const { ref, display, setDisplay } = useOutsideTouch();
  const [position, setPosition] = useState<"top" | "bottom">("bottom");

  const showDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Determine dropdown position
    const buttonRect = (e.target as HTMLElement).getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if dropdown fits below, otherwise position it above
    if (windowHeight - buttonRect.bottom < 200) {
      setPosition("top");
    } else {
      setPosition("bottom");
    }

    setDisplay(!display);
  };

  return (
    <div className="relative">
      {trigger ? (
        <button
          onClick={showDropdown}
          data-testid={`action-${id}`}
          className="cursor-pointer"
        >
          {trigger}
        </button>
      ) : (
        <button
          className={`text-black p-1 border-grey_200 cursor-pointer ${buttonClassName}`}
          onClick={showDropdown}
          data-testid={`action-${id}`}
        >
          <Icon
            icon={
              iconType === "dot" ? "pepicons-pencil:dots-y" : "ph:caret-down"
            }
            className="text-paragraph w-6 h-6"
          />
        </button>
      )}
      <RenderIf condition={actions.length > 0}>
        {display && (
          <div
            ref={ref}
            className={`
              text-sm text-body font-normal absolute z-10
              ${position === "bottom" ? "top-[20px]" : "bottom-[20px]"}
              right-[0px] py-[20px] px-[20px] overflow-auto bg-white drop-shadow-xl w-[200px] rounded-[8px]
            `}
          >
            {actions?.map((action, index) => (
              <RenderIf condition={true} key={index}>
                <button
                  data-testid={action.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDisplay(false);
                    if (action.method) action.method(item);
                  }}
                  className={`
                    w-full py-[8px] px-[10px] font-normal flex gap-x-3 items-center cursor-pointer hide_tap
                    transition ease-in-out duration-500 hover:bg-[#F2F3F3] rounded-[8px]
                  `}
                >
                  {action.name}
                </button>
              </RenderIf>
            ))}
          </div>
        )}
      </RenderIf>
    </div>
  );
};
