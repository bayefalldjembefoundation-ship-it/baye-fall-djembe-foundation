export default function About() {
  return (
    <main className="inner-page about-page">

      {/* INTRO */}
      <section className="about-intro">
        <div className="section-label">ABOUT THE FOUNDATION</div>

        <p className="eyebrow">MORE THAN MUSIC</p>

        <h1>
          Culture
          <br />
          Is Meant To
          <br />
          Be Experienced
        </h1>

        <p className="about-intro-text">
          The Baye Fall Djembe Foundation creates opportunities for people to
          experience West African culture through music, education, community,
          and cultural exchange.
        </p>
      </section>


      {/* OUR MISSION */}
<section id="mission" className="mission-section">

  <div className="section-label">01 — OUR MISSION</div>

  <div className="mission-layout">

    <div className="mission-heading">
      <p className="eyebrow">BUILDING BRIDGES</p>

      <h2>
        Our
        <br />
        Mission
      </h2>
    </div>

    <div className="mission-content">

      <p className="mission-statement">
        Our mission is to build bridges between the United States and West
        Africa through culture, music, education and community.
      </p>

      <p>
        We empower youth to discover different cultures, celebrate diversity,
        and create lasting connections across different generations,
        cultures, and borders.
      </p>

    </div>

  </div>


  <div className="mission-values">

    <div className="mission-value">
      <span>01</span>
      <h3>Culture</h3>
      <p>
        Keeping West African traditions alive through meaningful cultural
        experiences.
      </p>
    </div>

    <div className="mission-value">
      <span>02</span>
      <h3>Music</h3>
      <p>
        Using rhythm, drumming, movement, and storytelling to bring people
        together.
      </p>
    </div>

    <div className="mission-value">
      <span>03</span>
      <h3>Education</h3>
      <p>
        Creating opportunities to learn about West African history,
        traditions, and culture.
      </p>
    </div>

    <div className="mission-value">
      <span>04</span>
      <h3>Community</h3>
      <p>
        Building lasting relationships across generations, cultures, and
        borders.
      </p>
    </div>

  </div>

</section>

    {/* CULTURAL HERITAGE */}
<section id="culture" className="culture-section">

  <div className="section-label">02 — CULTURAL HERITAGE</div>

  <div className="culture-layout">

    <div className="culture-heading">
      <p className="eyebrow">CULTURAL HERITAGE</p>

      <h2>
        The Rhythm
        <br />
        of a People
      </h2>
    </div>

    <div className="culture-content">

      <p className="culture-lead">
        West African culture lives through rhythm, movement, storytelling,
        and community.
      </p>

      <p>
        Through traditional drumming, dance, and cultural education, we create
        experiences that connect people to the history, spirit, and traditions
        of West Africa.
      </p>

      <p>
        From the heartbeat of the djembe to the traditions passed from one
        generation to the next, our work keeps culture alive while creating
        meaningful connections between generations and across borders.
      </p>

    </div>

  </div>


  <div className="culture-pillars">

    <div className="culture-pillar">
      <span>01</span>
      <h3>Rhythm</h3>
      <p>The heartbeat that brings people together.</p>
    </div>

    <div className="culture-pillar">
      <span>02</span>
      <h3>Movement</h3>
      <p>Culture expressed through the body and spirit.</p>
    </div>

    <div className="culture-pillar">
      <span>03</span>
      <h3>Storytelling</h3>
      <p>Knowledge carried from one generation to another.</p>
    </div>

    <div className="culture-pillar">
      <span>04</span>
      <h3>Community</h3>
      <p>Connection that crosses generations and borders.</p>
    </div>

  </div>

</section>

      {/* EXPERIENCE */}
      <section className="experience-section">

        <div className="section-label">04 — THE EXPERIENCE</div>

        <p className="eyebrow">MORE THAN OBSERVATION</p>

        <h2>
          Don't Just
          <br />
          Learn About
          <br />
          Culture.
        </h2>

        <div className="experience-statement">
          <p>Experience it.</p>
        </div>

        <div className="experience-list">

          <p>Hear the music.</p>
          <p>Feel the rhythm.</p>
          <p>Learn the stories.</p>
          <p>Share the traditions.</p>
          <p>Connect with community.</p>

        </div>

      </section>


      {/* CLOSING */}
      <section className="about-closing">

        <p className="eyebrow">THE WORK CONTINUES</p>

        <h2>
          Building
          <br />
          Connections
          <br />
          Across Borders.
        </h2>

        <div className="about-closing-buttons">

          <a href="/programs" className="hero-button">
            Explore Programs
          </a>

          <a href="/founder" className="hero-button">
            Meet The Founder
          </a>

        </div>

      </section>

    </main>
  );
}
