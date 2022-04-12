import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

// components
import { Footer } from '../components'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* Main Content */}
        <div className="bg-zinc-900 text-white">
          <div className="container mx-auto py-12 flex flex-col min-h-screen">
            <main>
              <section>
                <Component {...pageProps} />
              </section>
            </main>

            <Footer />
          </div>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
