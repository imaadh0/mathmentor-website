function About() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#0D0D0D",
        backgroundImage: "url(/About/About-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
        fontFamily: '"ClashOfClans", sans-serif',
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
        className="absolute left-16 sm:left-20 md:left-24 lg:left-62 top-1/2 transform -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <img
          src="/About/wizard.png"
          alt="Wizard character"
          className="w-auto h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
        />
      </div>

      {/* Wooden board with text */}
      <div
        className="absolute right-4 sm:right-6 md:right-8 -top-4 sm:-top-2 md:top-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <img
          src="/About/board.png"
          alt="Wooden board"
          className="w-auto h-auto max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-3xl"
        />

        {/* Text overlay on the board */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
          {/* Top text */}
          <div className="text-center mb-2">
            <p className="text-xs sm:text-sm font-clash text-black leading-tight">
              Empowering Future
            </p>
            <p className="text-xs sm:text-sm font-clash text-black leading-tight">
              Mathematicians
            </p>
          </div>

          {/* Main title */}
          <div className="text-center mb-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash-bold text-yellow-500 leading-tight">
              About Math
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash-bold text-yellow-500 leading-tight">
              Mentor
            </p>
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <p className="text-xs font-clash text-black leading-tight">
              Empowering students to master mathematics through
            </p>
            <p className="text-xs font-clash text-black leading-tight">
              personalized learning experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
