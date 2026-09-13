"use client";

import { useState } from "react";

export default function MediaPage() {
  const [mediaType, setMediaType] = useState("photos");

  return (
    <main>
      <section className="media-section">
        <div className="section-label">01 — MEDIA</div>

        <div className="media-intro">
          <div className="media-heading">
            <p className="eyebrow">STORIES • EXPERIENCES • CULTURE</p>
            <h1>
              Moments
              <br />
              That Connect.
            </h1>
          </div>

          <div className="media-intro-text">
            <p>
              Culture comes alive through the people who experience it.
            </p>

            <p>
              Explore moments from the Baye Fall Djembe Foundation,
              from classrooms and community gatherings to cultural
              experiences that connect Senegal and the United States.
            </p>
          </div>
        </div>

        <div className="media-gallery">

          <div className="media-filters">
            <button
              className={`media-filter ${
                mediaType === "photos" ? "active" : ""
              }`}
              onClick={() => setMediaType("photos")}
            >
              Photos
            </button>

            <button
              className={`media-filter ${
                mediaType === "videos" ? "active" : ""
              }`}
              onClick={() => setMediaType("videos")}
            >
              Videos
            </button>
          </div>

          {/* PHOTOS */}

          {mediaType === "photos" && (
            <div className="media-photos">

  {/* THE FOUNDER */}
  <div className="media-group">
    <div className="media-group-heading">
      <span>01 — THE FOUNDER</span>
      <h2>The Story<br />Behind the Work.</h2>
    </div>

    <div className="media-feature">
      <div className="media-feature-image">
        <img src="/images/hero-dad.png" alt="Brother Ghana" />
        <div className="media-overlay">
          <span>THE FOUNDER</span>
          <h2>Brother Ghana</h2>
        </div>
      </div>
    </div>

    <div className="media-grid">
      <div className="media-card">
        <img src="/images/journey.jpg" alt="Brother Ghana in Senegal" />
        <div className="media-card-overlay">
          <span>THE JOURNEY</span>
          <h3>Senegal</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/founderpg.png.png" alt="Brother Ghana, founder of the Baye Fall Djembe Foundation" />
        <div className="media-card-overlay">
          <span>THE FOUNDER</span>
          <h3>Brother Ghana</h3>
        </div>
      </div>
    </div>
  </div>


  {/* TEACHING & COMMUNITY */}
  <div className="media-group">
    <div className="media-group-heading">
      <span>02 — TEACHING & COMMUNITY</span>
      <h2>Culture<br />In Motion.</h2>
    </div>

    <div className="media-grid">
      <div className="media-card media-card-large">
        <img src="/images/teaching.png" alt="Brother Ghana teaching African drumming" />
        <div className="media-card-overlay">
          <span>THE EXPERIENCE</span>
          <h3>A Life of Teaching</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/culture-community.jpg" alt="Community cultural experience" />
        <div className="media-card-overlay">
          <span>COMMUNITY</span>
          <h3>Culture in Motion</h3>
        </div>
      </div>

      <div className="media-card media-card-wide">
        <img src="/images/cultural-heritage.jpg" alt="West African cultural heritage" />
        <div className="media-card-overlay">
          <span>CULTURAL HERITAGE</span>
          <h3>Rooted in Tradition</h3>
        </div>
      </div>
    </div>
  </div>


  {/* THE DRUMS */}
  <div className="media-group">
    <div className="media-group-heading">
      <span>03 — THE DRUMS</span>
      <h2>The Rhythm<br />of West Africa.</h2>
    </div>

    <div className="media-grid">
      <div className="media-card">
        <img src="/images/Djembe.png" alt="West African djembe drum" />
        <div className="media-card-overlay">
          <span>THE DRUMS</span>
          <h3>Djembe</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/dundun.jpeg" alt="West African dun dun drum" />
        <div className="media-card-overlay">
          <span>THE DRUMS</span>
          <h3>Dun Dun</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/sangba.jpeg" alt="West African sangba drum" />
        <div className="media-card-overlay">
          <span>THE DRUMS</span>
          <h3>Sangba</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/kenkeni.jpeg" alt="West African kenkeni drum" />
        <div className="media-card-overlay">
          <span>THE DRUMS</span>
          <h3>Kenkeni</h3>
        </div>
      </div>
    </div>
  </div>


  {/* THE BRIDGE */}
  <div className="media-group">
    <div className="media-group-heading">
      <span>04 — THE BRIDGE</span>
      <h2>Senegal<br />to America.</h2>
    </div>

    <div className="media-grid">
      <div className="media-card media-card-wide">
        <img src="/images/cultural-roots.png" alt="Brother Ghana representing cultural roots" />
        <div className="media-card-overlay">
          <span>CULTURAL ROOTS</span>
          <h3>More Than Music</h3>
        </div>
      </div>

      <div className="media-card">
        <img src="/images/america-img.png" alt="Community and cultural connection in the United States" />
        <div className="media-card-overlay">
          <span>THE BRIDGE</span>
          <h3>America</h3>
        </div>
      </div>
    </div>
  </div>

</div>
          )}

          {/* VIDEOS */}

          {mediaType === "videos" && (
            <div className="media-video-gallery">

              <div className="media-video-card media-video-card-featured">

                <div className="media-video-wrap">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source
                      src="/images/thexpr.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="media-video-info">
                  <span>THE EXPERIENCE</span>

                  <h2>
                    Culture Is Meant
                    <br />
                    to Be Experienced.
                  </h2>

                  <p>
                    A glimpse into the rhythm, movement, and connection
                    at the heart of the foundation.
                  </p>
                </div>

              </div>

              <div className="media-video-grid">

                <div className="media-video-card">

                  <div className="media-video-wrap">
                    <video
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
                  </div>

                  <div className="media-video-info">
                    <span>RHYTHM & MOVEMENT</span>

                    <h3>The Rhythm</h3>

                    <p>
                      Experience traditional West African rhythm,
                      movement, and storytelling.
                    </p>
                  </div>

                </div>

                <div className="media-video-card">

                  <div className="media-video-wrap">
                    <video
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
                  </div>

                  <div className="media-video-info">
                    <span>YOUTH PROGRAMS</span>

                    <h3>Learning Through Rhythm</h3>

                    <p>
                      Young people discovering culture through
                      music, movement, and community.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </section>

     
    </main>
  );
}