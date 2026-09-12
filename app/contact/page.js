"use client";

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

              <a href="#send-message" className="contact-link">Ask About Programs<span>→</span></a>

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

             <a href="#send-message" className="contact-link">Discuss a Partnership<span>→</span></a>

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

              <a href="#send-message" className="contact-link">Discuss a Partnership<span>→</span></a>

            </div>

          </div>

        </section>

{/* =========================================================
    MESSAGE FORM
    ========================================================= */}

<section id="send-message" className="contact-form-section">

  <div className="section-label">
    03 — SEND A MESSAGE
  </div>

  <div className="contact-form-layout">

    <div className="contact-form-heading">

      <p className="eyebrow">
        GET IN TOUCH
      </p>

      <h2>
        Let's Start
        <br />
        the Conversation.
      </h2>

      <p>
        Tell us a little about what you are looking for,
        and we'll get back to you.
      </p>

    </div>

    <form
      className="contact-form"
      onSubmit={async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        });

        if (response.ok) {
          form.reset();
          alert("Your message has been sent. Thank you for reaching out.");
        } else {
          alert("Something went wrong. Please try again.");
        }
      }}
    >

      <label>
        NAME
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </label>

      <label>
        EMAIL
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
      </label>

      <label>
        MESSAGE
        <textarea
          name="message"
          placeholder="How can we help?"
          rows="7"
          required
        ></textarea>
      </label>

      <button type="submit" className="contact-form-button">
        Send Message
        <span>→</span>
      </button>

    </form>

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
  <span>EMAIL</span>
  <a href="mailto:bayefalldjembefoundation@gmail.com">
    bayefalldjembefoundation@gmail.com
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

         <a href="#send-message" className="contact-link">Send Us a Message<span>→</span></a>

        </section>

      </section>


     
    </main>
  );
}
