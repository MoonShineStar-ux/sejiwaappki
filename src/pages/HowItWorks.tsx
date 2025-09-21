import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, MessageCircle, Video, Shield, Users } from "lucide-react";
import BackButton from "@/components/BackButton";

const HowItWorks = () => {
  const steps = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Mendaftar dan Membuat Profil",
      description: "Buat profil dengan foto asli dan isi minat Anda untuk mendapatkan rekomendasi yang tepat"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Menjelajahi Profil",
      description: "Lihat profil orang-orang di sekitar Anda dan geser ke kanan jika tertarik"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Mencocokkan (It's a Match!)",
      description: "Jika mereka juga menyukai Anda, itu berarti kalian cocok dan bisa mulai mengobrol"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Mengobrol dan Berkencan",
      description: "Gunakan fitur chat teks, suara, gambar, dan video untuk mengenal satu sama lain lebih baik"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verifikasi Pengguna",
      description: "Sistem moderasi untuk mengidentifikasi foto asli dan memverifikasi pengguna"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Koneksi Jujur",
      description: "Menekankan pada koneksi yang otentik, baik di dunia maya maupun dalam kehidupan nyata"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Kontrol Privasi",
      description: "Pilih untuk menyembunyikan kontak Anda agar tidak muncul dalam saran di aplikasi"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Fitur Interaktif",
      description: "Obrolan waktu nyata, pesan suara, dan gambar untuk mempermudah interaksi"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cara Kerja SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan cara mudah untuk terhubung dengan orang baru dan memperluas lingkaran sosial Anda
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">4 Langkah Mudah</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-purple-600 mx-auto mb-4">{step.icon}</div>
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
                  <div className="text-purple-600 mr-4">{feature.icon}</div>
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

        {/* Live Room Section */}
        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Live Room</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fitur Live Streaming</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Live streaming dengan host profesional</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Menerima gift dari viewers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Withdraw gift yang diterima</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Live bersama host Komal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>PK (Player Kill) dengan user lain</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tujuan SEJIWAAPP</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Menemukan teman dan jodoh</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Memperluas lingkaran sosial</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Bertemu orang baru dengan minat sama</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Membangun koneksi yang meaningful</span>
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