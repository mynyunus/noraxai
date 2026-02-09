import { useState } from 'react'

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white flex items-center justify-center min-h-screen selection:bg-[#ff2d20] selection:text-white overflow-hidden font-sans">
      <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <main className="flex flex-col items-center text-center space-y-8 animate-fade-in-up py-12 md:py-20">

          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Available for Sale</span>
          </div>

          {/* Domain Name */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-2xl">
            noraxai.com
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
            Secure this premium, brandable domain for your next big venture. <br className="hidden md:block" /> Short, memorable, and ready for deployment.
          </p>

          {/* Pricing Badge */}
          <div className="flex flex-col items-center space-y-2 py-6">
            <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              $150,000 <span className="text-2xl md:text-3xl text-gray-500 font-normal">USD</span>
            </div>
            <span className="text-sm text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-white/5">
              Price is negotiatable
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto pt-4">
            <a href="mailto:yunusnajahuddin@gmail.com?subject=Offer for noraxai.com"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 w-full md:w-auto cursor-pointer">
              <span className="mr-2">Make an Offer</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </a>

            <a href="mailto:yunusnajahuddin@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 w-full md:w-auto cursor-pointer">
              Contact Seller
            </a>
          </div>

          {/* Footer Info */}
          <div className="pt-12 text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Noraxai. All rights reserved.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
