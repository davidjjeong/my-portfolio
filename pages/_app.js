import '@/styles/globals.css'
import Layout from '@/sections/Layout/Layout'
import { ThemeProvider } from 'next-themes';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute='class'>
      <div className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
