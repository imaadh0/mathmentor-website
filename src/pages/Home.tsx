function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 font-clash">
            Welcome to Math Mentor
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your math learning experience with personalized,
            AI-powered tutoring that adapts to your unique learning style and
            pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
            <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-3 font-clash-bold">
              Personalized Learning
            </h3>
            <p className="text-gray-300">
              AI-powered system adapts to your learning pace and style for
              optimal understanding.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Expert Guidance
            </h3>
            <p className="text-gray-300">
              Learn from experienced educators who understand mathematics
              challenges.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Progress Tracking
            </h3>
            <p className="text-gray-300">
              Monitor your improvement with detailed analytics and personalized
              feedback.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-clash">
            Ready to Master Mathematics?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their relationship
            with math through our innovative approach.
          </p>
          <a
            href="/about"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
