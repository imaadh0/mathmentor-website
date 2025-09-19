function Tutor() {
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
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none hidden lg:block">
          <img
            src="/tutor/tutor-branch.png"
            alt="Branch decoration"
            className="absolute top-0 right-0 w-auto h-auto max-w-[180px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-none"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Content wrapper - Fixed layout structure */}
        <div className="flex flex-col items-center justify-start h-full relative z-10 xl:flex-row xl:items-start xl:justify-start xl:pl-20 2xl:pl-28 xl:pt-0 2xl:pt-0">
          {/* Wizard Boy - Absolute positioning */}
          <div
            className="pointer-events-none order-2 xl:absolute xl:right-56 2xl:right-64 xl:top-16 2xl:top-20"
            style={{
              zIndex: 50,
            }}
          >
            <img
              src="/tutor/wizard-boy.png"
              alt="Wizard boy character"
              className="w-auto h-auto max-h-[320px] sm:max-h-[380px] md:max-h-[450px] xl:max-h-[550px] 2xl:max-h-[650px] 3xl:max-h-[750px]"
            />
          </div>

          {/* Hero Card - Improved responsive scaling */}
          <div
            className="relative order-1 xl:order-1 xl:flex-shrink-0 xl:mt-0 xl:ml-8 2xl:ml-16"
            style={{ zIndex: 1 }}
          >
            <img
              src="/tutor/tutor-hero-card.png"
              alt="Tutor hero card"
              className="w-full max-w-[340px] sm:max-w-[450px] md:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[640px] 3xl:max-w-[700px]"
            />

            {/* Text overlay - Better responsive text scaling */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 mt-48 sm:mt-52 md:mt-64 lg:mt-60 xl:mt-80 2xl:mt-80">
              {/* Top text */}
              <div className="text-center mb-2 sm:mb-3 md:mb-4 xl:mb-3 2xl:mb-4">
                <p
                  className="text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl font-clash leading-tight drop-shadow-lg"
                  style={{ color: "#45290E" }}
                >
                  SHARE KNOwledge. Make
                </p>
                <p
                  className="text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl font-clash leading-tight drop-shadow-lg"
                  style={{ color: "#45290E" }}
                >
                  impact. Get Rewarded.
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
                  Teach. Inspire.
                </p>
                <p
                  className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-clash-bold leading-tight"
                  style={{
                    color: "#FDCB3F",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  EARN
                </p>
              </div>

              {/* Bottom text */}
              <div className="text-center space-y-0.5 md:space-y-1 xl:space-y-0.5 2xl:space-y-1">
                <p
                  className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Empower students with YOUR
                </p>
                <p
                  className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  knowledge while building
                </p>
                <p
                  className="text-sm sm:text-base md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-clash text-white leading-tight"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  YOUR tutoring Career Online.
                </p>
              </div>

              {/* Button */}
              <div
                className="mt-4 sm:mt-6 md:mt-14 lg:mt-8 xl:mt-10 2xl:mt-12"
                style={{ transform: "translateY(-30px)" }}
              >
                <img
                  src="/tutor/tutor-hero-button.png"
                  alt="Become a Tutor button"
                  className="w-auto h-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[340px] cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Your Provided Points Expanded */}
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
                YOUR PROVIDED POINTS Expanded
              </h2>
              <p
                className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-clash text-white leading-relaxed max-w-4xl mx-auto"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                Powerful Tools for Tutors
              </p>
            </div>

            {/* Cards Grid - Responsive layout for 5 cards (3+2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 place-items-center justify-items-center">
              {/* Card 1 - Create & Check Quizzes */}
              <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[320px] 2xl:max-w-[340px] mx-auto flex justify-center">
                <img
                  src="/tutor/tutor-points-card.png"
                  alt="Card background"
                  className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[320px] xl:h-[256px] 2xl:w-[340px] 2xl:h-[272px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                    style={{ color: "#A25B2B" }}
                  >
                    Create & Check Quizzes
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                    style={{
                      color: "#45290E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Manage and grade quizzes with ease. Save time with automated
                    results
                  </p>
                </div>
              </div>

              {/* Card 2 - Host Online Classes */}
              <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[320px] 2xl:max-w-[340px] mx-auto flex justify-center">
                <img
                  src="/tutor/tutor-points-card.png"
                  alt="Card background"
                  className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[320px] xl:h-[256px] 2xl:w-[340px] 2xl:h-[272px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                    style={{ color: "#A25B2B" }}
                  >
                    Host Online Classes
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                    style={{
                      color: "#45290E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Use interactive whiteboard and screen-sharing tools to make
                    classes engaging and effective.
                  </p>
                </div>
              </div>

              {/* Card 3 - Progress Tracking */}
              <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[320px] 2xl:max-w-[340px] mx-auto flex justify-center">
                <img
                  src="/tutor/tutor-points-card.png"
                  alt="Card background"
                  className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[320px] xl:h-[256px] 2xl:w-[340px] 2xl:h-[272px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                    style={{ color: "#A25B2B" }}
                  >
                    PROGRESS Tracking
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                    style={{
                      color: "#45290E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    See your improvement over time with analytics.
                  </p>
                </div>
              </div>

              {/* Card 4 - Earn by Teaching */}
              <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[320px] 2xl:max-w-[340px] mx-auto flex justify-center lg:col-start-1 lg:justify-self-center">
                <img
                  src="/tutor/tutor-points-card.png"
                  alt="Card background"
                  className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[320px] xl:h-[256px] 2xl:w-[340px] 2xl:h-[272px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                    style={{ color: "#A25B2B" }}
                  >
                    Earn by Teaching
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                    style={{
                      color: "#45290E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Enjoy flexible tutoring options with competitive payouts, on
                    your schedule.
                  </p>
                </div>
              </div>

              {/* Card 5 - Messaging & Chat Support */}
              <div className="relative group w-full max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[340px] xl:max-w-[320px] 2xl:max-w-[340px] mx-auto flex justify-center lg:col-start-3 lg:justify-self-center">
                <img
                  src="/tutor/tutor-points-card.png"
                  alt="Card background"
                  className="w-[300px] h-[240px] sm:w-[350px] sm:h-[280px] md:w-[360px] md:h-[288px] lg:w-[340px] lg:h-[272px] xl:w-[320px] xl:h-[256px] 2xl:w-[340px] 2xl:h-[272px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-clash-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight"
                    style={{ color: "#A25B2B" }}
                  >
                    Messaging & Chat Support
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-sans text-center leading-relaxed"
                    style={{
                      color: "#45290E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Stay connected with students through built-in chat for
                    guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - How It Works */}
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
                How It Works
              </h2>
              <div
                className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-clash text-white leading-relaxed max-w-4xl mx-auto text-center"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
              >
                <p>Simple steps to start your tutoring journey</p>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash-bold"
                    style={{
                      backgroundColor: "#FDCB3F",
                      color: "#0D0D0D",
                      textShadow: "none",
                    }}
                  >
                    1
                  </div>
                </div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash-bold mb-3 sm:mb-4"
                  style={{
                    color: "#FDCB3F",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Create Profile
                </h3>
                <p
                  className="text-sm sm:text-base md:text-lg font-clash text-white leading-relaxed"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Sign up and create your tutor profile. Highlight your
                  expertise and teaching style.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash-bold"
                    style={{
                      backgroundColor: "#FDCB3F",
                      color: "#0D0D0D",
                      textShadow: "none",
                    }}
                  >
                    2
                  </div>
                </div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash-bold mb-3 sm:mb-4"
                  style={{
                    color: "#FDCB3F",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Get Matched
                </h3>
                <p
                  className="text-sm sm:text-base md:text-lg font-clash text-white leading-relaxed"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Our system matches you with students who need help in your
                  areas of expertise.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash-bold"
                    style={{
                      backgroundColor: "#FDCB3F",
                      color: "#0D0D0D",
                      textShadow: "none",
                    }}
                  >
                    3
                  </div>
                </div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash-bold mb-3 sm:mb-4"
                  style={{
                    color: "#FDCB3F",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Start Teaching
                </h3>
                <p
                  className="text-sm sm:text-base md:text-lg font-clash text-white leading-relaxed"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Begin teaching sessions and help students achieve their
                  mathematical goals while earning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gap between sections */}
        <div className="w-full py-8 lg:py-12 xl:py-16 2xl:py-20"></div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="/student/logo.png" alt="Math Mentor" />
              </div>
              <p className="footer-tagline">
                Empowering tutors to share knowledge and earn
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

export default Tutor;
