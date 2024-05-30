import type { Metadata } from "next";
import { Fraunces, Redacted_Script } from "next/font/google";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkProvider,
} from "@clerk/nextjs";
import clsx from "clsx";

import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const mainFont = Fraunces({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

const loadingFont = Redacted_Script({
  weight: ["400"],
  display: "fallback",
  subsets: ["latin"],
  variable: "--font-family-loading",
});

export const metadata: Metadata = {
  title: "WorkIt",
  description:
    "an application based on ai to help students studying and revise their modules",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(mainFont.variable, loadingFont.variable)}>
          <Header>
            <SignedOut>
              <SignInButton>
                <button className="btn">Apply for access</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link className="btn" prefetch={true} href="/dashboard">
                Dashboard
              </Link>
              <UserButton />
            </SignedIn>
          </Header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
