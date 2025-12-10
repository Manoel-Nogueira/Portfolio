"use client";

import Image from "next/image";
import TextType from "@/components/text_type";
import { TextButton } from "@/components/text_button";
import { useState } from "react";
import Link from "next/link";

// Font
//
// #4C98FF
// #1D79F1

// Background / NavBar
//
// #0E1A32
// #14294A
// #1F3A65

export default function Home() {

 const  [langEN, setLangEN] = useState(true);

 function toggleLang () {

    setLangEN(!langEN)

 }

  return (

    <div className="h-[500vh] w-full bg-[url(/resources/images/layered-steps.svg)] bg-repeat animate-horizontal">

      <header className="h-30 w-full px-15 pt-4 z-20 flex justify-between fixed bg-linear-to-t/oklch from-[#1F3A65] to-[#0E1A32] mask-[url(/resources/images/masks/navbar.svg)]">

        <div>
          <Link href="#home" prefetch={false}>
            <img src="/resources/images/otter.svg" alt="otter" className="scale-x-[-1]"/>
          </Link>
        </div>

        <div className="flex pt-[0.05rem] font-jockey font-bold text-[1.5rem] gap-20">

          <Link href= "#skills" prefetch={false}>
            <TextButton color="text-[#1D79F1]" colorHover="hover:text-[#4C98FF]" colorActive="active:text-[#1662C1]"> {langEN ? "Skills" : "Habilidades"} </TextButton>
          </Link>

          <Link href= "#projects" prefetch={false}>
            <TextButton color="text-[#1D79F1]" colorHover="hover:text-[#4C98FF]" colorActive="active:text-[#1662C1]"> {langEN ? "Projects" : "Projetos"} </TextButton>
          </Link>

          <Link href= "#about me" prefetch={false}>
            <TextButton color="text-[#1D79F1]" colorHover="hover:text-[#4C98FF]" colorActive="active:text-[#1662C1]"> {langEN ? "About me" : "Sobre mim"} </TextButton>
          </Link>

          <Link href= "#contacts" prefetch={false}>
            <TextButton color="text-[#1D79F1]" colorHover="hover:text-[#4C98FF]" colorActive="active:text-[#1662C1]"> {langEN ? "Contacts" : "Contatos"} </TextButton>
          </Link>

          <TextButton onClick={() => toggleLang()} color="text-[#1D79F1]" colorHover="hover:text-[#4C98FF]" colorActive="active:text-[#1662C1]"> {langEN ? "EN": "PT"} </TextButton>

        </div>

      </header>

      <main className="px-15">

        <div id="home" className="h-screen flex items-center">

          <div className="w-[50%] font-manrope font-bold text-[#4C98FF]">

            <div>

              <TextType

                text = {[ langEN ? "Hi, how are you?" : "Oi, como você está?", langEN ? "I am Manoel :)" : "Eu sou Manoel :)"]}
                typingSpeed = {75}
                pauseDuration = {1500}
                showCursor = {true}
                cursorCharacter = "|"
                
              />
              
            </div>

            <div className="pt-2">
              {langEN ? 
                "If you are feeling disheartened, that you are somehow not enough. Set your heart ablaze. Dry your eyes and look ahead. You may feel like digging your heels in, but the flow of time waits for no one. It won’t patiently stand by as you grieve." 
                : 
                "Se você estiver se sentindo desmotivado ou sentindo que não é bom o suficiente, incendeie seu coração. Enxugue as lágrimas e siga em frente. Quando se entristecer ou acovardar, lembre-se que o fluxo do tempo nunca para, ele não vai te esperar enquanto você se afoga em tristeza"
              } 
            </div>

          </div>

          <div className="flex justify-center w-[50%] drop-shadow-2xl drop-shadow-[#1D1933]">
            <img src="/resources/images/example.jpg" alt="me" className="h-100 w-80 mask-[url(/resources/images/masks/blob.svg)] mask-size-[21.8rem] mask-no-repeat mask-center"/>
          </div>
          
        </div>

        <div id="skills" className="h-screen flex items-center justify-center text-[#FFFFFF]">
          Skills
        </div>

        <div id="projects" className="h-screen flex items-center justify-center text-[#FFFFFF]">
          Projects
        </div>

        <div id="about me" className="h-screen flex items-center justify-center text-[#FFFFFF]">
          About me
        </div>

        <div id="contacts" className="h-screen flex items-center justify-center text-[#FFFFFF]">
          Contacts
        </div>

      </main>

    </div>

  );

}
