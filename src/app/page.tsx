"use client";

import Image from "next/image";
import TextType from "@/components/text_type";
import { useMediaQuery } from "react-responsive";
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
import { MdOpenInBrowser } from "react-icons/md";
import { Hamburger } from "@/components/hamburger";
import { NavBar } from "@/components/navbar";

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
// #1D1933

const skills = [
  
  {
    "name": "Java",
    "iconUrl": "/resources/images/pixelarts/v3/java.svg"
  },

  {
    "name": "Spring Boot",
    "iconUrl": "/resources/images/pixelarts/v3/spring-boot.svg"
  },

  {
    "name": "MySQL",
    "iconUrl": "/resources/images/pixelarts/v3/mysql.svg"
  },

  {
    "name": "C",
    "iconUrl": "/resources/images/pixelarts/v3/c.svg"
  },

  // {
  //   "name": "CSS",
  //   "iconUrl": "/resources/images/pixelarts/v3/css.svg"
  // },

  // {
  //   "name": "HTML",
  //   "iconUrl": "/resources/images/pixelarts/v3/html.svg"
  // },

  {
    "name": "JavaScript",
    "iconUrl": "/resources/images/pixelarts/v3/java-script.svg"
  },

  {
    "name": "TypeScript",
    "iconUrl": "/resources/images/pixelarts/v3/type-script.svg"
  },

  {
    "name": "React",
    "iconUrl": "/resources/images/pixelarts/v3/react.svg"
  },

  {
    "name": "Tailwind CSS",
    "iconUrl": "/resources/images/pixelarts/v3/tailwind-css.svg"
  },

  {
    "name": "Next.js",
    "iconUrl": "/resources/images/pixelarts/v3/nextjs.svg"
  },

  {
    "name": "Python",
    "iconUrl": "/resources/images/pixelarts/v3/python.svg"
  },

  {
    "name": "PHP",
    "iconUrl": "/resources/images/pixelarts/v3/php.svg"
  },

  {
    "name": "Laravel",
    "iconUrl": "/resources/images/pixelarts/v3/laravel.svg"
  },

]

const aboutme: Record<string, string> = {

  "PT-BR": `Opa! Sou o Manoel, almejo ser um desenvolvedor Full Stack.
            Sou apaixonado pela área de tecnologia, por isso atualmente curso Ciência da Computação na UNIVASF. Estou sempre em busca de aprender novas ferramentas e aprimorar minhas habilidades como desenvolvedor. 
            No meu tempo livre, gosto de criar pixel arts e jogar videogames, além de flertar com o desenvolvimento de jogos. 
            Atualmente, busco uma oportunidade de estágio ou trabalho onde eu possa aplicar meus conhecimentos, evoluir profissionalmente e contribuir com soluções reais.`,

  "EN": `Hello! I'm Manoel, and I aspire to be a Full Stack developer.
         I am passionate about the technology field, which is why I am currently studying Computer Science at UNIVASF. I am always looking to learn new tools and improve my skills as a developer.
         In my free time, I enjoy creating pixel arts and playing video games, besides flirting with game development.
         Currently, I am seeking an internship or job opportunity where I can apply my knowledge, grow professionally and contribute with real solutions.`,

}

