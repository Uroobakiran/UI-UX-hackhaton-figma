import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
       
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Links</h4>
          <ul className="space-y-2">
            <li>
            <Link href="#" className="hover:underline hover:text-blue-500">
                Home
                </Link>
            </li>
            <li>
            <Link href="#" className="hover:underline hover:text-blue-500">
                Shop
                </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-blue-500">
                About
                </Link>
            </li>
            <li>
            <Link href="#" className="hover:underline hover:text-blue-500">
                Contact
                </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Help</h4>
          <ul className="space-y-2">
            <li>
            <Link href="#" className="hover:underline hover:text-blue-500">
                Payment Options
                </Link>
            </li>
            <li>
            <Link href="#" className="hover:underline hover:text-blue-500">
                Returns
                </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-blue-500">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Newsletter</h4>
          <p className="mb-4 text-gray-600">
            Subscribe to receive the latest updates and offers.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-8 text-center text-gray-500">
        © 2022 Meublé House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
