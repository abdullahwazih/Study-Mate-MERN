import { Link } from "react-router";

export default function DesktopNav({ isLoggedIn }) {
  return (
    <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
      <Link to="/" className="text-white/80 hover:text-white transition-colors">
        Home
      </Link>

      <Link to="/find-partners" className="text-white/80 hover:text-white transition-colors">
        Find Partners
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/create-profile" className="text-white/80 hover:text-white transition-colors">
            Create Profile
          </Link>

          <Link to="/my-connections" className="text-white/80 hover:text-white transition-colors">
            My Connections
          </Link>
        </>
      )}
    </nav>
  );
}
