import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Users, Video, Shield, Star } from "lucide-react";
import BackButton from "@/components/BackButton";

const Features = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Swipe & Match",
      description: "Temukan pasangan dengan swipe mudah dan sistem matching cerdas"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Chat Premium",
      description: "Kirim pesan teks, suara, dan gambar dengan fitur read receipt"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Call",
      description: "Video call berkualitas tinggi tanpa perlu keluar aplikasi"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verifikasi Profil",
      description: "Sistem verifikasi untuk memastikan keaslian setiap profil"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Komunitas Eksklusif",
      description: "Bergabung dengan komunitas single professionals Indonesia"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Features",
      description: "Akses fitur premium untuk meningkatkan peluang menemukan jodoh"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai fitur canggih yang dirancang khusus untuk membantu Anda 
            menemukan pasangan ideal dengan cara yang menyenangkan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-pink-600 mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Mulai Perjalanan Cinta Anda</h2>
          <p className="text-gray-600 mb-6">
            Bergabung dengan ribuan anggota yang telah menemukan pasangan melalui SEJIWAAPP
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;