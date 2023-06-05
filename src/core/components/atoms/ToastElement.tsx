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
      className="pointer-events-auto mx-auto mb-4 w-96 max-w-full rounded-lg absolute right-1 top-1 bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="false"
      data-te-toast-init
      data-te-toast-show
    >
      <div className="flex text-green-400 items-center justify-between rounded-t-lg bg-clip-padding px-4 py-4">
        <p className="flex items-center justify-between gap-2 w-full text-primary-700">
          <span className="flex gap-2">
            {icon}
            <TextElement size="sm">{message}</TextElement>
          </span>

          <ButtonElement
            type="button"
            className="shadow-none rounded-none border-none "
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
