"use client";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Star, Eye, Code2, Zap, Users, Calendar } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
     {
      title: "Gestion des paiement et facturation d'un etablissement scolaire",
      description: "Application de gestion des paiements et de facturation pour les établissements scolaires, avec suivi des transactions et génération de rapports.",
      image: "/gestion-payement.png",
      technologies: ["Vue.js", "Laravel", "Tailwind CSS", "MySql"],
      githubUrl: "https://github.com/abdoulahi21",
      liveUrl: "https://example.com",
      featured: true,
      category: "fullstack",
     
      //gradient: "from-orange-500 to-red-500",
      year: "2024"
    },
    
    {
      title: "E-Recruitment Platform",
      description:
        "Application de recrutement moderne avec gestion des candidatures, intégration de calendrier et notifications en temps réel.",
      image: "/e-recrutement.png",
      technologies: ["Laravel", "Filament", "Boostrap", "MySql", "Breeze"],
      githubUrl: "https://github.com/abdoulahi21/e-recrutement",
      liveUrl: "https://example.com",
      featured: true,
      category: "fullstack",
     
     // gradient: "from-blue-500 to-cyan-500",
      year: "2025"
    },
    {
      title: "AI-Powered Weather Dashboard",
      description: "Tableau de bord météo intelligent avec prévisions géolocalisées et visualisations interactives alimentées par IA.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "TensorFlow.js", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "frontend",
      gradient: "from-green-500 to-teal-500",
      year: "2023"
    },
    {
      title: "E-Commerce Platform",
      description:
        "Une solution e-commerce complète avec intégration de paiement, gestion d'inventaire et tableau de bord administrateur.",
      image: "/e-commerce.png",
      technologies: ["Vue.js", "Laravel", "Stripe", "MySql", "Tailwind CSS"],
      githubUrl: "https://github.com/abdoulahi21/Manager-Product-Front-End",
      liveUrl: "#",
      featured: false,
      category: "fullstack",
      
      gradient: "from-purple-500 to-pink-500",
      year: "2024"
    },
    {
      title: "Interactive Portfolio 3D",
      description: "Portfolio moderne et interactif avec animations 3D, transitions fluides et expérience utilisateur immersive.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb",
      technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "frontend",
     
      gradient: "from-indigo-500 to-purple-500",
      year: "2024"
    },
    {
      title: "Application Mobile de Coran(Sourates+)",
      description: "Application mobile interactive pour la lecture et l'écoute du Coran, avec fonctionnalités de recherche et de favoris.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb",
      technologies: ["Flutter", "Firebase", "Quran API", "Dart", "Provider"],
      githubUrl: "https://github.com/abdoulahi21/sourates-",
      liveUrl: "https://example.com",
      featured: false,
      category: "mobile",
      stats: { stars: 78, views: "1.4k", likes: 54 },
      gradient: "from-pink-500 to-rose-500",
      year: "2025"
    },
  ]

  const categories = [
    { id: "all", label: "Tous", icon: Code2 },
    { id: "fullstack", label: "Full-Stack", icon: Zap },
    { id: "frontend", label: "Frontend", icon: Eye },
    { id: "mobile", label: "Mobile", icon: Users }
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full transform -translate-y-12"></div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10">
            Projets Innovants
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative z-10">
            Découvrez une sélection de mes créations les plus récentes, alliant innovation technologique, 
            design moderne et solutions pratiques pour des défis du monde réel.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-muted-foreground hover:text-foreground border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Featured Projects - Large Cards */}
        {filter === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
              Projets Vedettes
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden h-64">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 z-10`}></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        <Star className="w-3 h-3 mr-1" fill="currentColor" />
                        Vedette
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="secondary" className="bg-black/20 text-white backdrop-blur-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Github className="w-4 h-4" />
                       
                      </div>
                     
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className={`border-slate-300 dark:border-slate-600 hover:scale-110 transition-transform duration-200 ${
                            hoveredProject === index ? 'animate-pulse' : ''
                          }`}
                          style={{
                            animationDelay: `${techIndex * 100}ms`
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code Source
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300" 
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le Projet
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(filter === "all" ? regularProjects : filteredProjects).map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 bg-white dark:bg-slate-800 hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(index + 100)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Vedette
                  </Badge>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/20 text-white backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                    <Github className="w-3 h-3" />
                   
                  </div>
                 
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={`text-xs border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform duration-200 ${
                        hoveredProject === index + 100 ? 'animate-pulse' : ''
                      }`}
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300" 
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" 
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Aucun projet trouvé</h3>
            <p className="text-muted-foreground">Essayez de sélectionner une autre catégorie.</p>
          </div>
        )}
      </div>
    </section>
  )
}