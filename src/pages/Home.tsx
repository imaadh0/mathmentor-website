function Home() {
  return (
    <>
      <div
        className="w-full relative"
        style={{
          backgroundColor: "#0D0D0D",
          backgroundImage: "url(/home/home-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          fontFamily: '"ClashOfClans", sans-serif',
        }}
      >
        {/* Hero Section Content */}
        <div className="flex flex-col items-center justify-start pt-16 sm:pt-20 md:justify-center md:pt-0 h-full relative z-10 min-h-screen">
          {/* Hero Sign/Board */}
          <div className="relative flex justify-center items-center w-full">
            <img
              src="/home/hero-bg.png"
              alt="Hero wooden sign"
              className="w-full h-auto object-cover"
            />

            {/* Text overlay on the hero sign */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-8 sm:px-12 md:px-16" style={{ transform: "translateY(-2%)" }}>
              <style>{`
                .mobile-title {
                  font-size: 12px !important;
                }
                @media (min-width: 640px) {
                  .mobile-title {
                    font-size: 1.25rem !important;
                  }
                }
                @media (min-width: 768px) {
                  .mobile-title {
                    font-size: 2.25rem !important;
                  }
                }
                @media (min-width: 1024px) {
                  .mobile-title {
                    font-size: 3rem !important;
                  }
                }
                @media (min-width: 1280px) {
                  .mobile-title {
                    font-size: 3.75rem !important;
                  }
                }
                @media (min-width: 1536px) {
                  .mobile-title {
                    font-size: 4.5rem !important;
                  }
                }
              `}</style>
              {/* Main Title */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h1
                  className="mobile-title font-clash-bold leading-tight mb-1 sm:mb-2 md:mb-3"
                  style={{
                    color: "#A25B2B",
                    textShadow: "2px 2px 4px #F2F1EF",
                  }}
                >
                  Empowering
                </h1>
                <h1
                  className="mobile-title font-clash-bold leading-tight mb-1 sm:mb-2 md:mb-3"
                  style={{
                    color: "#A25B2B",
                    textShadow: "2px 2px 4px #F2F1EF",
                  }}
                >
                  Future
                </h1>
                <h1
                  className="mobile-title font-clash-bold leading-tight"
                  style={{
                    color: "#A25B2B",
                    textShadow: "2px 2px 4px #F2F1EF",
                  }}
                >
                  Mathematicians
                </h1>
              </div>

              {/* Subtitle */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                <p
                  className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-clash leading-relaxed"
                  style={{
                    color: "#45290E",
                    textShadow: "1px 1px 2px #FFFFFF",
                  }}
                >
                  Empowering students to
                </p>
                <p
                  className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-clash leading-relaxed"
                  style={{
                    color: "#45290E",
                    textShadow: "1px 1px 2px #FFFFFF",
                  }}
                >
                  master mathematics through
                </p>
                <p
                  className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-clash leading-relaxed"
                  style={{
                    color: "#45290E",
                    textShadow: "1px 1px 2px #FFFFFF",
                  }}
                >
                  personalized learning experiences.
                </p>
              </div>
              {/* CTA button anchored under board */}
              <a
                href="#start"
                aria-label="Start Free Trial"
                className="absolute left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-200 bottom-[-15%] sm:bottom-[-3%]"
              >
                <div className="relative">
                  <img
                    src="/home/hero-button.png"
                    alt="Start Free Trial button"
                    className="w-auto h-auto max-w-[180px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[540px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-clash">
                      Start Free Trial
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Second Section - Why Choose Math Mentor */}
          <div className="w-full relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 2xl:py-48">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {/* Section Title */}
              <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-clash-bold leading-tight mb-4 sm:mb-6 md:mb-8"
                  style={{
                    color: "#FDCB3F",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  WHY CHOOSE MATH MENTOR?
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-clash text-white leading-relaxed max-w-4xl mx-auto"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Discover WHY OUR platform is the perfect CHOICE for YOUR Math journey.
                </p>
              </div>

              {/* Cards Grid - Three Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 place-items-center">
                {/* Card 1 - Personalized Learning Paths */}
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px]">
                  <img
                    src="/home/section2.png"
                    alt="Personalized Learning Paths"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10">
                    <h3
                      className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-clash-bold text-center mb-3 sm:mb-4 md:mb-3 lg:mb-4 leading-tight"
                      style={{ color: "#A25B2B" }}
                    >
                      Personalized Learning Paths
                    </h3>
                    <p
                      className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-clash text-center leading-relaxed"
                      style={{
                        color: "#45290E",
                        fontFamily: '"ClashOfClans", sans-serif',
                      }}
                    >
                      Customized curriculum that adapts to your unique learning style, pace and goal for optimal understanding
                    </p>
                  </div>
                </div>

                {/* Card 2 - Rapid Skill Development */}
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px]">
                  <img
                    src="/home/section2.png"
                    alt="Rapid Skill Development"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10">
                    <h3
                      className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-clash-bold text-center mb-3 sm:mb-4 md:mb-3 lg:mb-4 leading-tight"
                      style={{ color: "#A25B2B" }}
                    >
                      Rapid Skill Development Path
                    </h3>
                    <p
                      className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-clash text-center leading-relaxed"
                      style={{
                        color: "#45290E",
                        fontFamily: '"ClashOfClans", sans-serif',
                      }}
                    >
                      Accelerate your learning with focused practice modules designed to build skills efficiently
                    </p>
                  </div>
                </div>

                {/* Card 3 - Comprehensive Concept Mastery */}
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px]">
                  <img
                    src="/home/section2.png"
                    alt="Comprehensive Concept Mastery"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10">
                    <h3
                      className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-clash-bold text-center mb-3 sm:mb-4 md:mb-3 lg:mb-4 leading-tight"
                      style={{ color: "#A25B2B" }}
                    >
                      Comprehensive Concept Mastery
                    </h3>
                    <p
                      className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-clash text-center leading-relaxed"
                      style={{
                        color: "#45290E",
                        fontFamily: '"ClashOfClans", sans-serif',
                      }}
                    >
                      Deep dive into mathematical concepts with interactive tools and real-world applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;