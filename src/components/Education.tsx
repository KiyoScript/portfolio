import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">BS in Information Technology</h4>
              <p className="text-red-500 font-medium mb-2">Eastern Visayas State University - Ormoc City Campus</p>
              <p className="text-gray-600 mb-2">2021 - 2025</p>
              <p className="text-green-600 font-medium">🎓 Graduated: May 27, 2025</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Professional Certificate in Agile and SCRUM</h4>
                <p className="text-gray-600">Udemy</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Computer Systems Servicing NCII Competency Assessment</h4>
                <p className="text-gray-600">TESDA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
