import { Button } from "@/components/button";
import { motion } from "motion/react";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { ComponentProps } from "react";

interface AboutMeProps extends ComponentProps<"section"> {

  langEN: boolean,
  isMobile: boolean,

}

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

export function AboutMe (props: AboutMeProps) {

    return (

        <section id="about-me" className="h-screen flex items-center justify-center">
          
          <div className="max-h-[27.106rem] h-full flex flex-col-reverse sm:flex-row items-center justify-end gap-y-[1rem] sm:gap-x-[4rem]"> 

            <div className="h-full flex sm:flex-col items-center justify-center gap-y-10"> 
              
              <motion.div initial={{opacity: 0, x: props.isMobile ? -200  : 0}} whileInView={{opacity: 100, x: 0}} transition={{ duration: 0.5 }}>
                <Image src="/resources/images/me.svg" height="1200" width="1666" alt="about me image" className="h-[8rem] w-[14rem] sm:h-[18rem] sm:w-[18rem] rounded-full drop-shadow-2xl drop-shadow-[#312A57] border-3 border-[#1D79F1]/75 select-none"/>
              </motion.div>
              
              <motion.div  className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-x-[1rem]" initial={{opacity: 0, y: props.isMobile ? 60 : 0 }} whileInView={{opacity: 100, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>

                <Image src="/resources/images/pixelarts/steve.gif" height="160" width="150" alt="steve" className="h-[2.4rem] sm:h-[3.6rem] w-[2.3rem] sm:w-[3.5rem]"/>

                <div className="flex items-center gap-x-[0.5rem]"> 

                  <Button type="button" url="https://github.com/Manoel-Nogueira">
                    <IoLogoGithub className="cursor-pointer text-[1.9rem] sm:text-[3rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                  <Button type="button" url="https://github.com/Manoel-Nogueira">
                    <IoLogoLinkedin className="cursor-pointer text-[2.1rem] sm:text-[3.3rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                  <Button type="button" url="mailto: nogueirafilho888@gmail.com">
                    <BiLogoGmail className="cursor-pointer text-[2.2rem] sm:text-[3.5rem] text-[#1D79F1] hover:text-[#4C98FF] active:text-[#1662C1] hover:scale-110 active:scale-85 ease-linear duration-50"/>
                  </Button>

                </div>

              </motion.div >

            </div>

            <motion.div  className="h-full bg-[#1F3A65]/50 border-2 border-[#1D79F1]/50 max-w-[35rem] w-full p-[1rem] sm:p-[2rem] flex items-center justify-center rounded-3xl drop-shadow-2xl drop-shadow-[#1D1933]" initial={{opacity: 0, x: props.isMobile ? 100 : 0 }} whileInView={{opacity: 100, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>

              <p className="whitespace-pre-line text-justify text-[0.9rem] sm:text-[1.4rem] font-jockey text-[#4C98FF]/70"> 
                {aboutme[props.langEN ? "EN" : "PT-BR"]}
              </p>

            </motion.div >

          </div>

        </section>

    )

}