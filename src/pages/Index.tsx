import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Star, Users, Shield, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">SEJIWAAPP</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Paket</Link>
              <Link to="/features" className="text-gray-700 hover:text-purple-600 transition-colors">Fitur</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700">Mulai Sekarang</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Temukan Ketenangan dengan <span className="text-purple-600">SEJIWAAPP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Aplikasi kesehatan mental terdepan yang membantu Anda mencapai keseimbangan jiwa dan raga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Mulai Gratis
            </Button>
            <Button size="lg" variant="outline">
              Lihat Paket
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih SEJIWAAPP?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform kesehatan mental komprehensif dengan fitur-fitur terbaik untuk mendukung perjalanan Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-purple-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Konseling Profesional</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Akses ke psikolog dan konselor profesional yang siap membantu 24/7
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Komunitas Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bergabung dengan komunitas yang saling mendukung dan memahami
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-green-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Privasi Terjamin</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Data pribadi Anda aman dan terjaga dengan enkripsi tingkat tinggi
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-orange-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Konten Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Akses ke meditasi, artikel, dan tools eksklusif untuk kesehatan mental
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;