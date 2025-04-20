import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"

const poppinsFont = Poppins({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "ZainicalEditx",
  description: "I'm Ali Zain, a meticulous video editor driven by a passion for storytelling. With a keen eye for detail and a relentless pursuit of perfection, I craft compelling narratives that captivate audiences and leave a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <Navbar />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
