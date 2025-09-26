import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle, Users, MessageCircle, MapPin, Phone } from "lucide-react";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";

const Safety = () => {
  const safetyTips = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pertemuan di Tempat Umum",
      tips: [
        "Selalu bertemu di tempat umum yang ramai",
        "Beritahu teman atau keluarga tentang rencana kencan",
        "Atur transportasi sendiri untuk pulang pergi"
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Komunikasi Aman",
      tips: [
        "Gunakan fitur chat aplikasi sebelum bertemu",
        "Jangan bagikan informasi pribadi terlalu cepat",
        "Percayai insting Anda - jika merasa tidak nyaman, batalkan kencan"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokasi dan Transportasi",
      tips: [
        "Pilih lokasi yang Anda kenal dengan baik",
        "Pastikan ada sinyal telepon yang baik",
        "Simpan nomor darurat yang mudah diakses"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Kesiapan Darurat",
      tips: [
        "Bawa power bank dan pastikan ponsel terisi",
        "Simpan uang tunai untuk keadaan darurat",
        "Ketahui rute keluar darurat dari lokasi kencan"
      ]
    }
  ];

  const warningSigns = [
    "Meminta informasi finansial atau uang",
    "Menghindari pertemuan di tempat umum",
    "Tekanan untuk melakukan hal yang tidak nyaman",
    "Perilaku yang tidak konsisten atau mencurigakan"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-pink-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Tips Keamanan Berkencan</h1>
            </div>
            <p className="text-gray-600 text-lg">Keamanan Anda adalah prioritas utama kami. Ikuti panduan ini untuk pengalaman kencan yang aman dan menyenangkan.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {safetyTips.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="text-pink-600 mr-3">{section.icon}</div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-red-50 border-red-200 mb-8">
            <CardHeader>
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <CardTitle className="text-red-800">Tanda Peringatan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Laporkan Masalah</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-4">
                Jika Anda mengalami atau melihat perilaku yang mencurigakan, segera laporkan melalui:
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Fitur laporkan dalam aplikasi</li>
                <li>• Email: safety@sejiwaapp.com</li>
                <li>• Telepon: +62882 0017 77721 (24/7)</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;