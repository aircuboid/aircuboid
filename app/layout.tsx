import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'MarkAIt - AI Crowd',
  description: 'Get your AI Crowd',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-gradient-to-b from-black to-gray-900 text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gradient-to-b from-black to-gray-900">
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  );
}
