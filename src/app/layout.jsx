import PageAnimatePresence from "@/components/PageAnimatePresence";
import "./globals.css";
import { MainParticles } from "@/components/MainParticles";

export const metadata = {
  title: "MFS GAME",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000] bg-cover bg-no-repeat overflow-hidden">
        <MainParticles />
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </body>
    </html>
  );
}
