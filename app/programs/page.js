"use client";

import { useState } from "react";

export default function ProgramsPage() {
  const [openProgram, setOpenProgram] = useState(null);

  const toggleProgram = (program) => {
    setOpenProgram(openProgram === program ? null : program);
  };

  return (
    <main>

      {/* =========================================================
          OUR PROGRAMS
          ========================================================= */}
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


        {/* =========================================================
            PROGRAM 01 — RHYTHM & MOVEMENT
            ========================================================= */}
        <div
          className={`program-item ${
            openProgram === 1 ? "is-open" : ""
          }`}
        >

          <button
            className="program-toggle"
            onClick={() => toggleProgram(1)}
            aria-expanded={openProgram === 1}
          >

            <span className="program-number">
              01
            </span>

            <span className="program-toggle-title">
              Rhythm & Movement
            </span>

            <span className="program-toggle-icon">
              {openProgram === 1 ? "−" : "+"}
            </span>

          </button>


          <div className="program-expand">

            <div className="program-content">

              <div className="program-image-wrap">

                {openProgram === 1 && (
                  <video
                    className="program-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source
                      src="/images/rhythm-movement.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.

                  </video>
                )}

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

        </div>


        {/* =========================================================
            PROGRAM 02 — DRUM MAKING
            ========================================================= */}
        <div
          className={`program-item ${
            openProgram === 2 ? "is-open" : ""
          }`}
        >

          <button
            className="program-toggle"
            onClick={() => toggleProgram(2)}
            aria-expanded={openProgram === 2}
          >

            <span className="program-number">
              02
            </span>

            <span className="program-toggle-title">
              Drum Making
            </span>

            <span className="program-toggle-icon">
              {openProgram === 2 ? "−" : "+"}
            </span>

          </button>


          <div className="program-expand">

            <div className="program-content">

                            <div className="program-image-wrap">
              
                {openProgram === 2 && (
                  <img
                    src="/images/drum-making.png"
                    alt="Traditional drum making process"
                    className="program-image"
                  />
                )}
              
              </div>


              <div className="program-text">

                <p className="eyebrow">
                  TRADITION • CRAFT • PROCESS
                </p>

                <h2>
                  Drum
                  <br />
                  Making
                </h2>

                <p>
                  Discover the craftsmanship behind the drum and the
                  traditional process of transforming natural materials
                  into an instrument built for rhythm, connection,
                  and community.
                </p>

                <p>
                  From selecting natural materials to shaping, assembling,
                  and finishing the drum, participants gain a deeper
                  appreciation for the knowledge, patience, and craftsmanship
                  behind the instrument.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            PROGRAM 03 — DRUM PHILOSOPHY
            ========================================================= */}
        <div
          className={`program-item drum-philosophy ${
            openProgram === 3 ? "is-open" : ""
          }`}
        >

          <button
            className="program-toggle"
            onClick={() => toggleProgram(3)}
            aria-expanded={openProgram === 3}
          >

            <span className="program-number">
              03
            </span>

            <span className="program-toggle-title">
              DRUM Philosophy
            </span>

            <span className="program-toggle-icon">
              {openProgram === 3 ? "−" : "+"}
            </span>

          </button>


          <div className="program-expand">

            <div className="drum-philosophy-content">

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
                DRUM is more than a motto. It represents the values at
                the heart of Brother Ghana's teaching: discipline in
                practice, respect for others and tradition, unity through
                community, and music as a powerful way to connect people.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================================
            PROGRAM 04 — YOUTH PROGRAMS
            ========================================================= */}
        <div
          className={`program-item ${
            openProgram === 4 ? "is-open" : ""
          }`}
        >

          <button
            className="program-toggle"
            onClick={() => toggleProgram(4)}
            aria-expanded={openProgram === 4}
          >

            <span className="program-number">
              04
            </span>

            <span className="program-toggle-title">
              Youth Programs
            </span>

            <span className="program-toggle-icon">
              {openProgram === 4 ? "−" : "+"}
            </span>

          </button>


          <div className="program-expand">

            <div className="program-content">

              <div className="program-image-wrap">

                {openProgram === 4 && (
                  <video
                    className="program-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source
                      src="/images/youth-programs.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.

                  </video>
                )}

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
                  Youth experience West African drumming, dance,
                  storytelling, and cultural education while building
                  confidence, creativity, and a deeper connection to
                  culture and community.
                </p>

              </div>

            </div>

          </div>

        </div>


       {/* =========================================================
    PROGRAM 05 — BRIDGING TWO WORLDS
    ========================================================= */}
