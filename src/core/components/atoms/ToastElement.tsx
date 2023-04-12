import { IconProps, X } from "phosphor-react";
import { ReactNode } from "react";
import { ButtonElement } from "./ButtonElement";
import { HeadingElement } from "./HeadingElement";
import { TextElement } from "./TextElement";

interface ToastElementProps {
  icon?: ReactNode;
  title?: string;
  date?: string;
  message?: string;
}

export const ToastElement = ({
  icon,
  date,
  message,
  title,
}: ToastElementProps) => {
  return (
    <div
      className="pointer-events-auto mx-auto mb-4 w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="false"
      data-te-toast-init
      data-te-toast-show
    >
      <div className="flex text-green-400 items-center justify-between rounded-t-lg border-b-2 border-green-400 bg-clip-padding p-2">
        <p className="flex items-center justify-center gap-2 font-bold text-primary-700">
          {icon}
          <TextElement size="md">{title}</TextElement>
        </p>
        <div className="flex items-center">
          <p className="text-xs text-primary-700">{date}</p>
          <ButtonElement
            type="button"
            className="ml-2 p-0 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            aria-label="Close"
          >
            <X size={25} />
          </ButtonElement>
        </div>
      </div>
      <div className="break-words rounded-b-lg px-4 py-4 text-green-400">
        {message}
      </div>
    </div>
  );
};
