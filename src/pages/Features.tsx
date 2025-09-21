import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageCircle, Users, BookOpen, Calendar, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Konseling 1-on-1",
      description: "Sesi privat dengan konselor profesional melalui chat, voice, atau video call"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Support Group",
      description: "Bergabung dengan komunitas yang saling mendukung dan berbagi pengalaman"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Meditasi Terpandu",
      description: "Koleksi meditasi untuk mengurangi stres dan meningkatkan fokus"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Journaling Mood",
      description: "Lacak perasaan dan emosi Anda dengan tools journaling yang intuitif"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Pantau perkembangan kesehatan mental Anda dengan analytics yang detail"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Personalized Plan",
      description: "Program yang disesuaikan dengan kebutuhan dan tujuan pribadi Anda"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai fitur yang dirancang khusus untuk mendukung perjalanan kesehatan mental Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Mulai Perjalanan Anda Hari Ini</h2>
          <p className="text-gray-600 mb-6">
            Bergabung dengan ribuan anggota yang telah merasakan manfaat SEJIWAAPP
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;