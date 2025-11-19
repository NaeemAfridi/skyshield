import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyShield – Smart Eyes in the Sky",
  description:
    "SkyShield: AI drone safety and threat detection for a safer society. Smart surveillance and emergency response systems.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className=" bg-black text-slate-50">{children}</body>
    </html>
  );
}
