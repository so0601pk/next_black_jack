// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-lime-500">
      <Component {...pageProps} />
    </div>
  )
}
