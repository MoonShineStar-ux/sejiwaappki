import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "Kami peduli dengan setiap perjalanan kesehatan mental Anda"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Memberikan layanan terbaik dengan standar profesional tinggi"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "Jujur dan terbuka dalam setiap aspek layanan kami"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Membangun lingkungan yang supportif dan inklusif"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform kesehatan mental modern yang menghubungkan Anda dengan dukungan yang Anda butuhkan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
            <p className="text-gray-700 mb-6">
              Menjadikan kesehatan mental sebagai prioritas utama dalam masyarakat modern 
              dengan menyediakan akses mudah ke layanan konseling profesional dan support system yang kuat.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
            <p className="text-gray-700">
              Memberdayakan individu untuk mengambil kendali atas kesehatan mental mereka melalui 
              teknologi inovatif, komunitas yang supportif, dan layanan profesional yang terjangkau.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nilai-nilai Kami</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="text-purple-600 mb-2">{value.icon}</div>
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

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Tim Kami</h2>
          <p className="text-gray-600 mb-6">
            Didukung oleh tim psikolog, developer, dan konselor profesional yang berdedikasi
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold">50+</h3>
              <p className="text-sm text-gray-600">Psikolog Profesional</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold">100+</h3>
              <p className="text-sm text-gray-600">Konselor Bersertifikat</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold">10.000+</h3>
              <p className="text-sm text-gray-600">Pengguna Aktif</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold">5+</h3>
              <p className="text-sm text-gray-600">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;