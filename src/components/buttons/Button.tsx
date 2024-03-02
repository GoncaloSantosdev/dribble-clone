// Types
import { ButtonProps } from "../../types";

const Button = ({ children, icon, primary }: ButtonProps) => {
  return (
    <button
      className={`${
        primary ? "bg-[#9747FF] text-white" : "bg-[#E2E5F1] text-black"
      }  text-white px-4 py-2 rounded text-sm flex items-center gap-2`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
