import { ComponentProps } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { TextButton } from "./text_button";


interface ToolIconsProps extends ComponentProps<"div"> {

    icon: string,
    name: string,
    labelColor: string,
    height: number,
    width: number

}

export function ToolIcons (props: ToolIconsProps) {

    return (

        <div>

            <motion.div className="flex justify-center" variants={{ hidden: { opacity: 0, scale: 0}, show: {opacity: 1, scale: 1, transition: {duration: 0.05, scale: { type: "spring", bounce: 0.5 } }}}}>
                <Image src={props.icon} height={props.height} width={props.width} alt={props.name} />
            </motion.div>

            <motion.div className="pt-1 text-center text-[1.4rem] font-tiny" variants={{ hidden: { opacity: 0, scale: 0}, show: {opacity: 1, scale: 1, transition: {duration: 0.05, scale: { type: "spring", bounce: 0.5 } }}}}>
                <TextButton color={props.labelColor}>    
                    {props.name}
                </TextButton>
            </motion.div>

        </div>

    )
}