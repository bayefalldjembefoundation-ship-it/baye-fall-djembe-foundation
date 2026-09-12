export default function ContactPage() {
  return (
    <main>

      {/* =========================================================
          CONTACT INTRO
          ========================================================= */}

      <section className="contact-section">

        <div className="section-label">
          01 — CONTACT
        </div>

        <div className="contact-intro">

          <div className="contact-heading">

            <p className="eyebrow">
              LET'S CONNECT
            </p>

            <h1>
              Start
              <br />
              a Conversation.
            </h1>

          </div>

          <div className="contact-intro-text">

            <p>
              Culture begins with connection.
            </p>

            <p>
              Whether you are interested in bringing a program
              to your school or community, partnering with the
              foundation, learning more about our work, or simply
              starting a conversation, we would love to hear from you.
            </p>

          </div>

        </div>


        {/* =========================================================
            CONTACT OPTIONS
            ========================================================= */}

        <section className="contact-options">

          <div className="section-label">
            02 — CONNECT WITH US
          </div>

          <div className="contact-options-grid">

            <div className="contact-option">

              <span className="contact-number">
                01
              </span>

              <p className="eyebrow">
                PROGRAMS
              </p>

              <h2>
                Bring Culture
                <br />
                to Your Community.
              </h2>

              <p>
                Interested in bringing West African drumming,
                dance, storytelling, or cultural education to
                your school, organization, or community?
              </p>

              <a
                href="mailto:info@bayefalldjembefoundation.org"
                className="contact-link"
              >
                Ask About Programs
                <span>→</span>
              </a>

            </div>


            <div className="contact-option">

              <span className="contact-number">
                02
              </span>

              <p className="eyebrow">
                PARTNERSHIPS
              </p>

              <h2>
                Build Something
                <br />
                Meaningful.
              </h2>

              <p>
                We welcome opportunities to work with organizations,
                educators, cultural institutions, and community
                leaders who share our commitment to connection.
              </p>

              <a
                href="mailto:info@bayefalldjembefoundation.org"
                className="contact-link"
              >
                Discuss a Partnership
                <span>→</span>
              </a>

            </div>


            <div className="contact-option">

              <span className="contact-number">
                03
              </span>

              <p className="eyebrow">
                GENERAL INQUIRIES
              </p>

              <h2>
                Have a
                <br />
                Question?
              </h2>

              <p>
                Have a question about the foundation, Brother Ghana,
                our programs, or our cultural work? Reach out and
                start the conversation.
              </p>

              <a
                href="mailto:info@bayefalldjembefoundation.org"
                className="contact-link"
              >
                Send Us a Message
                <span>→</span>
              </a>

            </div>

          </div>

        </section>


        {/* =========================================================
            DIRECT CONTACT
            ========================================================= */}

        <section className="contact-direct">

          <div className="section-label">
            03 — REACH OUT
          </div>

          <div className="contact-direct-layout">

            <div className="contact-direct-heading">

              <p className="eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                We Would
                <br />
                Love to
                <br />
                Hear From You.
              </h2>

            </div>

            <div className="contact-direct-content">

              <div className="contact-detail">

                <span>
                  EMAIL
                </span>

                <a href="mailto:info@bayefalldjembefoundation.org">
                  info@bayefalldjembefoundation.org
                </a>

              </div>

              <div className="contact-detail">

                <span>
                  FOUNDATION
                </span>

                <p>
                  Baye Fall Djembe Foundation
                </p>

              </div>

              <div className="contact-detail">

                <span>
                  CULTURAL BRIDGE
                </span>

                <p>
                  Senegal
                  <br />
                  United States
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
            ========================================================= */}

        <section className="contact-closing">

          <p className="eyebrow">
            THE CONVERSATION STARTS HERE
          </p>

          <h2>
            Let's Build
            <br />
            the Bridge.
          </h2>

          <p>
            One conversation can become a partnership,
            an experience, a classroom, or a connection
            that lasts for generations.
          </p>

          <a
            href="mailto:info@bayefalldjembefoundation.org"
            className="contact-closing-button"
          >
            Send a Message
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
              Preserving West African heritage through music,
              education, cultural exchange, and community.
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
