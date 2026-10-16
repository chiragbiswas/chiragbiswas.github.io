import localFont from 'next/font/local';
import './globals.css';

const garamond = localFont({
  src: [
    { path: '../public/assets/fonts/eb-garamond.ttf', weight: '400 800', style: 'normal' },
    { path: '../public/assets/fonts/eb-garamond-italic.ttf', weight: '400 800', style: 'italic' },
  ],
  variable: '--font-garamond',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Times New Roman',
  fallback: ['Georgia', 'serif'],
});

export const metadata = {
  metadataBase: new URL('https://multiphonics.xyz'),
  title: { default: 'Multiphonics', template: '%s — Multiphonics' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
