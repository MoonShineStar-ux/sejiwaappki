import { Link } from "react-router-dom";
import Logo from "./Logo";

interface HeaderProps {
  showAuthButtons?: boolean;
}

const Header = ({ showAuthButtons = true }: HeaderProps) => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="lg" />
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Fitur</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Harga</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">Tentang</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">Cara Kerja</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Kontak</Link>
          </nav>
          {/* Tombol login/daftar dihapus */}
        </div>
      </div>
    </header>
  );
};

export default Header;