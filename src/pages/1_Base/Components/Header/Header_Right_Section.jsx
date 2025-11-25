import { Link } from "react-router";
import { LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RightSection({
  isLoggedIn,
  userProfile,
  dropdownOpen,
  setDropdownOpen,
}) {
  return (
    <div className="hidden md:flex items-center gap-4">

      {/* Logged-in User */}
      {isLoggedIn && userProfile ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {userProfile.name.charAt(0)}
            </div>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-[rgba(20,20,25,0.95)] border border-gray-700 rounded-xl shadow-lg py-2 backdrop-blur-sm"
              >
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-indigo-500/20 transition-colors rounded-lg"
                >
                  <User size={16} /> Profile
                </Link>

                <button
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-white hover:bg-red-500/20 transition-colors rounded-lg"
                >
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // Login + Register Pill
        <div className="flex items-center gap-2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">

          {/* Login Button */}
          <Link
            to="/login"
            className="px-4 py-2 text-white/80 hover:text-white transition rounded-full"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="
              px-4 py-2 
              bg-white 
              text-black 
              font-semibold 
              rounded-full 
              transition-all
              hover:scale-105 
              shadow-[0_0_12px_rgba(255,255,255,0.5)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
            "
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
