import { useState } from "react";
import { motion} from "motion/react";
import { ToolIcons } from "@/components/tool_icons";

type SkillsType = {

    name: string,
    iconUrl: string,

}

const skills: SkillsType[] = [
  
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

export function Skills () {

    const [psyduckKey, setPysyduckKey] = useState(0)

    return (

        <section id="skills" className="h-screen flex flex-col-reverse sm:flex-row items-center justify-end sm:justify-center sm:scroll-mt-30 ">
                  
          <motion.div className="w-auto grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-8 drop-shadow-2xl drop-shadow-[#312A57]" variants={{ show: { transition: {delayChildren: 0.1, staggerChildren: 0.01 } }}} initial="hidden" whileInView="show">
            {skills.map((skill) => (
                
                <ToolIcons key={skill.name} icon={skill.iconUrl} name={skill.name} label="text-[#E9E9E9]" height={100} width={100}/>
                
            ))}
          </motion.div>

          <motion.div onViewportEnter={() => setPysyduckKey((psyduckKey + 1))} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1, scale: { type: "spring", visualDuration: 0.08, bounce: 0.5 }}} className="drop-shadow-2xl drop-shadow-[#312A57]" >
            <img key={psyduckKey} src="/resources/images/pixelarts/psyduck.gif" alt="psyduck" className="h-[11.7rem] w-[11.7rem] sm:h-[23.4rem] sm:w-[23.4rem] "/>
          </motion.div>

        </section>

    )
}