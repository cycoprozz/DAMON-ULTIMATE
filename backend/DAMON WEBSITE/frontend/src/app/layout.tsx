import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { AIAssistantButton } from "@/components/ai/AIAssistantButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carib Life Media - Professional Video Production & Social Media Management",
  description: "Professional video production and social media management services for businesses and individuals in the Caribbean.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <AuthProvider>
          <div className="min-h-full flex flex-col">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AIAssistantButton />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
