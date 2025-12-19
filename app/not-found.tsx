import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-primary p-6 text-center">
      <h2 className="font-headline text-6xl mb-4">404</h2>
      <p className="text-xl text-gray-500 mb-8">Page not found.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
        Return Home
      </Link>
    </div>
  )
}