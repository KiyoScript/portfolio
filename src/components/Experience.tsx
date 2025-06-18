import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "CO-FOUNDER",
      company: "HOP Delivery Services",
      period: "2025-present",
      description:
        "Developed and maintained the backend using Ruby on Rails API. Built frontend applications using Expo and React Native. Optimized web application performance and scalability. Integrated RESTful APIs to enhance app functionalities.",
      current: true,
    },
    {
      title: "WEB DEVELOPER",
      company: "Bootyard",
      period: "2023-2024",
      description:
        "Worked in a fast-paced development environment, gaining deep expertise in the Ruby on Rails ecosystem, including Turbo Drive and Hotwire Stimulus, to build modern, high-performance web applications.",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <Briefcase className="w-6 h-6 text-red-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-red-500 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.current ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
