"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Bonjour, je suis Abdou Lahi Diallo, Developpeur Full-Stack"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Je crée de belles applications web responsives en utilisant des technologies modernes. 
                Passionné par le code propre, l’expérience utilisateur et la concrétisation des idées

              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToProjects} size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
<div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 p-2 shadow-xl flex items-center justify-center">
  <div className="w-full h-full rounded-full overflow-hidden">
    <Image
      src="/image.jpeg"
      alt="Diallo Profile"
      width={300}
      height={300}
      className=" object-cover rounded-full"
    />
  </div>
</div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
