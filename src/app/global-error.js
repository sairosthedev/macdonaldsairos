'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                500
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Something went wrong
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                An unexpected error occurred. Please try again or contact support if the problem persists.
              </p>
              <div className="space-x-4">
                <button
                  onClick={reset}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Try Again
                </button>
                <a 
                  href="/"
                  className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 