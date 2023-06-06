import './globals.scss'
import localFont from "next/font/local";
import HeaderComponent from '../app/components/HeaderComponent.jsx'

export const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf",
});

export const metadata = {
  title: 'Home page'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clashDisplay.className} suppressHydrationWarning={true}>
        <HeaderComponent/>
        {children}
      </body>
    </html>
  );
}

