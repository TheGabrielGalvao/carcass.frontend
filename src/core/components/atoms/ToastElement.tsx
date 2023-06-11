import { IconProps, X } from "phosphor-react";
import { ReactNode, useEffect } from "react";
import { ButtonElement } from "./ButtonElement";
import { HeadingElement } from "./HeadingElement";
import { TextElement } from "./TextElement";
import clsx from "clsx";
import { useRoute } from "../../context/RouteContext";

export interface ToastElementProps {
  icon?: ReactNode;
  title?: string;
  date?: string;
  message?: string;
  show?: boolean;
  type?: "info" | "warning" | "danger" | "success" | "default";
}

export const ToastElement = ({
  icon,
  date,
  message,
  title,
  show,
  type,
}: ToastElementProps) => {
  const { handleSetToast, toast } = useRoute();

  useEffect(() => {
    if (toast?.show) {
      const timer = setTimeout(() => {
        handleSetToast({
          show: false,
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div
      className={clsx({
        "flex justify-center items-center w-full max-w-full h-14 right-2 top-20 bottom-0 absolute ":
          show,
        hidden: !show,
      })}
    >
      <div
        className={clsx(
          {
            "bg-green-100 border-green-500 text-green-600": type === "success",
            "bg-blue-100 border-blue-500 text-blue-600": type === "info",
            "bg-red-100 border-red-500 text-red-600": type === "danger",
            "bg-yellow-100 border-yellow-500 text-yellow-600":
              type === "warning",
            "bg-gray-100 border-gray-500 text-gray-500":
              !type || type === "default",
          },
          "flex items-center justify-between rounded-t-lg bg-clip-padding px-4 py-2 rounded-lg border transition-all animate-bounce duration-200"
        )}
      >
        <p className="flex items-center justify-between gap-2 w-full text-primary-700">
          <span className="flex gap-2">
            {icon}
            <TextElement size="sm">{message}</TextElement>
          </span>

          <ButtonElement
            type="button"
            className="shadow-none rounded-none border-none "
            onClick={() => handleSetToast()}
          >
            <X size={16} weight="bold" />
          </ButtonElement>
        </p>
      </div>
      {/* <div className="break-words rounded-b-lg px-4 py-4 text-green-400 flex items-center justify-center">
        {icon}
        <TextElement size="sm">{title}</TextElement>
      </div> */}
    </div>
  );
};
