import React, { useEffect, useContext } from "react";
import { ToastContext, ToastContextType } from "../context/ToastContext";

export type ToastProps = {
  title?: string;
  description?: string;
  type?: "success" | "info" | "warning" | "error";
  timer?: number;
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type = "info",
  timer = 3000,
}) => {
  const { hideToast } = useContext(ToastContext) as ToastContextType;

  useEffect(() => {
    const timerId = setTimeout(() => {
      hideToast();
    }, timer);

    return () => clearTimeout(timerId);
  }, [timer, hideToast]);

  const typeClasses = {
    success: "bg-green-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${typeClasses[type]}`}>
        <span>{title || "Title not set"}</span>
      </div>
      <div className="alert">
        <span>{description || "Description not set"}</span>
      </div>
    </div>
  );
};

export default Toast;
