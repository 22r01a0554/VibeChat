import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold">
            PieChat
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>

            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <UserButton/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar