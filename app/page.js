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
            Preserving West African heritage through music, education,
            cultural exchange, and transformative experiences.
          </p>

          <a href="/about" className="hero-button">
            Discover Our Mission
          </a>
        </div>

        <div className="hero-portrait">
          <div className="hero-frame">
            <img
              src="/images/hero-dad.png"
              alt="Founder of the Baye Fall Djembe Foundation"
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
    </main>
  );
}
