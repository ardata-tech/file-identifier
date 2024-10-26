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
  type,
  timer = 3000,
}) => {
  const { hideToast } = useContext(ToastContext) as ToastContextType;

  useEffect(() => {
    const timerId = setTimeout(() => {
      hideToast();
    }, timer);

    return () => clearTimeout(timerId);
  }, [timer, hideToast]);

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert alert-${type}`}>
        <span>{title || "Title not set"}</span>
      </div>
      <div className="alert">
        <span>{description || "Description not set"}</span>
      </div>
    </div>
  );
};

export default Toast;
