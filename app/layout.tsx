import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Remote Full Stack Developer Jobs — MERN, MEAN, Next.js, Rails & More",
  description:
    "Find remote full stack developer jobs matched to your stack. Browse MERN developer jobs, MEAN stack jobs, Next.js developer jobs, full-stack contract roles, and remote full-stack freelance work.",
  keywords: [
    "full stack engineer remote",
    "MERN developer jobs",
    "MEAN stack jobs",
    "Next.js developer jobs",
    "full-stack contract roles",
    "remote full-stack freelance work",
    "remote full stack developer jobs",
    "Rails developer jobs",
  ],
  alternates: {
    canonical: "https://remote-full-stack-developer-jobs.vercel.app/remote-full-stack-developer-jobs",
  },
  openGraph: {
    title: "Remote Full Stack Developer Jobs — MERN, MEAN, Next.js, Rails & More",
    description:
      "We match by stack, not by lowest bid — get invited to remote full-stack roles that fit your toolchain. MERN, MEAN, Next.js, Rails & more.",
    url: "https://remote-full-stack-developer-jobs.vercel.app/remote-full-stack-developer-jobs",
    siteName: "Remote Full Stack Developer Jobs",
    type: "website",
    images: [
      {
        url: "/public/hero.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Full Stack Developer Jobs — MERN, MEAN, Next.js, Rails & More",
    description:
      "We match by stack, not by lowest bid — get invited to remote full-stack roles that fit your toolchain.",
    images: [
      {
        url: "/public/hero.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
