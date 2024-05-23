// import { Toaster } from "@tokenstream/components";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { AxiomWebVitals } from "next-axiom";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "./_components/Footer";
import { LoadingBar } from "./_components/LoadingBar";
import { Navbar } from "./_components/Navbar";
import "./globals.css";
import { cn } from "@/utils/cn";
import { PostHogPageview, Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "token_stream",
  description: "A strong foundation for your next unicorn project.",
  generator: "Next.js",
  manifest: "/site.webmanifest",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  openGraph: {
    title: "Ethereum Dapp Starter",
    description: "A strong foundation for your next unicorn project.",
    url: `https://${process.env.VERCEL_URL}`,
    siteName: "Ethereum Dapp Starter",
    locale: "en_US",
    type: "website",
    images: [],
  },
  title: {
    template: "%s | token_stream",
    default: "Be first to the next 100x | token_stream",
  },
  twitter: {
    card: "summary_large_image",
    title: "A strong foundation for your next unicorn project.",
    description: "A strong foundation for your next unicorn project.",
    creator: "",
    creatorId: "",
    images: [""],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF", // TODO: Correct this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background")}>
        <Providers>
          <LoadingBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* <Toaster /> */}
        </Providers>
        <Analytics />
        <AxiomWebVitals />
        <Suspense>
          <PostHogPageview />
        </Suspense>
      </body>
    </html>
  );
}
