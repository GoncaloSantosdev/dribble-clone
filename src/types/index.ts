import { MouseEventHandler } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  primary?: boolean;
  isDeleting?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
