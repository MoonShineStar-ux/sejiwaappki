import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Logo from "@/components/Logo";
import DownloadSection from "@/components/DownloadSection";
import VisitorCounter from "@/components/VisitorCounter";
import { PoweredBySejiwaapp } from "@/components/PoweredBySejiwaapp";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="lg" />
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Fitur</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Harga</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">Tentang</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">Cara Kerja</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Kontak</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/app">Masuk</Link>
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                <Link to="/app">Daftar</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Temukan Cinta dengan <span className="text-pink-600">SEJIWAAPP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Aplikasi kencan dan perjodohan terdepan yang membantu Anda menemukan pasangan terbaik 
            dengan cara yang menyenangkan dan aman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
              <Link to="/app">
                <Play className="h-4 w-4 mr-2" />
                Coba Aplikasi
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-it-works">
                Lihat Cara Kerja
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mengapa Memilih SEJIWAAPP?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💘</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Matching Cerdas</h3>
              <p className="text-gray-600">Algoritma pintar yang mempertemukan Anda dengan pasangan yang cocok</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Aman</h3>
              <p className="text-gray-600">Platform terverifikasi dengan sistem keamanan terbaik</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hasil Nyata</h3>
              <p className="text-gray-600">Ribuan success stories dari pengguna kami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo className="text-white" />
              <p className="text-gray-400 mt-4">
                Aplikasi kencan modern untuk menemukan pasangan terbaik
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link to="/careers" className="hover:text-white">Karir</Link></li>
                <li><Link to="/contact" className="hover:text-white">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Bantuan</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privasi</Link></li>
                <li><Link to="/terms" className="hover:text-white">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700" asChild>
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700" asChild>
                  <a href="https://appstore.com" target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <PoweredBySejiwaapp />
          </div>
        </div>
      </footer>

      <VisitorCounter />
    </div>
  );
};

export default Index;