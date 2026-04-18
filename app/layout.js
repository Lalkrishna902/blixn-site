import "./globals.css";

export const metadata = {
  title: "Blixn | AI Automation Company",
  description: "Blixn builds custom AI automation systems for lead generation, CRM automation, and outbound campaigns. Get qualified leads in 7 to 14 days. Book a free strategy call.",
  keywords: ["AI automation", "lead generation", "CRM automation", "outbound campaigns", "AI agency", "sales automation"],
  openGraph: {
    title: "Blixn | AI Automation Company",
    description: "Custom AI systems for lead generation, CRM automation, and outbound campaigns. First results in 7 to 14 days.",
    url: "https://blixn.io",
    siteName: "Blixn",
    type: "website",
    images: [
      {
        url: "https://blixn.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blixn AI Automation Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blixn | AI Automation Company",
    description: "Custom AI systems for lead generation, CRM automation, and outbound campaigns. First results in 7 to 14 days.",
    images: ["https://blixn.io/og-image.png"],
  },
  metadataBase: new URL("https://blixn.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Subtle film-grain overlay — fixed, non-scrolling, pure aesthetic */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
