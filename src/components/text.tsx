import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TextProps extends ComponentProps<"div">{

    children: ReactNode,

}

export function Text (props: TextProps) {

    return (

        <div onClick={props.onClick} className={twMerge("leading-none transition-colors duration-75 ease-out", props.className)}>
            {props.children}
        </div>

    )
}