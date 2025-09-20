function About() {
  return (
    <>
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
                    Learn from experienced math educators who provide
                    personalized support and mentorship
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
                    Engage with dynamic visualizations, simulations, and
                    hands-on activities that make math come alive
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

        {/* Third Section - Our Foundation */}
        <div className="w-full relative pt-0 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 2xl:pb-48">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Section Title */}
            <div className="text-center mb-3 sm:mb-4 md:mb-6">
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clash-bold leading-tight mb-2 sm:mb-3"
                style={{
                  color: "#FDCB3F",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Our Foundation
              </h2>
              <div
                className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-clash text-white leading-relaxed max-w-4xl mx-auto text-center"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                <p>Built on principles that drive excellence in</p>
                <p>mathematical education</p>
              </div>
            </div>

            {/* Desktop Layout - Hidden on mobile/tablet */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              {/* Our Mission Card - Left */}
              <div className="relative flex-shrink-0 -mr-6 xl:-mr-8 2xl:-mr-10">
                <img
                  src="/About/about-card-2.png"
                  alt="Our Mission Card"
                  className="w-[320px] h-auto xl:w-[380px] 2xl:w-[420px] object-contain"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 xl:p-8">
                  <h3
                    className="text-lg xl:text-xl 2xl:text-2xl font-clash-bold text-center mb-3 xl:mb-4 leading-tight"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="text-xs xl:text-sm 2xl:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "#F5F0E1",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Customized curriculum that adapts to your unique learning
                    style, pace and goal for optimal understanding
                  </p>
                </div>
              </div>

              {/* Elf Character - Center */}
              <div className="flex-shrink-0 -mt-4 xl:-mt-6 2xl:-mt-8 relative z-10">
                <img
                  src="/About/elf-character.png"
                  alt="Elf Character"
                  className="w-[260px] h-auto xl:w-[320px] 2xl:w-[380px] object-contain"
                />
              </div>

              {/* Our Vision Card - Right */}
              <div className="relative flex-shrink-0 -ml-6 xl:-ml-8 2xl:-ml-10">
                <img
                  src="/About/about-card-2.png"
                  alt="Our Vision Card"
                  className="w-[320px] h-auto xl:w-[380px] 2xl:w-[420px] object-contain"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 xl:p-8">
                  <h3
                    className="text-lg xl:text-xl 2xl:text-2xl font-clash-bold text-center mb-3 xl:mb-4 leading-tight"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="text-xs xl:text-sm 2xl:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "#F5F0E1",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Customized curriculum that adapts to your unique learning
                    style, pace and goal for optimal understanding
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout - Hidden on desktop */}
            <div className="lg:hidden flex flex-col items-center gap-6 sm:gap-8">
              {/* Elf Character - Top */}
              <div className="flex justify-center">
                <img
                  src="/About/elf-character.png"
                  alt="Elf Character"
                  className="w-[120px] h-auto sm:w-[140px] md:w-[160px] object-contain"
                />
              </div>

              {/* Cards - Bottom */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-xs mx-auto px-4">
                {/* Our Vision Card */}
                <div className="relative w-full">
                  <img
                    src="/About/about-card-2.png"
                    alt="Our Vision Card"
                    className="w-full h-auto object-contain max-w-[280px] mx-auto"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5">
                    <h3
                      className="text-sm sm:text-base md:text-lg font-clash-bold text-center mb-2 sm:mb-3 leading-tight"
                      style={{
                        color: "#FDCB3F",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      Our Vision
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-clash text-center leading-relaxed"
                      style={{
                        color: "#F5F0E1",
                        fontFamily: '"ClashOfClans", sans-serif',
                      }}
                    >
                      Customized curriculum that adapts to your unique learning
                      style, pace and goal for optimal understanding
                    </p>
                  </div>
                </div>

                {/* Our Mission Card */}
                <div className="relative w-full">
                  <img
                    src="/About/about-card-2.png"
                    alt="Our Mission Card"
                    className="w-full h-auto object-contain max-w-[280px] mx-auto"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5">
                    <h3
                      className="text-sm sm:text-base md:text-lg font-clash-bold text-center mb-2 sm:mb-3 leading-tight"
                      style={{
                        color: "#FDCB3F",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      Our Mission
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-clash text-center leading-relaxed"
                      style={{
                        color: "#F5F0E1",
                        fontFamily: '"ClashOfClans", sans-serif',
                      }}
                    >
                      Customized curriculum that adapts to your unique learning
                      style, pace and goal for optimal understanding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section - Master Math with Free Package */}
        <div className="w-full relative -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-72 xl:-mt-80 2xl:-mt-96 pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 xl:pt-12 xl:pb-24 2xl:pt-14 2xl:pb-28">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative overflow-hidden">
            {/* Modern Card with Branches - Full Width */}
            <div className="relative w-full">
              <img
                src="/About/modern-card.png"
                alt="Modern card with branches background"
                className="w-full h-auto object-contain"
                style={{
                  minHeight: "600px",
                }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-12 lg:p-16 xl:p-20 2xl:p-24">
                {/* Text Content - Lowered more */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: "45%" }}
                >
                  {/* Main Heading */}
                  <h2
                    className="text-4xl md:text-6xl lg:text-3xl font-clash-bold text-center md:mb-4 leading-tight"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Master Math with our
                  </h2>
                  <h2
                    className="text-4xl md:text-6xl lg:text-2xl font-clash-bold text-center mb-1 md:mb-7 leading-tight"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Free Package
                  </h2>

                  {/* Subtitle */}
                  <p
                    className="text-lg md:text-3xl lg:text-2xl font-clash text-center leading-relaxed max-w-2xl md:max-w-4xl lg:max-w-4xl mx-auto"
                    style={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Customized curriculum that adapts to your unique learning
                    style, pace and goal for optimal understanding
                  </p>
                </div>

                {/* Button - Lowered a lot more with negative margins */}
                <button
                  className="mt-120 relative cursor-pointer hover:scale-105 transition-transform duration-200"
                  style={{
                    marginBottom: "-2.5rem",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <img
                    src="/About/modern-card-button.png"
                    alt="Start Free Trial button"
                    className="w-auto h-auto max-w-[280px] md:max-w-[380px] lg:max-w-[360px]"
                    style={{ minWidth: "160px" }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Tablet Layout - NEW: Specific tablet layout with responsive sizing */}
          <div className="hidden md:block lg:hidden relative overflow-hidden">
            {/* Tablet Modern Card - Full Width */}
            <div className="relative w-full">
              <img
                src="/About/modern-card.png"
                alt="Modern card with branches background"
                className="w-full h-auto object-cover"
                style={{
                  minHeight: "500px",
                }}
              />

              {/* Tablet Content Overlay - Responsive text and button sizing */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-8 gap-4">
                {/* Text Content - Smaller for large tablets */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: "42%" }}
                >
                  {/* Main Heading - Smaller for 1024x1366 and 1024x600 */}
                  <h2
                    className="mt-2 text-2xl font-clash-bold text-center mb-1 leading-tight md:[min-height:1366px]:text-sm md:[min-width:1024px][max-height:600px]:text-sm"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Master Math with our
                  </h2>
                  <h2
                    className="text-2xl font-clash-bold text-center mb-2 leading-tight md:[min-height:1366px]:text-sm md:[min-width:1024px][max-height:600px]:text-sm"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Free Package
                  </h2>

                  {/* Subtitle - Smaller for large tablets */}
                  <p
                    className="text-lg font-clash text-center leading-relaxed max-w-lg mx-auto [min-width:780px][max-width:1024px]:text-lg"
                    style={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Customized curriculum that adapts to your unique learning
                    style, pace and goal for optimal understanding
                  </p>
                </div>

                {/* Button - Larger for all tablets, positioned lower */}
                <button
                  className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-105 transition-transform duration-200"
                  style={{
                    bottom: "2%",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <img
                    src="/About/modern-card-button.png"
                    alt="Start Free Trial button"
                    className="w-auto h-auto max-w-[200px] md:max-w-[240px]"
                    style={{ minWidth: "160px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden relative overflow-hidden">
            <div className="relative w-full">
              <img
                src="/About/modern-card-mobile.png"
                alt="Modern card mobile"
                className="w-full h-auto object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 gap-4 sm:mt-40 mt-30">
                {/* Text */}
                <div className="flex flex-col items-center text-center">
                  <h2
                    className="text-3xl font-clash-bold text-center mb-3 [@media(max-width:420px)]:text-2xl [@media(max-width:420px)]:mt-8"
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    Master Math
                  </h2>
                  <h2
                    className="text-2xl max-w-[200px] "
                    style={{
                      color: "#FDCB3F",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontFamily: '"ClashOfClans", sans-serif',
                    }}
                  >
                    with our Free Package
                  </h2>
                  <p className="text-md font-clash text-white text-center max-w-[300px] sm:max-w-[320px] leading-relaxed mt-10 [@media(max-width:516px)]:max-w-[200px]">
                    Customized curriculum that adapts to your unique learning
                    style, pace and goal for optimal understanding
                  </p>
                </div>

                {/* Button */}
                <div className="mt-4 sm:mt-[-50px] [@media(max-width:420px)]:mt-[-60px] [@media(max-width:348px)]:mt-[-300px] ">
                  <img
                    src="/About/modern-card-button.png"
                    alt="Start Free Trial button"
                    className="w-auto h-auto max-w-[160px] sm:max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section - What Our Students Say */}
        <div className="w-full relative py-16 sm:py-20 md:py-24 lg:py-4 xl:py-6 2xl:py-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Section Title */}
            <div className="text-center mb-20 sm:mb-24 md:mb-28 lg:mb-16 xl:mb-20">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash-bold leading-tight mb-2 sm:mb-3 md:mb-4"
                style={{
                  color: "#FDCB3F",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  fontFamily: '"ClashOfClans", sans-serif',
                }}
              >
                What Our Students Say
              </h2>
            </div>

            {/* Desktop Layout - 3 cards in a row */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-6 2xl:gap-8 place-items-center">
              {/* Testimonial Card 1 */}
              <div className="relative w-full max-w-[600px] xl:max-w-[750px] 2xl:max-w-[900px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110 xl:scale-125 2xl:scale-140"
                />
                {/* Rating Circle */}
                <div className="absolute -top-20 xl:-top-18 2xl:-top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-40 h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-14 xl:-top-12 2xl:-top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-10 xl:px-12 2xl:px-16 pt-24 xl:pt-28 2xl:pt-32 pb-12 xl:pb-16 2xl:pb-20">
                  {/* Student Name */}
                  <h3
                    className="text-base xl:text-lg 2xl:text-xl font-clash-bold text-center mb-2 xl:mb-3 2xl:mb-4"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 xl:mb-4 2xl:mb-5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-xl xl:text-2xl 2xl:text-3xl mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-xs xl:text-sm 2xl:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="relative w-full max-w-[600px] xl:max-w-[750px] 2xl:max-w-[900px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110 xl:scale-125 2xl:scale-140"
                />
                {/* Rating Circle */}
                <div className="absolute -top-20 xl:-top-18 2xl:-top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-40 h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-14 xl:-top-12 2xl:-top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-10 xl:px-12 2xl:px-16 pt-24 xl:pt-28 2xl:pt-32 pb-12 xl:pb-16 2xl:pb-20">
                  {/* Student Name */}
                  <h3
                    className="text-base xl:text-lg 2xl:text-xl font-clash-bold text-center mb-2 xl:mb-3 2xl:mb-4"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 xl:mb-4 2xl:mb-5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-xl xl:text-2xl 2xl:text-3xl mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-xs xl:text-sm 2xl:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="relative w-full max-w-[600px] xl:max-w-[750px] 2xl:max-w-[900px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110 xl:scale-125 2xl:scale-140"
                />
                {/* Rating Circle */}
                <div className="absolute -top-20 xl:-top-18 2xl:-top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-40 h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-14 xl:-top-12 2xl:-top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-10 xl:px-12 2xl:px-16 pt-24 xl:pt-28 2xl:pt-32 pb-12 xl:pb-16 2xl:pb-20">
                  {/* Student Name */}
                  <h3
                    className="text-base xl:text-lg 2xl:text-xl font-clash-bold text-center mb-2 xl:mb-3 2xl:mb-4"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 xl:mb-4 2xl:mb-5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-xl xl:text-2xl 2xl:text-3xl mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-xs xl:text-sm 2xl:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Single column */}
            <div className="md:hidden flex flex-col items-center gap-24 sm:gap-28">
              {/* Testimonial Card 1 */}
              <div className="relative w-full max-w-[500px] sm:max-w-[600px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-135 sm:scale-150"
                />
                {/* Rating Circle */}
                <div className="absolute -top-13 sm:-top-12 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-44 h-44 sm:w-48 sm:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-7 sm:-top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base sm:text-base font-clash-bold text-center mb-2 sm:mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-lg sm:text-lg mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm sm:text-sm font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="relative w-full max-w-[500px] sm:max-w-[600px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-135 sm:scale-150"
                />
                {/* Rating Circle */}
                <div className="absolute -top-13 sm:-top-12 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-44 h-44 sm:w-48 sm:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-7 sm:-top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base sm:text-base font-clash-bold text-center mb-2 sm:mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-lg sm:text-lg mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm sm:text-sm font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="relative w-full max-w-[500px] sm:max-w-[600px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-135 sm:scale-150"
                />
                {/* Rating Circle */}
                <div className="absolute -top-13 sm:-top-12 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-44 h-44 sm:w-48 sm:h-48"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-7 sm:-top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base sm:text-lg font-clash-bold text-center mb-2 sm:mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-lg sm:text-xl mx-0.5"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm sm:text-base font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>
            </div>

            {/* Tablet Layout - Single column with smaller cards */}
            <div className="hidden md:flex lg:hidden flex-col items-center gap-20">
              {/* Testimonial Card 1 */}
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110"
                />
                {/* Rating Circle */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-60 h-60"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-16 pt-16 pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base font-clash-bold text-center mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg mx-0.5">
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110"
                />
                {/* Rating Circle */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-60 h-60"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-16 pt-16 pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base font-clash-bold text-center mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg mx-0.5">
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/About/about-rating-card.png"
                  alt="Student testimonial card"
                  className="w-full h-auto object-contain scale-110"
                />
                {/* Rating Circle */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src="/About/about-rating-circle.png"
                    alt="Rating circle"
                    className="w-60 h-60"
                  />
                </div>
                {/* Profile Image */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden z-20">
                  <img
                    src="/About/about-rating-image.png"
                    alt="Student profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-16 pt-16 pb-12">
                  {/* Student Name */}
                  <h3
                    className="text-base font-clash-bold text-center mb-3"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Sajad AHamed
                  </h3>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg mx-0.5">
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p
                    className="text-sm font-clash text-center leading-relaxed"
                    style={{
                      color: "white",
                      fontFamily: '"ClashOfClans", sans-serif',
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Join our community in minutes by creating your free tutor
                    profile. Highlight your skills, set your subjects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gap between section 5 and footer */}
        <div className="w-full py-8 lg:py-12 xl:py-16 2xl:py-20"></div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="/student/logo.png" alt="Math Mentor" />
              </div>
              <p className="footer-tagline">
                Empowering students to master mathematics
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Home</h4>
                <h4>Services</h4>
                <h4>About Us</h4>
                <h4>Blog</h4>
              </div>

              <div className="footer-column">
                <h4>Follow us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <p className="contact-email">hello@mathmentor.com</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <p className="footer-copyright">
              © 2025 Mathmentor. All rights reserved. Privacy Policy | Terms of
              Service
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
