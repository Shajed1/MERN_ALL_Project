import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* ব্র্যান্ড */}
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-400">ShopVerse</h2>
                        <p className="mt-3 text-gray-400 text-sm">
                            আপনার সব চাহিদার একমাত্র ঠিকানা। মানসম্মত পণ্য, সেরা দাম, দ্রুত ডেলিভারি।
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* দ্রুত লিংক */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* কাস্টমার সার্ভিস */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-indigo-400 transition">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* নিউজলেটার */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                        <p className="text-sm text-gray-400 mb-3">
                            আপডেট ও অফার পেতে সাবস্ক্রাইব করুন।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* কপিরাইট */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;