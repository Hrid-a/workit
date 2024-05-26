import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const mainFont = Fraunces({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});

export const metadata: Metadata = {
  title: "WorkIt",
  description: "an application based on ai to help students studying and revise their modules",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={mainFont.variable}>
        <Header>
        <SignedOut>
          <SignInButton>
          <button className='btn'>
            Apply for access
        </button>
          </SignInButton>
    </SignedOut>
        <SignedIn>
          <Link className="btn" prefetch={true} href='/dashboard'>Dashboard</Link>
          <UserButton />
        </SignedIn>
        </Header>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
