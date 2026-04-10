import { ComponentProps, useState } from "react";
import { Button } from "./button";
import { IoMenu } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Text } from "@/components/text";
import Image from "next/image";
import { ScrollToAnchor } from "@/libs/scroll";
import { twMerge } from "tailwind-merge";
interface HamburgerProps extends ComponentProps<"div"> {

    toggleLang: () => void,
    langEN: boolean,

}

export function Hamburger (props:HamburgerProps) {
    
    const [showHamburgerMenu, setshowHamburgerMenu] = useState(false)

    return(

        <div className="w-full fixed z-30">
            
            <div className="bg-[#14294A] flex items-center justify-between px-[0.45rem] border-b-2 border-[#0E1A32]">

                <Button type="button" onClick={() => (setshowHamburgerMenu(!showHamburgerMenu))}>
                    <IoMenu className="cursor-pointer text-[1.8rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-[15ms]"/>
                </Button>

                <div>
                    <Image onClick={() => ScrollToAnchor("home")} src="/resources/images/otter.svg" height={40} width={128} alt="otter" className="h-[1.6rem] w-[5.3rem] cursor-pointer hover:scale-115 active:scale-90 ease-linear duration-75"/>
                </div>

                <Text onClick={() => props.toggleLang()} className="font-jockey font-bold text-[1.3rem] cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {props.langEN ? "EN": "PT"} </Text>
                
            </div>

            <div className={twMerge("w-full bg-[#14294A]/90 flex justify-around p-[0.25rem]", showHamburgerMenu ? "animate-scale-in-top" : "animate-scale-out-top")}>

                <Button type="button" onClick={() => ScrollToAnchor("home")}>
                    <div className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer text-[1rem] font-jockey text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] ease-linear duration-50">
                        <AiFillHome/>
                        <Text> {props.langEN ? "Home" : "Início"} </Text>
                    </div>
                </Button>

                <Button type="button" onClick={() => ScrollToAnchor("skills")}>
                    <div className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer text-[1rem] font-jockey text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] ease-linear duration-50">
                        <AiFillTool/>
                        <Text> {props.langEN ? "Skills" : "Habilidades"} </Text>
                    </div>
                </Button>

                <Button type="button" onClick={() => ScrollToAnchor("projects")}>
                    <div className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer text-[1rem] font-jockey text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] ease-linear duration-50">
                        <FaCubes/>
                        <Text> {props.langEN ? "Projects" : "Projetos"} </Text>
                    </div>
                </Button>

                <Button type="button" onClick={() => ScrollToAnchor("about-me")}>
                    <div className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer text-[1rem] font-jockey text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] ease-linear duration-50">
                        <FaUser/>
                        <Text> {props.langEN ? "About me" : "Sobre mim"} </Text>
                    </div>
                </Button>

            </div>

        </div>

    )
}