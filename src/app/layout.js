import { Press_Start_2P, Orbitron, Russo_One } from 'next/font/google';
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo',
  display: 'swap',
});

export const metadata = {
  title: "Macdonald Sairos - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pressStart.variable} ${orbitron.variable} ${russoOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
