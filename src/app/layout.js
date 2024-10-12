// import { Inter } from "next/font/google";
import "./globals.css";
import { Open_Sans } from 'next/font/google';


// const inter = Inter({ subsets: ["latin"] });
const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-open_sans', // Add CSS variable
});

export const metadata = {
  title: "Travel Ticket",
  description: "Generated by create next app",
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className} >{children}</body> */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${open_sans.variable}`}>{children}</body>
    </html>
  );
}