<div
  className={`program-item bridging-program ${
    openProgram === 5 ? "is-open" : ""
  }`}
>

  <button
    className="program-toggle bridging-toggle"
    onClick={() => toggleProgram(5)}
    aria-expanded={openProgram === 5}
  >

    <span className="program-number">
      05
    </span>

    <span className="program-toggle-title">
      Bridging Two Worlds
    </span>

    <span className="program-toggle-icon">
      {openProgram === 5 ? "−" : "+"}
    </span>

  </button>


  <div className="program-expand">

    <div className="bridging-experience">

      {/* HERO MOMENT */}

      <div className="bridging-hero">

        <div className="bridging-hero-label">
          SENEGAL • WEST AFRICA
        </div>

        <h2>
          Experience
          <br />
          <span>Senegal.</span>
        </h2>

        <p className="bridging-hero-intro">
          More than a destination. A journey into rhythm,
          tradition, community, and connection.
        </p>

      </div>


      {/* JOURNEY */}

      <div className="bridging-journey">

        <div className="bridging-journey-line"></div>


        <div className="bridging-journey-step">

          <span className="bridging-step-number">
            01
          </span>

          <div>

            <span className="bridging-step-label">
              ARRIVE
            </span>

            <h3>
              Leave the familiar behind.
            </h3>

            <p>
              Step into a culture shaped by rhythm, history,
              community, and generations of tradition.
            </p>

          </div>

        </div>


        <div className="bridging-journey-step">

          <span className="bridging-step-number">
            02
          </span>

          <div>

            <span className="bridging-step-label">
              EXPERIENCE
            </span>

            <h3>
              Feel the rhythm.
            </h3>

            <p>
              Hear the drums, experience the movement,
              share meals, meet people, and participate
              in the traditions that bring communities together.
            </p>

          </div>

        </div>


        <div className="bridging-journey-step">

          <span className="bridging-step-number">
            03
          </span>

          <div>

            <span className="bridging-step-label">
              CONNECT
            </span>

            <h3>
              Become part of the story.
            </h3>

            <p>
              Cultural exchange becomes meaningful when
              people move beyond observation and create
              genuine connections with one another.
            </p>

          </div>

        </div>


        <div className="bridging-journey-step">

          <span className="bridging-step-number">
            04
          </span>

          <div>

            <span className="bridging-step-label">
              RETURN
            </span>

            <h3>
              Bring something home.
            </h3>

            <p>
              Return with memories, relationships, stories,
              and a deeper understanding of the culture
              you experienced.
            </p>

          </div>

        </div>

      </div>


      {/* CULTURAL EXPERIENCES */}

      <div className="bridging-experiences">

        <div className="bridging-experiences-heading">

          <span>
            THE EXPERIENCE
          </span>

          <h3>
            More Than
            <br />
            a Visit.
          </h3>

        </div>


        <div className="bridging-experience-grid">

          <div className="bridging-experience-item">

            <span>01</span>

            <h4>
              Music
            </h4>

            <p>
              Discover the rhythms that carry stories
              from one generation to the next.
            </p>

          </div>


          <div className="bridging-experience-item">

            <span>02</span>

            <h4>
              Movement
            </h4>

            <p>
              Experience dance and movement as expressions
              of celebration, identity, and community.
            </p>

          </div>


          <div className="bridging-experience-item">

            <span>03</span>

            <h4>
              Food
            </h4>

            <p>
              Share in the flavors and traditions that
              bring people together around the table.
            </p>

          </div>


          <div className="bridging-experience-item">

            <span>04</span>

            <h4>
              Community
            </h4>

            <p>
              Build relationships and experience Senegal
              through the people who call it home.
            </p>

          </div>

        </div>

      </div>


      {/* FINAL INVITATION */}

      <div className="bridging-invitation">

        <span className="bridging-invitation-label">
          THE JOURNEY AWAITS
        </span>

        <h3>
          Africa to America.
          <br />
          America to Africa.
        </h3>

        <p>
          The bridge is built through people,
          culture, music, education, and shared experience.
        </p>

        <a
          href="/get-involved"
          className="bridging-button"
        >
          Experience Senegal
          <span>→</span>
        </a>

      </div>

    </div>

  </div>

