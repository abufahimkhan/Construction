import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Announcement from "@/components/announcement/page";
import { ClerkProvider } from '@clerk/nextjs';
import CookieConsent from "@/components/Cookies/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zayan Construction LLC",
  description: "Construction Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get environment variables
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || '';

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Announcement />
          <Header />
          {children}
          <Footer />
          <CookieConsent /> 
        </ClerkProvider>
      </body>
    </html>
  );
}
