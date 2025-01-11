import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Connect with the World on Piechat
            </h1>
            <p className="text-lg mb-8">
              Experience seamless communication with friends, family, and colleagues.
            </p>
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                Start Chatting Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zM9 19h2a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
            <p>
              Enjoy instant messaging with friends and family, wherever they are.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8v10c0 1.103-.897 2-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zm-1 0c0 .663-.537 1.2-1.2 1.2H5.2c-.663 0-1.2-.537-1.2-1.2V6c0-.663.537-1.2 1.2-1.2h10c.663 0 1.2.537 1.2 1.2v10z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p>
              Create group chats to stay connected with your friends, family, or
              colleagues.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20.493 17 12a1 1 0 00-1-1H5a1 1 0 00-1 1v8.493M13 16a1 1 0 011-1H17m0 0V10a1 1 0 011-1H19m0 0V4c0-1.105-.895-2-2-2H7a2 2 0 00-2 2v12c0 1.105.895 2 2 2h10a2 2 0 002-2z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p>
              Easily share files and documents with your contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
              <p>
                Limited features, perfect for personal use.
              </p>
              <ul className="list-disc ml-4 mt-4">
                <li>Unlimited messages</li>
                <li>Group chats</li>
                <li>Limited file sharing</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Start Free
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
              <p>
                For teams and businesses.
              </p>
              <ul className="list-disc ml-4 mt-4">
                <li>Unlimited messages</li>
                <li>Group chats</li>
                <li>Unlimited file sharing</li>
                <li>Advanced features</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                $9.99/month
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
              <p>
                For large organizations.
              </p>
              <ul className="list-disc ml-4 mt-4">
                <li>All Pro features</li>
                <li>Customizable branding</li>
                <li>Priority support</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text"></footer>
    </div>
  )
}
  
export const metadata = {
  title: 'Home - Piechat',
  description: 'Piechat helps you connect with people of your choice',
}