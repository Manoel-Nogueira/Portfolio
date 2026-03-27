import Image from "next/image";
import { Text } from "@/components/text";
import { ScrollToAnchor } from "@/libs/scroll"; 
import { useState } from "react";


export function NavBar () {

    const [langEN, setLangEN] = useState(true)

    return (

        <div className="h-[4.688rem] w-full px-15 pt-4 z-20 flex items-start justify-between fixed bg-linear-to-t/oklch from-[#1F3A65] to-[#0E1A32] sm:mask-[url(/resources/images/masks/navbar.svg)]">
        
            <div>
                <Image onClick={() => ScrollToAnchor("home")} src="/resources/images/otter.svg" height={40} width={128} alt="otter" className="cursor-pointer hover:scale-115 active:scale-90 ease-linear duration-75"/>
            </div>

            <div className="flex pt-[0.05rem] font-jockey font-bold text-[1.5rem] gap-20">

                <Text onClick={() => ScrollToAnchor("skills")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "Skills" : "Habilidades"} </Text>
                <Text onClick={() => ScrollToAnchor("projects")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "Projects" : "Projetos"} </Text>
                <Text onClick={() => ScrollToAnchor("about-me")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "About me" : "Sobre mim"} </Text>


                {/* <Text onClick={() => toggleLang()} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "EN": "PT"} </Text> */}

            </div>

            </div>


    )

}