export default function ProgramsPage() {
  return (
    <main>

      {/* OUR PROGRAMS */}
      <section className="programs-section">

        <div className="section-label">
          01 — OUR PROGRAMS
        </div>

        <div className="programs-intro">

          <div className="programs-heading">
            <p className="eyebrow">
              WHAT WE OFFER
            </p>

            <h1>
              Our
              <br />
              Programs
            </h1>
          </div>

          <div className="programs-intro-text">
            <p>
              The Baye Fall Djembe Foundation creates cultural experiences
              that invite people to do more than observe.
            </p>

            <p>
              Through drumming, dance, storytelling, education, and cultural
              exchange, participants have the opportunity to experience
              West African culture through participation, connection,
              and community.
            </p>
          </div>

            </div>


    {/* DRUM PHILOSOPHY */}
    <div className="drum-philosophy">

      <p className="eyebrow">
        THE FOUNDATION OF OUR TEACHING
      </p>

      <h2>
        DRUM
      </h2>

      <div className="drum-motto">

        <div>
          <span>D</span>
          <p>Discipline</p>
        </div>

        <div>
          <span>R</span>
          <p>Respect</p>
        </div>

        <div>
          <span>U</span>
          <p>Unity</p>
        </div>

        <div>
          <span>M</span>
          <p>Music</p>
        </div>

      </div>

      <p className="drum-philosophy-text">
        DRUM is more than a motto. It represents the values at the heart
        of Brother Ghana's teaching: discipline in practice, respect for
        others and tradition, unity through community, and music as a
        powerful way to connect people.
      </p>

    </div>


    {/* PROGRAM 01 */}
    <div className="program-item">
          <div className="program-number">
            01
          </div>

          <div className="program-content">

            <div className="program-image-wrap">
              <img
                src="/images/djembe.png"
                alt="West African djembe drum"
                className="program-image"
              />
            </div>

            <div className="program-text">

              <p className="eyebrow">
                RHYTHM • MOVEMENT • STORY
              </p>

              <h2>
                Rhythm &
                <br />
                Movement
              </h2>

              <p>
                Experience the heartbeat of West Africa through traditional
                rhythms, energetic dance, and powerful storytelling.
              </p>

              <p>
                Participants learn the cultural meaning behind the rhythms,
                explore traditional drum-making techniques, and discover how
                music, movement, and stories connect generations.
              </p>

            </div>

          </div>

        </div>


        {/* PROGRAM 02 */}
        <div className="program-item">

          <div className="program-number">
            02
          </div>

          <div className="program-content">

            <div className="program-image-wrap">
              <img
                src="/images/teaching.png"
                alt="Brother Ghana teaching African drumming to students"
                className="program-image"
              />
            </div>

            <div className="program-text">

              <p className="eyebrow">
                SCHOOLS • YOUTH • COMMUNITY
              </p>

              <h2>
                Youth
                <br />
                Programs
              </h2>

              <p>
                Bring the sounds, movement, and traditions of West Africa
                directly to young people through engaging school programs
                and dedicated summer camps.
              </p>

              <p>
                Youth experience West African drumming, dance, storytelling,
                and cultural education while building confidence, creativity,
                and a deeper connection to culture and community.
              </p>

            </div>

          </div>

        </div>


        {/* PROGRAM 03 */}
        <div className="program-item">

          <div className="program-number">
            03
          </div>

          <div className="program-content">

            <div className="program-image-wrap">
              <img
                src="/images/journey.jpg"
                alt="Brother Ghana in Senegal"
                className="program-image"
              />
            </div>

            <div className="program-text">

              <p className="eyebrow">
                SENEGAL • CULTURE • CONNECTION
              </p>

              <h2>
                Bridging
                <br />
                Two Worlds
              </h2>

              <p>
                Experience Senegal through an unforgettable cultural journey
                designed to connect you with the heart of West Africa.
              </p>

              <p>
                From music, dance, food, and traditions to meaningful
                community experiences, the Baye Fall Djembe Foundation
                creates opportunities to explore, connect, and experience
                Senegal in a way that leaves a lasting impact.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
