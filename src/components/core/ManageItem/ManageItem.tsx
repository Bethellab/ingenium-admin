import { Button } from "../Button/Button";
import { FormEventHandler, ReactNode } from "react";
import { RenderIf } from "@/components/hoc";
import { Icon } from "@iconify/react";

interface ManageItemProps {
  onClose?: () => void;
  loading?: boolean;
  onSubmit?: () => void;
  caption: string;
  caption2?: string;
  title: string;
  actionName: string;
  showCloseIcon?: boolean;
  cancelBtnText?: string;
  icon?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  showCancelBtn?: boolean;
  caption2Color?: boolean;
  showCancelText?: boolean;
  actionTheme: "primary" | "secondary" | "transparent" | "tertiary";
}

export const ManageItem = ({
  onClose,
  loading,
  title,
  caption,
  caption2,
  actionName,
  onSubmit,
  cancelBtnText,
  showCloseIcon = false,
  icon,
  children,
  disabled = false,
  showCancelBtn = true,
  caption2Color = true,
  showCancelText = true,
  actionTheme,
}: ManageItemProps) => {
  const submit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <div className="overflow-hidden">
      <div className="z-[500] overlay"></div>
      <form
        className="modal modal-center bg-white w-[400px] h-fit rounded-[16px] p-[24px]"
        onSubmit={submit}
      >
        <div className="flex content-between items-center justify-between">
          <div> {icon}</div>
          {showCloseIcon && (
            <div
              onClick={onClose}
              className="text-[#035A0D] cursor-pointer flex justify-center items-center"
            >
              <span>
                <Icon icon="ph:x" className="w-5 h-5 mr-2 text-[#ADACB0]" />
              </span>
              {showCancelText && "Cancel"}
            </div>
          )}
        </div>
        <p className="text-xl md:text-[24px] text-title font-bold text-center mb-[8px] mt-[40px]">
          {title}
        </p>
        <p className="text-lg text-body text-center">{caption}</p>
        <p
          className={`text-sm mt-4 ${
            caption2Color ? "text-[#C02337]" : "text-body"
          } `}
        >
          {caption2}
        </p>
        {children && (
          <div className="my-[30px] flex justify-center">{children}</div>
        )}
        <div
          className={`mt-10 grid ${
            showCancelBtn ? "grid-cols-2" : "grid-cols-1"
          } gap-4`}
        >
          <RenderIf condition={showCancelBtn}>
            <Button
              theme="transparent"
              size="40"
              disabled={loading}
              onClick={onClose}
              type="button"
            >
              {cancelBtnText ?? "Cancel"}
            </Button>
          </RenderIf>
          <Button
            loading={loading}
            disabled={disabled}
            size="44"
            theme={actionTheme}
          >
            {actionName}
          </Button>
        </div>
      </form>
    </div>
  );
};
