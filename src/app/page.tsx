"use client";

import Image from "next/image";
import TextType from "@/components/text_type";
import Link from "next/link";
import { TextButton } from "@/components/text_button";
import { useEffect, useState } from "react";
import { motion, stagger } from "motion/react";
import { ToolIcons } from "@/components/tool_icons";
import { useInView } from "react-intersection-observer";

// Font
//
// #4C98FF
// #1D79F1
// #E9E9E9

// Background / NavBar
//
// #0E1A32
// #14294A
// #1F3A65

export default function Home() {

  const [langEN, setLangEN] = useState(true)
  const [psyduckKey, setPysyduckKey] = useState(0)

  function toggleLang () {

    setLangEN(!langEN)

  }

  return (

    <div className="h-[500vh] w-full bg-[url(/resources/images/layered-steps.svg)] bg-repeat animate-horizontal">

      <header className="h-30 w-full px-15 pt-4 z-20 flex justify-between fixed bg-linear-to-t/oklch from-[#1F3A65] to-[#0E1A32] mask-[url(/resources/images/masks/navbar.svg)]">

        <div>
          <Link href="#home" prefetch={false}>
            <Image src="/resources/images/otter.svg" height={40} width={128} alt="otter" className="scale-x-[-1]"/>
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

      <main className="px-15 w-full">

        <div id="home" className="h-screen flex items-center justify-around">

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
            <Image src="/resources/images/example-home.jpg" height={1200} width={845} alt="me" className="h-100 w-80 mask-[url(/resources/images/masks/blob.svg)] mask-size-[21.8rem] mask-no-repeat mask-center"/>
          </div>
          
        </div>

        <div id="skills" className="h-screen flex items-center justify-around">
          
          <motion.div className="w-auto grid grid-cols-4 gap-20 drop-shadow-2xl drop-shadow-[#312A57]" variants={{ show: { transition: {delayChildren: 1, staggerChildren: 0.1 } }}} initial="hidden" whileInView="show">
            
            <ToolIcons icon="/resources/images/pixelarts/c.svg" name="C" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/spring-boot.svg" name="Spring Boot" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/css.svg" name="CSS" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/html.svg" name="HTML" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/java-script.svg" name="JavaScript" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/type-script.svg" name="TypeScript" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/tailwind-css.svg" name="Tailwind CSS" labelColor="text-[#E9E9E9]" height={100} width={100}/>
            <ToolIcons icon="/resources/images/pixelarts/php.svg" name="PHP" labelColor="text-[#E9E9E9]" height={100} width={100}/>

          </motion.div>

          <motion.div onViewportEnter={() => setPysyduckKey((psyduckKey + 1))} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1, scale: { type: "spring", visualDuration: 0.1, bounce: 0.5 }}} className="drop-shadow-2xl drop-shadow-[#312A57]" >
            <img key={psyduckKey} className="" src="/resources/images/pixelarts/psyduck.gif" height={500} width={500} alt="psyduck"/>
          </motion.div>

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