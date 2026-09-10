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
              <a href="/founder">Founder</a>
              <a href="/about">About</a>
              <a href="/programs">Programs</a>
              <a href="/get-involved">Get Involved</a>
              <a href="/contact">Contact</a>

              <a href="/donate" className="nav-donate">
                Donate
              </a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
