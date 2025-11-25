import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import HeaderLogo from "./Header_Logo";
import DesktopNav from "./Header_Desktop";
import RightSection from "./Header_Right_Section";
import MobileNav from "./Mobile";
export default function Header({ isLoggedIn = false, userProfile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(0,0,0,0.95)] shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopNav isLoggedIn={isLoggedIn} />

          {/* Right Section */}
          <RightSection
            isLoggedIn={isLoggedIn}
            userProfile={userProfile}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav mobileMenuOpen={mobileMenuOpen} isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}
