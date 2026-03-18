"use client";

import Image from "next/image";
import TextType from "@/components/text_type";
import Link from "next/link";
import { Text } from "@/components/text";
import { useEffect, useState } from "react";
import { motion, stagger } from "motion/react";
import { ToolIcons } from "@/components/tool_icons";
import { useInView } from "react-intersection-observer";
import { Projects } from "@/components/projects";
import { Button } from "@/components/button";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

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

// Sombra
//
// #312A57

const skills = [

  {
    "name": "C",
    "iconUrl": "/resources/images/pixelarts/c.svg"
  },

  {
    "name": "Spring Boot",
    "iconUrl": "/resources/images/pixelarts/spring-boot.svg"
  },

  {
    "name": "CSS",
    "iconUrl": "/resources/images/pixelarts/css.svg"
  },

  {
    "name": "HTML",
    "iconUrl": "/resources/images/pixelarts/html.svg"
  },

  {
    "name": "JavaScript",
    "iconUrl": "/resources/images/pixelarts/java-script.svg"
  },

  {
    "name": "TypeScript",
    "iconUrl": "/resources/images/pixelarts/type-script.svg"
  },

  {
    "name": "Tailwind CSS",
    "iconUrl": "/resources/images/pixelarts/tailwind-css.svg"
  },

  {
    "name": "PHP",
    "iconUrl": "/resources/images/pixelarts/php.svg"
  },

]

export default function Home() {

  const [langEN, setLangEN] = useState(true)
  const [psyduckKey, setPysyduckKey] = useState(0)

  function toggleLang () {

    setLangEN(!langEN)

  }

  function scrollToAnchor (sectionId: string) {

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })

  }

  return (

    <div className="h-[400vh] w-full bg-[url(/resources/images/layered-steps.svg)] bg-repeat animate-horizontal">

      <header className="h-[4.688rem] w-full px-15 pt-4 z-20 flex items-start justify-between fixed bg-linear-to-t/oklch from-[#1F3A65] to-[#0E1A32] mask-[url(/resources/images/masks/navbar.svg)]">

        <div>
          <Image onClick={() => scrollToAnchor("home")} src="/resources/images/otter.svg" height={40} width={128} alt="otter" className="cursor-pointer hover:scale-115 active:scale-90 ease-linear duration-75"/>
        </div>

        <div className="flex pt-[0.05rem] font-jockey font-bold text-[1.5rem] gap-20">

          <Text onClick={() => scrollToAnchor("skills")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "Skills" : "Habilidades"} </Text>
          <Text onClick={() => scrollToAnchor("projects")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "Projects" : "Projetos"} </Text>
          <Text onClick={() => scrollToAnchor("about-me")} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "About me" : "Sobre mim"} </Text>

          <Text onClick={() => toggleLang()} className="cursor-pointer select-none text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1]"> {langEN ? "EN": "PT"} </Text>

        </div>

      </header>

      <main className="px-15 w-full">

        <section id="home" className="h-screen flex items-center justify-around">

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
          
        </section>

        <section id="skills" className="h-screen flex items-center justify-around scroll-mt-30 pb-[4rem]">
          
          <motion.div className="w-auto grid grid-cols-4 gap-20 drop-shadow-2xl drop-shadow-[#312A57]" variants={{ show: { transition: {delayChildren: 0.1, staggerChildren: 0.01 } }}} initial="hidden" whileInView="show">
            {skills.map((skill) => (
              
              <ToolIcons key={skill.name} icon={skill.iconUrl} name={skill.name} label="text-[#E9E9E9]" height={100} width={100}/>
               
            ))}
          </motion.div>

          <motion.div onViewportEnter={() => setPysyduckKey((psyduckKey + 1))} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1, scale: { type: "spring", visualDuration: 0.08, bounce: 0.5 }}} className="drop-shadow-2xl drop-shadow-[#312A57]" >
            <img key={psyduckKey} className="" src="/resources/images/pixelarts/psyduck.gif" height={500} width={500} alt="psyduck"/>
          </motion.div>

        </section>

        <section id="projects" className="h-screen flex justify-center pb-[4rem] scroll-mt-30">

          <Projects/>
          
        </section>

        <section id="about-me" className="h-screen flex justify-center">
          
            About-me
          
        </section>

      </main>

    </div>

  );

}