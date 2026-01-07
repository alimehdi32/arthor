import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/app/components/navigation/top-nav";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Arthor - AI-Powered Learning Platform",
  description: "Transform your learning journey with AI-generated roadmaps, personalized study paths, and comprehensive skill development. Join Arthor society for the future of education.",
  keywords: "AI learning, skill development, roadmap generation, personalized education, Arthor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-[var(--bg)] text-[var(--text)] min-h-screen antialiased">
        <TopNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster 
          position="top-right"
          toastOptions={{
            className: "my-custom-toast",
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}
