import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, MessageCircle, Video, Shield, Users } from "lucide-react";
import BackButton from "@/components/BackButton";

const HowItWorks = () => {
  const steps = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Buat Profil Menarik",
      description: "Isi profil dengan foto terbaik dan ceritakan tentang diri Anda"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Temukan & Swipe",
      description: "Jelajahi profil dan swipe kanan jika tertarik, kiri jika tidak"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Mulai Percakapan",
      description: "Kirim pesan pertama dan bangun chemistry"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Call & Kencan",
      description: "Lanjutkan dengan video call atau rencanakan kencan offline"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verifikasi Pengguna",
      description: "Sistem moderasi untuk memverifikasi keaslian pengguna"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Koneksi Berkualitas",
      description: "Temukan orang-orang dengan minat dan nilai yang sama"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Kontrol Privasi",
      description: "Atur siapa yang bisa melihat profil dan kontak Anda"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Fitur Chat Lengkap",
      description: "Pesan teks, suara, gambar, dan video call dalam satu aplikasi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cara Kerja SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan cara mudah untuk terhubung dengan single lainnya dan memulai perjalanan cinta Anda
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">4 Langkah Mudah Menemukan Cinta</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-pink-600 mx-auto mb-4">{step.icon}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Fitur Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <div className="text-pink-600 mr-4">{feature.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">🎉 Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cerita Sukses</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold">Rina & Budi - Bertemu 2023</p>
                  <p className="text-sm">"Kami bertemu melalui SEJIWAAPP dan sekarang sedang merencanakan pernikahan!"</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold">Sari & Doni - Bertemu 2024</p>
                  <p className="text-sm">"Algoritma matching-nya sangat akurat! Kami langsung klik sejak chat pertama"</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tips dari Kami</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Gunakan foto asli dan terbaru</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Jujur dalam mengisi profil</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Jadilah diri sendiri</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Sabar dalam proses pencarian</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;