"use client"

import { ArrowDown, Github, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="text-red-500">John Lloyd</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">Software Developer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Recent BS Information Technology graduate and Software Developer. I build web and application things that people
              use, ensuring they look good and work well. I use modern tools to create scalable and maintainable
              applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="border- border-red-500 text-red-500 px-8 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200 font-medium"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="mailto:johnlloyddesape@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/KiyoScript" className="text-gray-600 hover:text-red-500 transition-colors" target="_blank">
                <Github size={24} />
              </a>
              <a href="tel:09630515870" className="text-gray-600 hover:text-red-500 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-red-400 to-red-600 rounded-full p-4 flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      alt="John Lloyd D. de Sape"
                      width={280}
                      height={280}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center">
                <span className="text-5xl animate-wave">👋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#about" className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
