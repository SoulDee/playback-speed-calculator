import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';
import { BASE_URL } from "@/config/urls";
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/config/analytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Playback Speed Calculator | Save Time Learning',
  description: 'Calculate how much time you can save by adjusting playback speeds. Perfect for online courses, tutorials, and movies. Free online tool for efficient learning.',
  authors: [{ name: 'Playback Speed Calculator' }],
  icons: {
    icon: 'favicon.ico',
  },
  openGraph: {
    title: 'Playback Speed Calculator | Save Time Learning',
    description: 'Calculate how much time you can save by adjusting playback speeds. Perfect for online courses, tutorials, and movies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Playback Speed Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playback Speed Calculator | Save Time Learning',
    description: 'Calculate how much time you can save by adjusting playback speeds. Perfect for online courses, tutorials, and movies.',
  },
  alternates: {
    canonical: BASE_URL
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Playback Speed Calculator',
              description: 'Calculate how much time you can save by adjusting playback speeds. Perfect for online courses, tutorials, and movies.',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              featureList: [
                'Calculate video duration at different playback speeds',
                'Save time watching videos',
                'Optimize learning efficiency',
                'Support for hours, minutes, and seconds',
                'Dark mode support'
              ]
            })
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="max-w-md mx-auto">
            <p>&copy; {new Date().getFullYear()} Playback Speed Calculator. All rights reserved.</p>
            <p className="mt-1">Made with ♥️ for efficient learning</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
