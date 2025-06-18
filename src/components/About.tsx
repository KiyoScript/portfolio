export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Objectives</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I build web things that people use. I like to make sure they look good and work well. I mostly use some
              known tools to make apps that can grow big and are easy to maintain.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Do you want to work with someone who understands? That&apos;s what I love. I know how to make the things you
              see and the things you don&apos;t. My goal? Make strong, useful stuff that really helps people.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-600">John Lloyd D. de Sape</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Role:</span>
                <span className="text-gray-600">Software Developer</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Location:</span>
                <span className="text-gray-600">Ormoc City, Leyte</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Education:</span>
                <span className="text-gray-600">BSIT Graduate (2025)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Experience:</span>
                <span className="text-gray-600">3+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