</div>

        {/* =========================================================
            WHO WE SERVE
            ========================================================= */}
        <div
          className={`program-audience-section ${
            openProgram === 6 ? "is-open" : ""
          }`}
        >

          <button
            className="program-toggle"
            onClick={() => toggleProgram(6)}
            aria-expanded={openProgram === 6}
          >

            <span className="program-number">
              06
            </span>

            <span className="program-toggle-title">
              Who We Serve
            </span>

            <span className="program-toggle-icon">
              {openProgram === 6 ? "−" : "+"}
            </span>

          </button>


          <div className="program-expand">

            <div className="program-audience-content">

              <div className="program-audience-header">

                <p className="eyebrow">
                  CULTURE FOR EVERY COMMUNITY
                </p>

                <h2>
                  There Is a Place
                  <br />
                  for Everyone.
                </h2>

                <p>
                  Our programs are designed to meet people where they are,
                  creating meaningful opportunities to learn, participate,
                  and connect through West African culture.
                </p>

              </div>


              <div className="program-audience-grid">

                <div className="program-audience-item">

                  <span>01</span>

                  <h3>
                    Schools
                  </h3>

                  <p>
                    Bring hands-on African drumming, dance, storytelling,
                    and cultural education directly into the classroom.
                  </p>

                </div>


                <div className="program-audience-item">

                  <span>02</span>

                  <h3>
                    Youth
                  </h3>

                  <p>
                    Give young people meaningful opportunities to build
                    confidence, creativity, cultural awareness, and community.
                  </p>

                </div>


                <div className="program-audience-item">

                  <span>03</span>

                  <h3>
                    Communities
                  </h3>

                  <p>
                    Create shared cultural experiences that bring people
                    together through rhythm, movement, learning, and connection.
                  </p>

                </div>


                <div className="program-audience-item">

                  <span>04</span>

                  <h3>
                    Organizations
                  </h3>

                  <p>
                    Partner with the foundation to create cultural programming
                    that supports education, understanding, and community connection.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            CLOSING CTA
            ========================================================= */}
        <section className="programs-closing">

          <p className="eyebrow">
            EXPERIENCE THE CULTURE
          </p>

          <h2>
            Culture Is Meant
            <br />
            to Be Experienced.
          </h2>

          <p>
            Bring the rhythm, stories, and traditions of West Africa
            into your school, community, or organization.
          </p>

          <a
            href="/get-involved"
            className="programs-closing-button"
          >
            Explore Get Involved
          </a>

        </section>

      </section>


      {/* =========================================================
          FOOTER
          ========================================================= */}
      <footer className="site-footer">

        <div className="footer-top">

          <div className="footer-brand">

            <p className="footer-eyebrow">
              BAYE FALL DJEMBE FOUNDATION
            </p>

            <h2>
              Culture
              <br />
              Moves.
            </h2>

            <p className="footer-description">
              Preserving West African heritage through music, education,
              cultural exchange, and community.
            </p>

          </div>


          <div className="footer-links">

            <div className="footer-column">

              <span>
                EXPLORE
              </span>

              <a href="/">
                Home
              </a>

              <a href="/about">
                About
              </a>

              <a href="/founder">
                Founder
              </a>

              <a href="/programs">
                Programs
              </a>

            </div>


            <div className="footer-column">

              <span>
                CONNECT
              </span>

              <a href="/get-involved">
                Get Involved
              </a>

              <a href="/contact">
                Contact
              </a>

              <a href="/media">
                Media
              </a>

            </div>

          </div>

        </div>


        <div className="footer-statement">

          <span>
            AFRICA
          </span>

          <div className="footer-statement-line"></div>

          <span>
            AMERICA
          </span>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Baye Fall Djembe Foundation. All rights reserved.
          </p>

          <p>
            Built through culture, connection, and community.
          </p>

        </div>

      </footer>

    </main>
  );
}
