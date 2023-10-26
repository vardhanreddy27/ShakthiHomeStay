import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Shakthi Home Stay',
  description: "Discover tranquil homestays in Chikkamagaluru, nestled amidst lush coffee plantations. Our carefully curated selection offers a blend of modern comfort and authentic local experiences. Immerse yourself in nature's embrace while enjoying warm hospitality and serene surroundings. Plan your escape to these idyllic retreats and create cherished memories in this picturesque destination.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><head>
                <link rel="shortcut icon" href="/public/favicon.png" />
       <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"></link>
<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></Script>
<Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script> <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></Script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
    </head>
      <body className={inter.className}>{children}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init()
  </script>
      </body>
    </html>
  )
}