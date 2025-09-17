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
          className="absolute top-0 left-0 w-auto h-auto max-w-[180px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-none"
          style={{ zIndex: 20 }}
        />
        <img
          src="/About/branch-2.png"
          alt="Branch decoration 2"
          className="absolute top-0 right-0 w-auto h-auto max-w-[180px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[900px] 2xl:max-w-none"
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Content wrapper - Fixed layout structure */}
      <div className="flex flex-col items-center justify-start h-full relative z-10 xl:flex-row xl:items-start xl:justify-center xl:pl-72 2xl:pl-96 xl:pt-0 2xl:pt-0">
        {/* Wizard - Absolute positioning to avoid affecting board */}
        <div
          className="pointer-events-none order-2 xl:absolute xl:left-24 2xl:left-40 xl:top-20 2xl:top-24"
          style={{ zIndex: 4 }}
        >
          <img
            src="/About/wizard.png"
            alt="Wizard character"
            className="w-auto h-auto max-h-[320px] sm:max-h-[380px] md:max-h-[450px] xl:max-h-[550px] 2xl:max-h-[650px] 3xl:max-h-[750px]"
          />
        </div>

        {/* Board - Improved responsive scaling */}
        <div
          className="relative order-1 xl:order-2 xl:flex-shrink-0 xl:mt-0"
          style={{ zIndex: 1 }}
        >
          <img
            src="/About/board.png"
            alt="Wooden board"
            className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[650px] 2xl:max-w-[750px] 3xl:max-w-[850px]"
          />

          {/* Text overlay - Better responsive text scaling */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 sm:pb-12 md:pb-16 xl:pb-20 2xl:pb-24 px-3 sm:px-4 md:px-6">
            {/* Top text */}
            <div className="text-center mb-2 sm:mb-3 md:mb-4 xl:mb-3 2xl:mb-4">
              <p
                className="text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl font-clash leading-tight drop-shadow-lg"
                style={{ color: "#45290E" }}
              >
                Empowering Future
              </p>
              <p
                className="text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl font-clash leading-tight drop-shadow-lg"
                style={{ color: "#45290E" }}
              >
                Mathematicians
              </p>
            </div>

            {/* Main title */}
            <div className="text-center mb-3 sm:mb-4 md:mb-6 xl:mb-4 2xl:mb-6">
              <p
                className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-clash-bold leading-tight"
                style={{
                  color: "#FDCB3F",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                About Math
              </p>
              <p
                className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-clash-bold leading-tight"
                style={{
                  color: "#FDCB3F",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Mentor
              </p>
            </div>

            {/* Bottom text */}
            <div className="text-center space-y-0.5 md:space-y-1 xl:space-y-0.5 2xl:space-y-1">
              <p
                className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                Empowering students to
              </p>
              <p
                className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                Master Mathematics through
              </p>
              <p
                className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                personalized learning
              </p>
              <p
                className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
