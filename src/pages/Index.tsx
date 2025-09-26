import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Heart, Shield, Users, MessageCircle, Video, Star, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import DownloadSection from "@/components/DownloadSection";
import { PoweredBySejiwaapp } from "@/components/PoweredBySejiwaapp";

const Index = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Matching Cerdas",
      description: "Algoritma pintar yang mempertemukan Anda dengan pasangan yang cocok berdasarkan minat dan nilai"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Aman",
      description: "Platform terverifikasi dengan sistem keamanan terbaik dan verifikasi pengguna"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Chat Premium",
      description: "Fitur chat lengkap dengan read receipt, pesan suara, dan gambar"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Call",
      description: "Video call berkualitas tinggi tanpa perlu keluar aplikasi"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Komunitas Berkualitas",
      description: "Temukan orang-orang dengan minat dan nilai yang sama"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rating Tinggi",
      description: "4.8 rating dengan ribuan review positif dari pengguna"
    }
  ];

  const stats = [
    { number: "50.000+", label: "Pengguna Aktif" },
    { number: "10.000+", label: "Match Berhasil" },
    { number: "5.000+", label: "Video Call Harian" },
    { number: "99%", label: "Kepuasan Pengguna" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Temukan Cinta Sejati dengan{' '}
              <span className="text-pink-600 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                SEJIWAAPP
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aplikasi kencan dan perjodohan modern yang membantu Anda menemukan pasangan terbaik 
              dengan cara yang menyenangkan, aman, dan terpercaya. Mulai perjalanan cinta Anda hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg" asChild>
                <Link to="/download">
                  <Play className="h-5 w-5 mr-2" />
                  Download Sekarang
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/how-it-works">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih SEJIWAAPP?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fitur-fitur unggulan yang dirancang khusus untuk pengalaman kencan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-pink-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Cinta Anda?
          </h2>
          <p className="text-pink-100 text-xl mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan anggota yang telah menemukan pasangan melalui SEJIWAAPP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
              <Link to="/download">
                Download Aplikasi
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-6 text-lg" asChild>
              <Link to="/pricing">
                Lihat Paket Premium
              </Link>
            </Button>
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
              <div className="flex items-center mb-4">
                <Logo className="text-white" />
              </div>
              <p className="text-gray-400">
                Platform kencan modern untuk menemukan pasangan terbaik dengan cara yang aman dan menyenangkan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Karir</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Bantuan</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/safety" className="hover:text-white transition-colors">Tips Keamanan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Download Aplikasi</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700 border-gray-700" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.sejiwaapp" target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700 border-gray-700" asChild>
                  <a href="https://apps.apple.com/id/app/sejiwaapp" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default Index;