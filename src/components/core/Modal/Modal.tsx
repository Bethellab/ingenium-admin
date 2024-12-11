import { ReactNode } from "react";
import { Icon } from "@iconify/react";
import "./Modal.css";

interface ModalProps {
  closeModal?: () => void;
  className?: string;
  authModal?: boolean;
  styles?: string;
  children: ReactNode;
  title?: string | ReactNode;
  position: "modal-right" | "modal-center";
  width?: string;
}

export const Modal = ({
  children,
  title,
  className,
  styles,
  width,
  closeModal,
  authModal = false,
  position,
}: ModalProps) => {
  const close = () => {
    closeModal && closeModal();
  };

  return (
    <div className="overflow-hidden">
      <div className="z-[500] overlay"></div>
      <div
        className={`modal ${position} ${width || "w-[398px]"} ${
          styles || ""
        } overflow-y-hidden`}
      >
        <div
          className={`
          ${className || ""} ${!authModal ? "bg-white w-full" : ""}
          ${position ? "rounded-[8px]" : "rounded-2xl"}
          `}
        >
          {title && (
            <div
              className={`
                ${position === "modal-right" ? "border-b border-[#ECEEEE]" : ""}
                flex justify-between items-start pt-[24px] px-[24px] mb-[24px]
                `}
            >
              <p
                className={`text-lg text-headers font-medium capitalize-first`}
              >
                {title}
              </p>

              <button type="button" data-testid="close-modal" onClick={close}>
                <Icon icon="ph:x" className="w-[19.8px] h-[19.8px]" />
              </button>
            </div>
          )}
          <div className="px-[24px]">{children}</div>
        </div>
      </div>
    </div>
  );
};
