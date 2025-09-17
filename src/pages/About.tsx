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
        fontFamily: '"ClashOfClans", sans-serif',
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

      {/* Second Section - Why Choose Math Mentor - FIXED RESPONSIVE CARDS */}
      <div className="w-full relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 2xl:py-48">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Title */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6">
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clash-bold leading-tight mb-1 sm:mb-2"
              style={{
                color: "#FDCB3F",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              WHY CHOOSE MATH MENTOR?
            </h2>
            <p
              className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-clash text-white leading-relaxed max-w-4xl mx-auto"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              Discover WHY OUR platform is the perfect CHOICE for YOUR Math
              journey.
            </p>
          </div>

          {/* Cards Grid - Larger Responsive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 place-items-center justify-items-center">
            {/* Card 1 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Personalized Learning Paths
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Customized curriculum that adapts to your unique learning
                  style, pace and goal for optimal understanding
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Rapid Skill Development
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Accelerate your learning with focused practice modules
                  designed to build skills efficiently
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Comprehensive Concept Mastery
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Deep dive into mathematical concepts with interactive tools
                  and real-world applications
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Expert Guidance
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Learn from experienced math educators who provide personalized
                  support and mentorship
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Interactive Learning Tools
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Engage with dynamic visualizations, simulations, and hands-on
                  activities that make math come alive
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[360px] 2xl:max-w-[380px] mx-auto flex justify-center">
              <img
                src="/About/landscape-card.png"
                alt="Card background"
                className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[360px] xl:h-[288px] 2xl:w-[380px] 2xl:h-[304px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                  style={{ color: "#A25B2B" }}
                >
                  Progress Tracking
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                  style={{
                    color: "#45290E",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Monitor your growth with detailed analytics and celebrate
                  milestones on your mathematical journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
