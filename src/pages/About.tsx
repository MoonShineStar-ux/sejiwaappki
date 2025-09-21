import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, MessageCircle, Video, Star } from "lucide-react";
import BackButton from "@/components/BackButton";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Koneksi yang Tulus",
      description: "Kami percaya pada koneksi yang jujur dan meaningful"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Keamanan Terjamin",
      description: "Platform yang aman dengan verifikasi pengguna"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Komunitas Berkualitas",
      description: "Temukan orang-orang dengan minat dan nilai yang sama"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Komunikasi Mudah",
      description: "Fitur chat dan video call yang nyaman"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-10 w-10" />,
      number: "50.000+",
      label: "Pengguna Aktif"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      number: "10.000+",
      label: "Match Berhasil"
    },
    {
      icon: <Video className="h-10 w-10" />,
      number: "5.000+",
      label: "Video Call Harian"
    },
    {
      icon: <Star className="h-10 w-10" />,
      number: "4.8",
      label: "Rating Aplikasi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aplikasi kencan dan perjodohan modern yang membantu Anda menemukan pasangan terbaik 
            dengan cara yang menyenangkan dan aman
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
            <p className="text-gray-700 mb-6">
              Menjadi platform kencan terdepan yang menghubungkan jutaan hati di Indonesia 
              melalui teknologi inovatif dan pengalaman pengguna yang luar biasa.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
            <p className="text-gray-700">
              Memberikan pengalaman kencan online yang aman, nyaman, dan efektif dengan 
              fitur-fitur canggih yang memudahkan Anda menemukan jodoh yang tepat.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nilai-nilai Kami</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="text-pink-600 mb-2">{value.icon}</div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">SEJIWAAPP dalam Angka</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-pink-600">{stat.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Cara Kerja SEJIWAAPP</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="text-2xl mb-2">1</div>
                <CardTitle>Buat Profil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Buat profil menarik dengan foto terbaik dan cerita tentang diri Anda
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="text-2xl mb-2">2</div>
                <CardTitle>Temukan & Swipe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Jelajahi profil dan swipe kanan jika tertarik, kiri jika tidak
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="text-2xl mb-2">3</div>
                <CardTitle>Chat & Kencan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mulai percakapan dan rencanakan kencan jika sudah cocok
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">🛡️ Keamanan & Privasi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Fitur Keamanan Kami</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Verifikasi profil dengan foto</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Laporkan pengguna yang mencurigakan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Blokir pengguna yang tidak diinginkan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Enkripsi data pribadi</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tips Kencan Aman</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Selamat bertemu di tempat umum</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Beritahu teman tentang rencana kencan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Percayai insting Anda</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Jangan bagikan informasi pribadi terlalu cepat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;