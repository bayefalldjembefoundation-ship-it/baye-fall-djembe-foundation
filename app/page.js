export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">BAYE FALL DJEMBE FOUNDATION</p>

          <h1>
            Tradition
            <br />
            Builds Tomorrow
          </h1>

          <p className="hero-description">
            The Baye Fall Djembe Foundation, founded by Ghana Mbaye —
            Brother Ghana — preserves and shares West African heritage
            through music, education, cultural exchange, and transformative
            experiences.
          </p>

          <a href="/about" className="hero-button">
            Discover Our Mission
          </a>
        </div>

        <div className="hero-portrait">
          <div className="hero-frame">
            <img
              src="/images/hero-dad.png"
              alt="Ghana Mbaye, also known as Brother Ghana, founder of the Baye Fall Djembe Foundation"
              className="hero-image"
            />
          </div>

          <div className="hero-frame-accent"></div>
        </div>

        <div className="hero-location">
          BROTHER
          <span>GHANA</span>
        </div>

        <div className="hero-scroll">
          EXPLORE THE FOUNDATION
        </div>
      </section>

      <section className="home-intro">
        <div className="section-label">02 — THE FOUNDATION</div>

        <div className="home-intro-layout">
          <div className="home-intro-heading">
            <p className="eyebrow">CULTURE CONNECTS US</p>
            <h2>
              More Than
              <br />
              Music.
            </h2>
          </div>

          <div className="home-intro-content">
            <p className="home-intro-lead">
              We believe culture is something to be experienced,
              shared, and carried forward.
            </p>

            <p>
              Founded by master percussionist and cultural educator
              Ghana Mbaye, also known as Brother Ghana, the Baye Fall
              Djembe Foundation creates opportunities for people to
              experience West African heritage through music, education,
              cultural exchange, and community.
            </p>

            <div className="home-intro-links">
              <a href="/about">
                <span>01</span>
                <strong>Our Mission</strong>
                <span>→</span>
              </a>

              <a href="/founder">
                <span>02</span>
                <strong>The Founder</strong>
                <span>→</span>
              </a>

              <a href="/programs">
                <span>03</span>
                <strong>Our Programs</strong>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}