import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        <main>
        {children}
        </main>
        </body>
    </html>
    </ClerkProvider>
  );
}
