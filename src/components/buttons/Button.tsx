// Types
import { ButtonProps } from "../../types";

const Button = ({
  children,
  icon,
  primary,
  onClick,
  isDeleting,
}: ButtonProps) => {
  return (
    <button
      className={`${
        primary ? "bg-[#9747FF] text-white" : "bg-[#b8b8b8] text-black"
      }  text-white px-4 py-2 rounded text-sm flex items-center gap-2`}
      onClick={onClick}
      disabled={isDeleting}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
