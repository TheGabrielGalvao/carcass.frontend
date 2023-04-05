import { BaseComponentProps } from "./types"

export interface CardElementProps extends BaseComponentProps {}

export const CardElement = ({children}: CardElementProps) => {
  return(
    <div className="flex w-full bg-white p-4 rounded-2xl overflow-hidden">
      {children}
    </div>
  )
 }