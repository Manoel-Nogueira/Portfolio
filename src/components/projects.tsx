import Image from "next/image";
import { ComponentProps, useState } from "react";
import { Text } from "./text";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { ProjectContent } from "./project_content";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

enum enumIterator {

    RIGHT =  1,
    LEFT = -1

}

const height = 373
const width = 683

const projects = [

  {
    "id": 1,
    "name": "Project 1",
    "description": "Envelhecer e morrer é o que dá sentido e beleza ao tempo fugaz de uma vida humana. É exatamente porque envelhecemos e morremos que nossas vidas têm valor e nobreza.",
    "toolsUsed": ["Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
    "imageUrl": "/resources/images/projects/example-project-01.jpeg",
    "githubUrl": "https://www.youtube.com/shorts/cFIRbTsS_E0",
    "pageUrl": "https://www.youtube.com/shorts/cFIRbTsS_E0",
  },
  
  {
    "id": 2,
    "name": "Project 2",
    "description": "Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja.",
    "toolsUsed": ["Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
    "imageUrl": "/resources/images/projects/example-project-02.png",
    "githubUrl": "https://www.youtube.com/shorts/cFIRbTsS_E0",
    "pageUrl": "",
  },

  {
    "id": 3,
    "name": "Project 3",
    "description": "Não importa o quão poderoso você se torne, nunca tente fazer tudo sozinho. Caso contrario irá falhar.",
    "toolsUsed": ["Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
    "imageUrl": "/resources/images/projects/example-project-03.png",
    "githubUrl": "https://www.youtube.com/shorts/cFIRbTsS_E0",
    "pageUrl": "",
  },

  {
    "id": 4,
    "name": "Project 4",
    "description": "Seres humanos morrem. Animais morrem. Plantas morrem. Até os ceifadores de almas morrem. É o arco do universo. Tudo o que ganha vida acaba deixando de existir.",
    "toolsUsed": ["Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS"],
    "imageUrl": "/resources/images/projects/example-project-04.png",
    "githubUrl": "https://www.youtube.com/shorts/cFIRbTsS_E0",
    "pageUrl": "",
  },

]

export function Projects () {

    const [currentId, setCurrentId] = useState(0);
    const [direction, setDirection] = useState<enumIterator>();

    function changeId (id: number, flag: enumIterator) {

      setDirection(flag);

      if (flag === enumIterator.RIGHT) {

          setCurrentId(id < (projects.length - 1) ? id + 1 : 0)


      } else if (flag === enumIterator.LEFT) {

          setCurrentId(id > 0 ? id - 1 : (projects.length - 1));

      }

    }
    
    return ( 

        <motion.div className="flex items-center mb-30 drop-shadow-2xl drop-shadow-[#312A57]" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.1, bounce: 0.1 }}}>

            <HiArrowCircleLeft onClick={() => changeId(currentId, enumIterator.LEFT)} className="text-[8rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>

            <ProjectContent className="scale-75 z-0 brightness-80 blur-xs select-none pointer-events-none" imageUrl={projects[currentId].imageUrl} height={height} width={width} title={projects[currentId].name} description={projects[currentId].description} toolsUsed={projects[currentId].toolsUsed} githubUrl={projects[currentId].githubUrl} pageUrl={projects[currentId].pageUrl}></ProjectContent>
            <ProjectContent key={currentId + 1} className={twMerge("z-10 brightness-105 border-2 border-[#1D79F1]", direction == 1 ? "animate-fade-in-right" : "animate-fade-in-left")} imageUrl={projects[(currentId + 1) % projects.length].imageUrl} height={height} width={width} title={projects[(currentId + 1) % projects.length].name} description={projects[(currentId + 1) % projects.length].description} toolsUsed={projects[(currentId + 1) % projects.length].toolsUsed} githubUrl={projects[(currentId + 1) % projects.length].githubUrl} pageUrl={projects[(currentId + 1) % projects.length].pageUrl}></ProjectContent>
            <ProjectContent className="scale-75 z-0 brightness-80 blur-xs select-none pointer-events-none" imageUrl={projects[(currentId + 2) % projects.length].imageUrl} height={height} width={width} title={projects[(currentId + 2) % projects.length].name} description={projects[(currentId + 2) % projects.length].description} toolsUsed={projects[(currentId + 2) % projects.length].toolsUsed} githubUrl={projects[(currentId + 2) % projects.length].githubUrl} pageUrl={projects[(currentId + 2) % projects.length].pageUrl}></ProjectContent>

            <HiArrowCircleRight onClick={() => changeId(currentId, enumIterator.RIGHT)} className="text-[8rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>

        </motion.div>

    )

}
