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

        <div className={twMerge(props.className, "bg-[#1F3A65]/40  max-w-[34rem] max-h-[34rem] 2xl:max-h-[50rem] w-full h-full p-[1rem] flex flex-col items-center justify-start leading-none gap-y-[0.2rem] rounded-3xl")}>
    
            <Image src={props.imageUrl} height={props.height} width={props.width} alt={props.title} className="max-h-[14rem] 2xl:max-h-[18rem] object-cover rounded-xl select-none"/>

            <Text className="text-[#E9E9E9] text-center subpixel-antialiased font-jersey text-[1.6rem] sm:text-[2.5rem]">{props.title}</Text>
            
            <div className="flex flex-col items-center justify-between grow gap-y-[0.7rem] ">

                <Text className="text-[#1D79F1] font-alata text-center sm:text-justify text-[1rem] sm:text-[1.1rem]">{props.description}</Text>

                <div className="grid grid-cols-3 sm:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2">
                    
                    {props.toolsUsed.map((tool) => (

                        <Text key={tool} className="text-[#E9E9E9] bg-[#14294A] p-1 rounded-sm text-center font-jockey text-[0.8rem] sm:text-[0.9rem]">{tool}</Text>

                    ))}

                </div>

            </div>
            
            <div className="flex items-center justify-center gap-x-5">

                {props.githubUrl && 
                    <Button type="button" url={props.githubUrl}>
                        <IoLogoGithub className="cursor-pointer text-[1.4rem] sm:text-[1.7rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                    </Button>
                }

                {props.pageUrl && 
                    <Button type="button" url={props.pageUrl} className="">
                        <MdOpenInBrowser  className="cursor-pointer text-[1.6rem] sm:text-[1.95rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                    </Button>
                }

            </div>

        </div>
    )
    
}