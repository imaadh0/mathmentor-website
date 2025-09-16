function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Math Mentor
        </h1>
        <p className="text-lg text-gray-600">
          Navigate to the About page to see our background setup
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Go to About Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
