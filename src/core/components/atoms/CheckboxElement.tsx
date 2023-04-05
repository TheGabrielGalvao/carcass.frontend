import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';


export interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement> { }


export const CheckboxElement = ({ className, ...props }: CheckboxElementProps) => {
    return (
        <div>Checkbox</div>
        // <Checkbox.Root
        //     className='w-6 h-6 p-[2px] bg-transparent border border-blue-100 rounded flex items-center justify-center' 
        //     {...props}
        // >

        //     <Checkbox.Indicator asChild>
        //         <Check weight='bold' className='h-5 w-5 text-blue-400' />
        //     </Checkbox.Indicator>
        // </Checkbox.Root>


    )
}