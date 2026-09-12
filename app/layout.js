import "./globals.css";

export const metadata = {
  title: "Baye Fall Djembe Foundation",
  description:
    "Connecting communities through West African culture, music, education, and heritage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/" className="nav-logo">
              <img
                src="/images/logo.jpg.jpg"
                alt="Baye Fall Djembe Foundation"
              />
            </a>

            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/founder">Founder</a>
              <a href="/programs">Programs</a>
              <a href="/get-involved">Get Involved</a>
              <a href="/contact">Contact</a>

              <a href="/media" className="nav-donate">
                Media
              </a>
            </div>
          </nav>
        </header>

        {children}

<footer className="site-footer">
  <div className="footer-top">
    <div className="footer-brand">
      <p className="footer-eyebrow">BAYE FALL DJEMBE FOUNDATION</p>
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
        <span>EXPLORE</span>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/founder">Founder</a>
        <a href="/programs">Programs</a>
      </div>

      <div className="footer-column">
        <span>CONNECT</span>
        <a href="/get-involved">Get Involved</a>
        <a href="/contact">Contact</a>
        <a href="/media">Media</a>
      </div>
    </div>
  </div>

  <div className="footer-statement">
    <span>AFRICA</span>
    <div className="footer-statement-line"></div>
    <span>AMERICA</span>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Baye Fall Djembe Foundation. All rights reserved.</p>
    <p>Built through culture, connection, and community.</p>
  </div>
</footer>

      </body>
    </html>
  );
}