export default function Page () {

  const [langEN, setLangEN] = useState(true)
  const [psyduckKey, setPysyduckKey] = useState(0)

  const isMobile = useMediaQuery({ query: '(min-width: 640px)' }) ?? true

  function toggleLang () {

    setLangEN(!langEN)

  }

  return (

    <div className="h-[400vh] w-full bg-[url(/resources/images/layered-steps.svg)] bg-repeat animate-horizontal">
      
      <header>

        {isMobile ? <NavBar/> : <Hamburger langEN={langEN}/>}

      </header>

      <main className="px-[1.5rem] sm:px-[3.7rem] w-full">

        <section id="home" className="h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-around drop-shadow-2xl drop-shadow-[#312A57]">

          <div className="w-full sm:w-[50%] flex flex-col items-center justify-center sm:items-start font-manrope font-bold text-[#4C98FF] text-[0.9rem] sm:text-[1.2rem] text-justify">

            <div className="pt-[0.5rem] sm:pt-0">

              <TextType

                text = {[ langEN ? "Hi, how are you?" : "Oi, como você está?", langEN ? "I am Manoel :)" : "Eu sou Manoel :)"]}
                typingSpeed = {75}
                pauseDuration = {1500}
                showCursor = {true}
                cursorCharacter = "|"
                
              />
              
            </div>

            <div className="pt-[0.5rem]">
              {langEN ? 
                "If you are feeling disheartened, that you are somehow not enough. Set your heart ablaze. Dry your eyes and look ahead. You may feel like digging your heels in, but the flow of time waits for no one. It won’t patiently stand by as you grieve." 
                : 
                "Se você estiver se sentindo desmotivado ou sentindo que não é bom o suficiente, incendeie seu coração. Enxugue as lágrimas e siga em frente. Quando se entristecer ou acovardar, lembre-se que o fluxo do tempo nunca para, ele não vai te esperar enquanto você se afoga em tristeza"
              } 
            </div>

            <div className="pt-[4rem] sm:pt-[2rem]"> 

              <Button type="button" url="/resources/documents/Manoel-Nogueira.pdf">
                <div className="text-[1.2rem] font-alata px-[0.7rem] gap-x-[0.5rem] rounded-sm flex items-center justify-center bg-[#1F3A65]/50 border-2 cursor-pointertext-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-95 ease-linear duration-[15ms]"> 
                  Currículo
                  <MdOpenInBrowser className="text-[1.6rem]"/>
                </div>
              </Button>

            </div>

          </div>

          <Image src="/resources/images/example-home.jpg" height={1200} width={845} alt="me" className="h-50 w-40 sm:h-100 sm:w-80 mask-[url(/resources/images/masks/blob.svg)] mask-size-[11rem] sm:mask-size-[21.8rem] mask-no-repeat mask-center"/>
          
        </section>

        <section id="skills" className="h-screen flex items-center justify-around scroll-mt-60 pb-[4rem]">
          
          <motion.div className="w-auto grid grid-cols-6 gap-8 drop-shadow-2xl drop-shadow-[#312A57]" variants={{ show: { transition: {delayChildren: 0.1, staggerChildren: 0.01 } }}} initial="hidden" whileInView="show">
            {skills.map((skill) => (
              
              <ToolIcons key={skill.name} icon={skill.iconUrl} name={skill.name} label="text-[#E9E9E9]" height={100} width={100}/>
               
            ))}
          </motion.div>

          <motion.div onViewportEnter={() => setPysyduckKey((psyduckKey + 1))} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1, scale: { type: "spring", visualDuration: 0.08, bounce: 0.5 }}} className="drop-shadow-2xl drop-shadow-[#312A57]" >
            <img key={psyduckKey} className="" src="/resources/images/pixelarts/psyduck.gif" height={500} width={500} alt="psyduck"/>
          </motion.div>

        </section>

        <section id="projects" className="h-screen flex justify-center pb-[4rem] scroll-mt-60">

          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.1, bounce: 0.1 }}}>
          
            <Projects/>

          </motion.div>

          
        </section>

        <section id="about-me" className="h-screen flex items-center justify-center">
          
          <div className="max-h-[27.106rem] h-full flex items-start justify-center gap-x-[4rem]"> 

            <div className="h-full flex flex-col items-center justify-between animate-fade-in-left"> 
              
              <motion.div initial={{opacity: 0, x: -200 }} whileInView={{opacity: 100, x: 0}} transition={{ duration: 0.5 }}>
                <Image src="/resources/images/example-aboutme.jpg" height="1200" width="1666" alt="about me image" className="h-[18rem] w-[18rem] rounded-full drop-shadow-2xl drop-shadow-[#312A57] border-3 border-[#1D79F1]/75"/>
              </motion.div>
              
              <motion.div  className="w-full flex items-end justify-center gap-x-[1rem]" initial={{opacity: 0, y: 60 }} whileInView={{opacity: 100, y: -20 }} transition={{ duration: 0.4, delay: 0.3 }}>

                <Image src="/resources/images/pixelarts/v2/steve.gif" height="160" width="150" alt="steve" className="h-[3.6rem] w-[3.5rem]"/>

                <div className="flex items-center gap-x-[0.5rem]"> 

                  <Button type="button" url="https://github.com/Manoel-Nogueira">
                    <IoLogoGithub className="cursor-pointer text-[3rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                  <Button type="button" url="https://github.com/Manoel-Nogueira">
                    <IoLogoLinkedin className="cursor-pointer text-[3.3rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                  <Button type="button" url="mailto: nogueirafilho888@gmail.com">
                    <BiLogoGmail className="cursor-pointer text-[3.5rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                </div>

              </motion.div >

            </div>

            <motion.div  className="h-full bg-[#1F3A65]/50 border-2 border-[#1D79F1]/50 max-w-[35rem] w-full p-[2rem] flex items-center justify-center rounded-3xl drop-shadow-2xl drop-shadow-[#1D1933]" initial={{opacity: 0, x: 100 }} whileInView={{opacity: 100, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>

              <p className="whitespace-pre-line text-justify text-[1.4rem] font-jockey text-[#4C98FF]/70"> 
                {aboutme[langEN ? "EN" : "PT-BR"]}
              </p>

            </motion.div >

          </div>
IM
        </section>

      </main>

    </div>

  );

}