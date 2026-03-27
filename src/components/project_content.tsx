import Image from "next/image";
import { ComponentProps } from "react";
import { Text } from "./text";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/button";
import { IoLogoGithub } from "react-icons/io";
import { MdOpenInBrowser } from "react-icons/md";

interface ProjectContentProps extends ComponentProps<"div"> { 

    imageUrl: string,
    height: number,
    width: number,
    title: string,
    description: string,
    toolsUsed: string[],
    githubUrl?: string,
    pageUrl?: string,

}

export function ProjectContent (props: ProjectContentProps) {

    return (

        <div className={twMerge(props.className, "bg-[#1F3A65]/40 max-w-[33.313rem] max-h-[27.876rem] w-full h-full p-[1rem] flex flex-col items-center justify-start leading-none gap-y-[0.2rem] rounded-3xl")}>
    
            <Image src={props.imageUrl} height={props.height} width={props.width} alt={props.title} className="max-h-[13.938rem] object-cover rounded-xl select-none"/>

            <Text className="text-[#E9E9E9] text-center subpixel-antialiased font-jersey text-[2.5rem]">{props.title}</Text>
            
            <div className="flex flex-col items-center justify-between grow gap-y-[0.7rem] ">

                <Text className="text-[#1D79F1] font-alata text-justify">{props.description}</Text>

                <div className="grid grid-cols-4 gap-2">
                    
                    {props.toolsUsed.map((tool) => (

                        <Text key={tool} className="text-[#E9E9E9] bg-[#14294A] p-1 rounded-sm text-center font-jockey text-[1.0rem]">{tool}</Text>

                    ))}

                </div>

            </div>
            
            <div className="flex items-center justify-center gap-x-5">

                {props.githubUrl && 
                    <Button type="button" url={props.githubUrl}>
                        <IoLogoGithub className="cursor-pointer text-[1.7rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                    </Button>
                }

                {props.pageUrl && 
                    <Button type="button" url={props.pageUrl} className="">
                        <MdOpenInBrowser  className="cursor-pointer text-[1.95rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                    </Button>
                }

            </div>

        </div>
    )


}