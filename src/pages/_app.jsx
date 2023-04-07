import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 dark:bg-slate-900">
        <div className='hidden dark:block'>
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-teal-500/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] "
            aria-hidden="true" >
            <defs>
              <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse" >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20 ">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
        </div>
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-gray-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
