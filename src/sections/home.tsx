import { Button } from "@/components/button";
import TextType from "@/components/text_type";
import Image from "next/image";
import { ComponentProps } from "react";
import { MdOpenInBrowser } from "react-icons/md";

interface HomeProps extends ComponentProps<"section"> {

    langEN: boolean,

}

type TextType = {
    
    textPTBR: string[],
    textEN: string[],

}

const introduction: Record<string, string> = {

    "PT-BR": `Opa! Eu sou o Manoel!
              Desenvolvedor Full Stack em construção.
              Sou apaixonado por tecnologia e atualmente curso Ciência da Computação na UNIVASF (campus Salgueiro-PE).
              Estou em busca de uma oportunidade de estágio ou trabalho para evoluir na prática.
              E claro… um cafezinho é sempre bem-vindo :)`,

    "EN": `Hello! I'm Manoel!
           Full Stack developer in the making.
           I'm passionate about technology and currently studying Computer Science at UNIVASF (Salgueiro-PE campus).
           I'm looking for an internship or job opportunity to gain practical experience.
           And of course… a coffee is always welcome :)`,

}

const textstypes: TextType = {

    "textPTBR": ["Oi, como você está?", "Lembre de pegar um bom café :)"],
    "textEN": ["Hi, how are you?", "Remember to grab a good coffee :)"],

}

export function Home (props: HomeProps) {

    return (

        <section id="home" className="h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-around drop-shadow-2xl drop-shadow-[#312A57]">
        
            <div className="w-full sm:w-[50%] flex flex-col items-center justify-center sm:items-start font-manrope font-bold text-[#4C98FF] text-[0.9rem] sm:text-[1.2rem] text-justify">

                <div className="pt-[0.5rem] sm:pt-0">

                    <TextType

                        text = {props.langEN ? textstypes.textEN : textstypes.textPTBR}
                        typingSpeed = {75}
                        pauseDuration = {1500}
                        showCursor = {true}
                        cursorCharacter = "|"
                    
                    />
                    
                </div>

                <div className="pt-[0.5rem]">
                    {introduction[props.langEN ? "EN" : "PT-BR"]} 
                </div>

                <div className="pt-[4rem] sm:pt-[2rem]"> 

                    <Button type="button" url="/resources/documents/Manoel-Nogueira.pdf">
                        <div className="text-[1.2rem] font-alata px-[0.7rem] gap-x-[0.5rem] rounded-sm flex items-center justify-center bg-[#1F3A65]/50 border-2 cursor-pointertext-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-95 ease-linear duration-[15ms]"> 
                            {props.langEN ? "Resume" : "Currículo"}
                            <MdOpenInBrowser className="text-[1.6rem]"/>
                        </div>
                    </Button>

                </div>

            </div>

            <Image src="/resources/images/me.svg" height={1200} width={845} alt="me" className="h-50 w-40 sm:h-100 sm:w-80 mask-[url(/resources/images/masks/blob.svg)] mask-size-[11rem] sm:mask-size-[21.8rem] mask-no-repeat mask-center"/>
            
        </section>

    )
}