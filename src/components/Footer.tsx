const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400 text-sm">
                    Nextjs-Music App is your go-to platform for discovering and streaming the latest music. We aim to connect artists and fans worldwide.
                </p>
            </div>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                    <li>Email: support@nextjsmusic.com</li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Address: 123 Music Lane, Melody City</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
                    </li>
                    <li>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                    <li>
                        <a href="/" className="hover:text-white">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-white">About</a>
                    </li>
                    <li>
                        <a href="/browse" className="hover:text-white">Browse</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-white">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 lg:col-span-4 text-center pt-8 border-t border-gray-700 text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Lagnajit Saha. All rights reserved.
            </div>
            </div>
        </footer>
    );
};

export default Footer;