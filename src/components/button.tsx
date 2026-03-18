import Link from "next/link";
import { ComponentProps } from "react";


interface ButtonProps extends ComponentProps<"button"> {

    children: string | React.ReactNode,
    type: "button" | "submit" | "reset",
    url?: string,

}

export function Button (props: ButtonProps) {

    return (


        <a href={props.url} target="_blank">
            <button type={props.type} onClick={props.onClick}>
                {props.children}
            </button>
        </a>

    )


}