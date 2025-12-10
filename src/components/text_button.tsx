import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TextButtonProps extends ComponentProps<"div">{

    children: ReactNode,
    color: string,
    colorHover: string,
    colorActive: string,

}

export function TextButton (props: TextButtonProps) {

    return (

        <div onClick={props.onClick} className={twMerge("leading-none transition-colors duration-75 ease-out cursor-pointer select-none", props.className, props.color, props.colorHover, props.colorActive)}>
            {props.children}
        </div>

    )
}