import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peoplefrontlinehealth.org"),
  title: {
    default: "People Frontline Health Initiative — Healthcare is a right, not a privilege",
    template: "%s — PFHI",
  },
  description:
    "PFHI improves health outcomes for underserved communities across Africa through community-driven programs, research, innovation, and strategic partnerships.",
  keywords: [
    "public health",
    "health equity",
    "community health",
    "Nigeria NGO",
    "frontline health workers",
    "maternal and child health",
    "global health Africa",
  ],
  openGraph: {
    title: "People Frontline Health Initiative",
    description:
      "Everyone deserves access to quality healthcare, regardless of where they live or their circumstances.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
