import { Trophy, Calendar } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      date: "MARCH 2025",
      place: "3RD PLACE",
      description: "Led a team in a Web design competition, building a simple landing page within 2 hours.",
    },
    {
      date: "OCT 2024",
      place: "Competent",
      description: "Successfully passed the Computer Systems Servicing NCII Competency Assessment.",
    },
    {
      date: "APRIL 2024",
      place: "3RD PLACE",
      description: "Led a team in a WebDev Competition, building an E-commerce website within 2 hours.",
    },
    {
      date: "OCT 2023",
      place: "4th PLACE",
      description:
        "(EVCO) Problem solving using codechum within 2 hours and Best Performing Team from the Province of Leyte (JAVA Division).",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <Trophy className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-600">{achievement.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-red-500 mb-2">{achievement.place}</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
