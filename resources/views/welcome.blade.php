<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Noraxai.com - Premium Domain for Sale</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
<body class="bg-[#0a0a0a] text-white flex items-center justify-center min-h-screen selection:bg-[#ff2d20] selection:text-white overflow-hidden">
    <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
        <!-- Background Effects -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <main class="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
            
            <!-- Badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span class="flex h-2 w-2 relative mr-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-xs font-medium tracking-wide text-gray-300 uppercase">Available for Sale</span>
            </div>

            <!-- Domain Name -->
            <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-2xl">
                noraxai.com
            </h1>

            <!-- Description -->
            <p class="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
                Secure this premium, brandable domain for your next big venture. <br class="hidden md:block"> Short, memorable, and ready for deployment.
            </p>

            <!-- Pricing Badge -->
            <div class="flex flex-col items-center space-y-2 py-6">
                <div class="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                    $150,000 <span class="text-2xl md:text-3xl text-gray-500 font-normal">USD</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-white/5">
                    Price is negotiatable
                </span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-4 w-full md:w-auto pt-4">
                <a href="mailto:yunusnajahuddin@gmail.com?subject=Offer for noraxai.com" 
                   class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 w-full md:w-auto">
                    <span class="mr-2">Make an Offer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </a>
                
                <a href="mailto:yunusnajahuddin@gmail.com" 
                   class="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 w-full md:w-auto">
                    Contact Seller
                </a>
            </div>

            <!-- Footer Info -->
            <div class="pt-12 text-sm text-gray-600">
                <p>&copy; {{ date('Y') }} Noraxai. All rights reserved.</p>
            </div>
        </main>
    </div>

    <style>
        @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
    </style>
</body>
</html>
