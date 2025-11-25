import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ mobileMenuOpen, isLoggedIn }) {
    return (
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden pb-4 mt-2 space-y-2 text-lg bg-[rgba(20,20,25,0.95)] rounded-xl"
                >
                    <Link
                        to="/"
                        className="block px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    >
                        Home
                    </Link>

                    <Link
                        to="/find-partners"
                        className="block px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    >
                        Find Partners
                    </Link>

                    {/* Logged-in only */}
                    {isLoggedIn && (
                        <>
                            <Link
                                to="/create-profile"
                                className="block px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                            >
                                Create Profile
                            </Link>
                            <Link
                                to="/my-connections"
                                className="block px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                            >
                                My Connections
                            </Link>
                        </>
                    )}

                    {/* Guest only */}
                    {!isLoggedIn && (
                        <>
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-transform font-semibold"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
