function About() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#0D0D0D",
        backgroundImage: "url(/About/About-bg.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">About</h1>
          <p className="text-xl text-gray-300">
            Welcome to our About page with custom background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              About Math Mentor
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              This is where your About page content will go. The background is
              set up with the #0D0D0D base color and the About-bg.png image
              overlay as requested.
            </p>
            <p className="text-lg leading-relaxed">
              The background is scrollable and will maintain its appearance as
              users scroll through the content.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
