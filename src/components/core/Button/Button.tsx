import React, { ReactNode } from "react";
// import { ReactComponent as Spinner } from "../../../assets/svg/spinner.svg"
import "./button.css";
import { Icon } from "@iconify/react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Shows a loading state on Button component
   */
  loading?: boolean;
  /**
   * How large should the button be?
   */
  size?: "32" | "40" | "44" | "48" | "56" | "custom";
  /**
   * What variant to render
   */
  theme?: "primary" | "secondary" | "transparent" | "tertiary";
  /**
   * Renders child nodes passed into Button component
   */
  children?: string | ReactNode;
  /**
   * Other unknown attributes
   */
  [x: string]: any;
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  onClick,
  theme = "transparent",
  disabled = false,
  type,
  loading,
  customClass,
  size,
  ...props
}: ButtonProps) => {
  const btn = {
    sizes: {
      custom: customClass, // custom button class
      "32": "cc-button--32",
      "40": "cc-button--40",
      "44": "cc-button--44",
      "48": "cc-button--48",
      "56": "cc-button--56",
    },
    themes: {
      primary: `text-white ${
        disabled ? "bg-primary opacity-65" : "cc-button--primary"
      }`,
      secondary: `text-white ${
        disabled ? "bg-accent opacity-65" : "bg-accent"
      } border-accent`,
      tertiary: `text-white ${
        disabled ? "bg-black opacity-65" : "bg-black"
      } border-black`,
      transparent: "cc-button--transparent",
    },
  };

  return (
    <button
      className={`cc-button capitalize ${size ? btn.sizes[size] : ""} ${
        theme ? btn.themes[theme] : ""
      } ${disabled && "cursor-not-allowed"} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? <Icon icon="svg-spinners:blocks-wave" /> : <>{children}</>}
    </button>
  );
};
