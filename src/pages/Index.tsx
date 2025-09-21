import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Shield, Play, Download, Brain, Cloud, Smile, Activity } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";
import { PoweredBySejiwaapp } from "@/components/PoweredBySejiwaapp";
import Logo from "@/components/Logo"; // Import komponen logo baru

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Paket</Link>
              <Link to="/features" className="text-gray-700 hover:text-purple-600 transition-colors">Fitur</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">Cara Kerja</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
              <Link to="/app" className="text-purple-600 font-semibold">Coba App</Link>
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
            Aplikasi kesehatan mental dan sosial terdepan yang membantu Anda mencapai keseimbangan jiwa dan raga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <Link to="/app">
                <Play className="h-4 w-4 mr-2" />
                Coba Aplikasi
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-it-works">
                <Play className="h-4 w-4 mr-2" />
                Lihat Cara Kerja
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visitor Counter Section */}
      <section className="container mx-auto px-4 mb-16">
        <VisitorCounter />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih SEJIWAAPP?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform kesehatan mental dan sosial komprehensif dengan fitur-fitur terbaik untuk mendukung perjalanan Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
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
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Live Room</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Live streaming, terima gift, dan berinteraksi dengan komunitas
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* New App Features */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fitur Baru di Aplikasi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Info Cuaca</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Pantau kondisi cuaca terkini</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full">
                  <Smile className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Pelacakan Mood</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Catat dan pantau perasaan Anda</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Meditasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Sesi meditasi terpandu</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Coba Aplikasi Sekarang!</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Jelajahi semua fitur kesehatan mental dalam satu aplikasi yang mudah digunakan
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8" asChild>
            <Link to="/app">
              <Play className="h-4 w-4 mr-2" />
              Mulai Eksplorasi
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer baru */}
      <PoweredBySejiwaapp />
    </div>
  );
};

export default Index;