import { ProjectContent } from "@/components/project_content";
import { motion} from "motion/react";
import { ComponentProps, useState } from "react";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface ProjectsProps extends ComponentProps<"section"> {

  langEN: boolean,

}

enum enumIterator {
  
  RIGHT =  1,
  LEFT = -1
  
}

type ProjectsType = {
  
  id: number,
  name: string,
  descriptionPTBR: string,
  descriptionEN: string,
  toolsUsed: string[],
  imageUrl: string,
  githubUrl: string,
  pageUrl: string,
  
}

const height = 373
const width = 683

const projects: ProjectsType[] = [

  {
    "id": 1,
    "name": "GIFDisplay",
    "descriptionPTBR": "GIFDisplay é um app para reproduzir GIFs com fundo transparente, permitindo tocar músicas junto à animação e ajustar a escala e posição do GIF na tela facilmente.",
    "descriptionEN": "GIFDisplay is an app for playing GIFs with a transparent background, allowing you to play music along with the animation and adjust the scale and position of the GIF on screen easily.",
    "toolsUsed": ["C", "GTK 3", "GStreamer"],
    "imageUrl": "/resources/images/projects/gifdisplay1.svg",
    "githubUrl": "https://github.com/Manoel-Nogueira/GIFDisplay",
    "pageUrl": "",
  },
  
  {
    "id": 2,
    "name": "Shop Farm",
    "descriptionPTBR": "Shop Farm é um WebApp que oferece uma interface simples e intuitiva para compra de insumos agrícolas, facilitando o acesso a produtos usados na produção rural.",
    "descriptionEN": "Shop Farm is a WebApp that offers a simple and intuitive interface for purchasing agricultural inputs, making it easier to access products used in rural production.",
    "toolsUsed": ["Java", "Spring Boot", "MySQL", "TypeScript", "React", "TailwindCSS", "Axios"],
    "imageUrl": "/resources/images/projects/shop-farm.svg",
    "githubUrl": "https://github.com/Manoel-Nogueira/Shop-Farm",
    "pageUrl": "",
  },

  {
    "id": 3,
    "name": "Recipe a Day",
    "descriptionPTBR": "Recipe a Day é um WebApp que apresenta uma receita diferente a cada dia, desenvolvido totalmente no front-end, utilizando APIs externas e sem a necessidade de backend.",
    "descriptionEN": "Recipe a Day is a WebApp that presents a different recipe each day, developed entirely on the frontend, utilizing external APIs and without the need for a backend.",
    "toolsUsed": ["Next.js", "TypeScript", "React", "TailwindCSS", "TheMealDB"],
    "imageUrl": "/resources/images/projects/recipe-a-day.svg",
    "githubUrl": "https://github.com/Manoel-Nogueira/Recipe_A_Day",
    "pageUrl": "https://recipeaday.vercel.app",
  },

  {
    "id": 4,
    "name": "Academic Hub",
    "descriptionPTBR": "Academic Hub é um WebApp para gestão educacional, permitindo matrícula de alunos, cadastro de cursos e disciplinas, e controle de aulas, planos, notas e faltas.",
    "descriptionEN": "Academic Hub is a WebApp for educational management, allowing student enrollment, course and discipline registration, and control of classes, plans, grades and absences.",
    "toolsUsed": ["PHP", "Laravel", "TypeScript", "React", "TailwindCSS", "Axios"],
    "imageUrl": "/resources/images/projects/academichub.svg",
    "githubUrl": "https://github.com/Manoel-Nogueira/Academic_Hub",
    "pageUrl": "",
  },

  {
    "id": 5,
    "name": "Citrus Tools",
    "descriptionPTBR": "Citrus Tools é um WebApp que reúne ferramentas baseadas em IA para auxiliar produtores de citrus nas atividades do dia a dia no campo, tornando a gestão mais prática.",
    "descriptionEN": "Citrus Tools is a WebApp that brings together AI-based tools to assist citrus producers with daily activities in the field, making management more practical.",
    "toolsUsed": ["Python", "TypeScript", "React", "TailwindCSS", "Axios"],
    "imageUrl": "/resources/images/projects/citrus-tools.svg",
    "githubUrl": "https://github.com/Manoel-Nogueira/Citrus-Tools",
    "pageUrl": "",
  }

]

export function Projects (props: ProjectsProps) { 

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

        <section id="projects" className="h-screen flex pb-[4rem] sm:pb-0 items-end sm:items-center justify-center scroll-mt-[1.6rem] sm:scroll-mt-[4.688rem]">

          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.1, bounce: 0.1 }}} className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-10 sm:gap-4 drop-shadow-2xl drop-shadow-[#312A57]">
          
            <HiArrowCircleLeft onClick={() => changeId(currentId, enumIterator.LEFT)} className="text-[2rem] sm:text-[3rem] order-2 sm:order-1 text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
            
            <div className="hidden sm:block z-0 order-2 ">
                <ProjectContent className="scale-75 brightness-80 blur-xs select-none pointer-events-none" imageUrl={projects[currentId].imageUrl} height={height} width={width} title={projects[currentId].name} description={props.langEN ? projects[currentId].descriptionEN : projects[currentId].descriptionPTBR} toolsUsed={projects[currentId].toolsUsed} githubUrl={projects[currentId].githubUrl} pageUrl={projects[currentId].pageUrl}></ProjectContent>
            </div>

            <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => {if (info.offset.x < -30) {changeId(currentId, enumIterator.LEFT)} if (info.offset.x > 30) {changeId(currentId, enumIterator.RIGHT)}}} className="z-20 order-1 sm:order-3">
              <ProjectContent key={currentId + 1} className={twMerge("brightness-105 border-2 border-[#1D79F1]/50", direction == 1 ? "animate-fade-in-right" : "animate-fade-in-left")} imageUrl={projects[(currentId + 1) % projects.length].imageUrl} height={height} width={width} title={projects[(currentId + 1) % projects.length].name} description={props.langEN ? projects[(currentId + 1) % projects.length].descriptionEN : projects[(currentId + 1) % projects.length].descriptionPTBR} toolsUsed={projects[(currentId + 1) % projects.length].toolsUsed} githubUrl={projects[(currentId + 1) % projects.length].githubUrl} pageUrl={projects[(currentId + 1) % projects.length].pageUrl}></ProjectContent>
            </motion.div>

            <div className="hidden sm:block z-0 order-4">
              <ProjectContent className="scale-75 brightness-80 blur-xs select-none pointer-events-none hidden sm:block" imageUrl={projects[(currentId + 2) % projects.length].imageUrl} height={height} width={width} title={projects[(currentId + 2) % projects.length].name} description={props.langEN ? projects[(currentId + 2) % projects.length].descriptionEN : projects[(currentId + 2) % projects.length].descriptionPTBR} toolsUsed={projects[(currentId + 2) % projects.length].toolsUsed} githubUrl={projects[(currentId + 2) % projects.length].githubUrl} pageUrl={projects[(currentId + 2) % projects.length].pageUrl}></ProjectContent>
            </div>

            <HiArrowCircleRight onClick={() => changeId(currentId, enumIterator.RIGHT)} className="text-[2rem] sm:text-[3rem] order-3 sm:order-5 text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>

          </motion.div>

        </section>

    )

}