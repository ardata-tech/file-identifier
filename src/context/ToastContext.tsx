import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast, { ToastProps } from "../components/Toast";

export type ToastContextType = {
  showToast: (props: ToastProps) => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toastProps, setToastProps] = useState<ToastProps | null>(null);

  const showToast = (props: ToastProps) => {
    setToastProps(props);
  };

  const hideToast = () => {
    setToastProps(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toastProps && <Toast {...toastProps} />}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastContext };
