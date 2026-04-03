import type { Metadata } from "next";
import { Inter, Doto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const doto = Doto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dotz-bold",
});

export const metadata: Metadata = {
  title: "huzfm",
  description: "Personal Portfolio",
  openGraph: {
    title: "Portfolio",
    description: "Checkout my latest work, projects, and skills!",
    url: "https://huzfm.vercel.app",
    siteName: "Portfolio",
    images: [
      {
        url: "https://huzfm.vercel.app/card.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Checkout my latest work, projects, and skills!",
    images: ["https://huzfm.vercel.app/card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${doto.variable}`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
