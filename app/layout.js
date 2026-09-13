import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://bayefalldjembefoundation.org"),

  title: {
    default: "Baye Fall Djembe Foundation | Brother Ghana & Ghana Mbaye",
    template: "%s | Baye Fall Djembe Foundation",
  },

  description:
    "Baye Fall Djembe Foundation, founded by Ghana Mbaye, also known as Brother Ghana, preserves and shares West African cultural heritage through djembe, music, education, cultural exchange, and community connection.",

  keywords: [
    "Baye Fall Djembe Foundation",
    "Baye Fall Djembe",
    "Ghana Mbaye",
    "Brother Ghana",
    "Brother Ghana Djembe",
    "Ghana Mbaye Djembe",
    "West African drumming",
    "African drumming",
    "Djembe",
    "Senegalese drumming",
    "West African culture",
    "West African heritage",
    "Senegal cultural exchange",
    "African cultural education",
  ],

  authors: [
    {
      name: "Ghana Mbaye",
    },
  ],

  creator: "Baye Fall Djembe Foundation",
  publisher: "Baye Fall Djembe Foundation",

  alternates: {
    canonical: "https://bayefalldjembefoundation.org",
  },

  openGraph: {
    title: "Baye Fall Djembe Foundation | Brother Ghana & Ghana Mbaye",
    description:
      "Discover the Baye Fall Djembe Foundation, founded by Ghana Mbaye — Brother Ghana — and dedicated to preserving West African cultural heritage through music, education, and cultural exchange.",
    url: "https://bayefalldjembefoundation.org",
    siteName: "Baye Fall Djembe Foundation",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Baye Fall Djembe Foundation",
      url: "https://bayefalldjembefoundation.org",
      description:
        "The Baye Fall Djembe Foundation preserves and shares West African cultural heritage through music, education, cultural exchange, and community.",
      founder: {
        "@type": "Person",
        name: "Ghana Mbaye",
        alternateName: "Brother Ghana",
      },
    }),
  }}
/>

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
