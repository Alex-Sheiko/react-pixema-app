import { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  BURGER_MENU = "menu",
  MODAL = "modal",
  TOAST = "toast",
}

interface PortalProps {
  children: ReactNode;
  target: PortalTarget;
}

export const Portal = ({ children, target }: PortalProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};
