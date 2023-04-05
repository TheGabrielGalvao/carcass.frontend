
import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonElementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
    children: ReactNode
    asChild?: boolean
}



export const ButtonElement = ({children, asChild, className, variant, ...props }: ButtonElementProps) => {
    const Comp = asChild ? Slot: 'button'
    return (
        <Comp className={clsx(
            'py-3 px-4 rounded font-semibold text-sm w-full transition-colors focus:ring-2 ring-blue-100',
            {
                'bg-gray-400 text-black hover:bg-gray-400/80': variant === 'default',
                'bg-blue-500 text-white hover:bg-blue-500/80': variant === 'primary',
                'bg-green-500 text-white hover:bg-green-500/80': variant === 'success',
                'bg-red-500 text-white hover:bg-red-500/80': variant === 'danger',
                'bg-yellow-500 text-black hover:bg-yellow-500/80': variant === 'warning',
            },
            className
        )}
        {...props}
        >
            {children}
        </Comp>
)}