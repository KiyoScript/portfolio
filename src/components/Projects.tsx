"use client"

import { useState } from "react"
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "RPM & PIS",
      description:
        "The system called “Rental Property Management and Payment Inventory System” aims to automate all the manual processes encountered by the clients. The system will solve the problems and challenges encountered such as delayed payments, and inaccurate reporting.",
      technologies: ["Ruby on Rails", "Kotlin", "PostgreSQL", "Bootstrap", "Stimulus JS"],
      category: "fullstack",
      github: "https://github.com/KiyoScript/RentDito",
      live: null,
      featured: true,
      status: "Completed",
    },
    {
      id: 2,
      title: "EVSU-OC MONITORING",
      description: "An RFID-based attendance system for EVSU-Ormoc Campus. Scans student IDs to log attendance, display their photo in real-time, and store data for admin reporting.",
      technologies: ["Ruby on Rails", "Kotlin", "PostgreSQL", "Bootstrap", "RFID", "Stimulus JS", "Push Notifications"],
      category: "web",
      github: "https://github.com/KiyoScript/EVSU_OC_Monitoring",
      live: null,
      featured: true,
      status: "Completed",
    },
    {
      id: 3,
      title: "Tasktifier",
      description:
        "A task management app integrated with the Google Classroom API, allowing EVSU-OC students to view and manage their class tasks without needing to open Google Classroom.",
      technologies: ["Ruby on Rails", "Kotlin", "PostgreSQL", "Bootstrap", "Stimulus JS"],
      category: "web",
      github: "https://github.com/KiyoScript/tasktifier",
      live: null,
      featured: false,
      status: "Completed",
    },
    {
      id: 4,
      title: "Linao Record Keeping System",
      description:
        "A digital record-keeping system developed for a local health center to replace manual paper-based patient records. It helps staff securely store, access, and manage patient data more efficiently.",
      technologies: ["Ruby on Rails", "Kotlin", "PostgreSQL", "Bootstrap", "Stimulus JS", "Push Notifications"],
      category: "web",
      github: "https://github.com/KiyoScript/lrsk",
      live: null,
      featured: false,
      status: "Completed",
    },
    {
      id: 5,
      title: "HOP",
      description:
        "A ride-hailing mobile app designed for commuters in Ormoc City. It allows users to book rides, track drivers, and navigate routes in real-time.",
      technologies: ["React Native", "Expo", "AsyncStorage", "Push Notifications"],
      category: "mobile",
      github: "https://github.com/KiyoScript",
      live: null,
      featured: false,
      status: "In Development",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="w-4 h-4" /> },
    { id: "fullstack", label: "Full Stack", icon: <Globe className="w-4 h-4" /> },
    { id: "web", label: "Web Apps", icon: <Globe className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, mobile applications, and
            full-stack solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">🌟 Featured Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "In Development"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
                    target="_blank"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeFilter === category.id
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-500"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "In Development"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">Featured</span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-red-500 transition-colors"
                    title="View Code"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-gray-600 hover:text-red-500 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <span className="text-xs text-gray-500 capitalize">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-red-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/KiyoScript"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-500 transition-colors font-medium"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
