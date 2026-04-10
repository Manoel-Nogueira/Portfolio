"use client";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Hamburger } from "@/components/hamburger";
import { NavBar } from "@/components/navbar";
import { Home } from "@/sections/home";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { AboutMe } from "@/sections/about_me";

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

export default function Page () {

  const [langEN, setLangEN] = useState(true)

  const isMobile = useMediaQuery({ query: '(min-width: 640px)' }) ?? true

  function toggleLang () {

    setLangEN(!langEN)

  }

  return (

    <div className="h-[400vh] w-full bg-[url(/resources/images/layered-steps.svg)] bg-repeat animate-horizontal">
      
      <header>

        <div className="hidden sm:block">
          <NavBar toggleLang={toggleLang} langEN={langEN}/> 
        </div>

        <div className="block sm:hidden">
          <Hamburger toggleLang={toggleLang} langEN={langEN}/>
        </div>

      </header>

      <main className="px-[1.4rem] sm:px-[3.7rem] w-full">

        <Home langEN={langEN}/>
        <Skills/>
        <Projects langEN={langEN}/>
        <AboutMe langEN={langEN} isMobile={isMobile}/>    
        
      </main>

    </div>

  );

}