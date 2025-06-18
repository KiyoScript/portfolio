import { Code, Database, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software and Programming",
      skills: [
        "Rails, Turbo, Hotwire",
        "JavaScript, Expo",
        "RESTful APIs",
        "Git, Github",
        "PHP",
        "Postman",
        "HTML, CSS, Bootstrap, SASS",
        "CI/CD (Expo, Netlify)",
        "API Documentation",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data and Analytics",
      skills: ["PostgreSQL", "MySQL", "Redis"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interpersonal",
      skills: ["Critical Thinking", "Creativity", "Problem Solving", "Teamwork", "Organization", "Leadership"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Specializations</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-red-500 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
