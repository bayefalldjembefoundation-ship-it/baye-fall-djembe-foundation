export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <img
          src="/images/hero-dad.png"
          alt="Baye Fall Djembe Foundation"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">BAYE FALL DJEMBE FOUNDATION</p>

          <h1>
            Tradition
            <br />
            Builds Tomorrow
          </h1>

          <p className="hero-description">
            Preserving West African heritage through music, education,
            cultural exchange, and transformative experiences.
          </p>

          <a href="#mission" className="hero-button">
            Explore Our Mission
          </a>
        </div>

        <div className="hero-location">
          SENEGAL
          <span>WEST AFRICA</span>
        </div>

        <div className="hero-scroll">SCROLL TO EXPLORE</div>
      </section>

      {/* OUR MISSION */}
      <section id="mission" className="mission-section">
        <div className="section-label">01 — OUR MISSION</div>

        <h2>Our Mission</h2>

        <p>
          Our mission is to build bridges between the United States and West
          Africa through culture, music, education and community. We empower
          youth to discover their roots, celebrate their heritage, and create
          lasting connections across different generations, cultures, and
          borders.
        </p>
      </section>

      {/* OUR PROGRAMS */}
      <section id="programs" className="programs-section">
        <div className="section-label">02 — OUR PROGRAMS</div>

        <h2>Our Programs</h2>

        <div className="program-list">
          <div className="program-item">
            <span className="program-number">01</span>

            <div>
              <h3>Rhythm & Movement</h3>

              <p>
                Experience the heartbeat of West Africa through traditional
                rhythms, energetic dance, and powerful storytelling.
                Participants learn the cultural meaning behind the rhythms,
                explore traditional drum-making techniques, and discover how
                music, movement, and stories connect generations.
              </p>
            </div>
          </div>

          <div className="program-item">
            <span className="program-number">02</span>

            <div>
              <h3>Youth Programs</h3>

              <p>
                Bring the sounds, movement, and traditions of West Africa
                directly to young people through engaging school programs and
                dedicated summer camps. Youth experience West African drumming,
                dance, storytelling, and cultural education while building
                confidence, creativity, and a deeper connection to culture and
                community.
              </p>
            </div>
          </div>

          <div className="program-item">
            <span className="program-number">03</span>

            <div>
              <h3>Bridging Two Worlds</h3>

              <p>
                Experience Senegal through an unforgettable cultural journey
                designed to connect you with the heart of West Africa. From
                music, dance, food, and traditions to meaningful community
                experiences, the Baye Fall Djembe Foundation creates
                opportunities to explore, connect, and experience Senegal in a
                way that leaves a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL HERITAGE */}
      <section id="culture" className="culture-section">
        <div className="section-label">03 — CULTURAL HERITAGE</div>

        <p className="eyebrow">CULTURAL HERITAGE</p>

        <h2>The Rhythm of a People</h2>

        <p>
          West African culture lives through rhythm, movement, storytelling,
          and community. Through traditional drumming, dance, and cultural
          education, we create experiences that connect people to the history,
          spirit, and traditions of West Africa.
        </p>

        <p>
          From the heartbeat of the djembe to the traditions passed from one
          generation to the next, our work keeps culture alive while creating
          meaningful connections between generations and across borders.
        </p>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="involved-section">
        <div className="section-label">04 — GET INVOLVED</div>

        <h2>Get Involved</h2>

        <h3>Be part of something bigger!</h3>

        <p>
          Whether you want to support our programs, bring West African culture
          to your school or community, volunteer, partner with us, or
          experience Senegal with us, there’s a place for you at the Baye Fall
          Djembe Foundation.
        </p>

        <div className="involved-grid">
          <div>
            <h3>Partner With Us</h3>

            <p>
              Schools, organizations, and community partners can work with us
              to bring cultural education and programming to their communities.
            </p>
          </div>

          <div>
            <h3>Bring Culture to Your School</h3>

            <p>
              Book our drum, dance, and storytelling programs for your school,
              organization, or community.
            </p>
          </div>

          <div>
            <h3>Have questions or want to get involved?</h3>

            <p>Contact us:</p>

            <p>📧 Email: bayefalldjembefoundation@gmail.com</p>

            <p>📞 Phone: +1-651-334-0769</p>

            <p>📍 Minnesota</p>
          </div>
        </div>

        <a
          href="mailto:bayefalldjembefoundation@gmail.com"
          className="contact-button"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
