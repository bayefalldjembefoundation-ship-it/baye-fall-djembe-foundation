</> JavaScript
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
            <a href="/">Baye Fall Djembe Foundation</a>

            <div>
              <a href="/">Home</a>
              <a href="/founder">Founder</a>
              <a href="/#mission">About</a>
              <a href="/#programs">Programs</a>
              <a href="/#events">Events</a>
              <a href="/#get-involved">Get Involved</a>
              <a href="/#contact">Contact</a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
