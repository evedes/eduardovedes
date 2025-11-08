import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeWrapper } from "./components/ThemeWrapper";
import GoogleAnalytics from "./components/GoogleAnalytics";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eduardo Vedes - Indie Hacker & Software Engineer",
    template: "%s | Eduardo Vedes",
  },
  description:
    "Indie Hacker building atomize.ink. Software Engineer sharing insights on software development, soft skills, and engineering growth.",
  keywords: [
    "Eduardo Vedes",
    "Software Engineer",
    "Indie Hacker",
    "Web Development",
    "Tech Blog",
    "atomize.ink",
  ],
  authors: [{ name: "Eduardo Vedes", url: "https://eduardovedes.com" }],
  creator: "Eduardo Vedes",
  publisher: "Eduardo Vedes",
  metadataBase: new URL("https://eduardovedes.com"),
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Eduardo Vedes - Indie Hacker & Software Engineer",
    description:
      "Indie Hacker building atomize.ink. Software Engineer sharing insights on software development, soft skills, and engineering growth.",
    url: "https://eduardovedes.com",
    siteName: "Eduardo Vedes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile-pic.png",
        width: 180,
        height: 180,
        alt: "Eduardo Vedes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Vedes - Indie Hacker & Software Engineer",
    description:
      "Indie Hacker building atomize.ink. Software Engineer sharing insights on software development, soft skills, and engineering growth.",
    creator: "@eduardovedes",
    images: ["/profile-pic.png"],
  },
  alternates: {
    canonical: "https://eduardovedes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider>
          <GoogleAnalytics />
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
