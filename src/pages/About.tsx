function About() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundColor: "#0D0D0D",
        backgroundImage: "url(/About/About-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
        height: "100vh",
        fontFamily: '"ClashOfClans", sans-serif',
        overflow: "hidden",
      }}
    >
      {/* Branch decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/About/branch-1.png"
          alt="Branch decoration 1"
          className="absolute top-0 left-0 w-auto h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none"
          style={{ zIndex: 3 }}
        />
        <img
          src="/About/branch-2.png"
          alt="Branch decoration 2"
          className="absolute top-0 right-0 w-auto h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-none"
          style={{ zIndex: 3 }}
        />
      </div>

      {/* Wizard character */}
      <div
        className="absolute left-10 sm:left-14 md:left-18 lg:left-54 top-1/2 transform -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 4 }}
      >
        <img
          src="/About/wizard.png"
          alt="Wizard character"
          className="w-auto h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
        />
      </div>

      {/* Wooden board with text */}
      <div
        className="absolute right-16 sm:right-18 md:right-20 -top-4 sm:-top-2 md:top-0"
        style={{ zIndex: 2 }}
      >
        <img
          src="/About/board.png"
          alt="Wooden board"
          className="w-auto h-auto max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-3xl"
        />

        {/* Text overlay on the board */}
        <div className="absolute inset-0 flex flex-col justify-start items-center pt-18 sm:pt-28 md:pt-80 px-4 sm:px-6 md:px-8">
          {/* Top text */}
          <div className="text-center mb-3 sm:mb-4">
            <p
              className="text-lg sm:text-xl md:text-2xl font-clash leading-tight drop-shadow-lg"
              style={{ color: "#45290E" }}
            >
              Empowering Future
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl font-clash leading-tight drop-shadow-lg"
              style={{ color: "#45290E" }}
            >
              Mathematicians
            </p>
          </div>

          {/* Main title */}
          <div className="text-center mb-4 sm:mb-6">
            <p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-clash-bold leading-tight"
              style={{
                color: "#FDCB3F",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              About Math
            </p>
            <p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-clash-bold leading-tight"
              style={{
                color: "#FDCB3F",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Mentor
            </p>
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <p
              className="text-base sm:text-lg md:text-xl font-clash text-white leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              Empowering students to
            </p>
            <p
              className="text-base sm:text-lg md:text-xl font-clash text-white leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              Master Mathematics through
            </p>
            <p
              className="text-base sm:text-lg md:text-xl font-clash text-white leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              personalized learning
            </p>
            <p
              className="text-base sm:text-lg md:text-xl font-clash text-white leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
