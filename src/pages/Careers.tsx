import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Code, Users, Shield, BarChart3, MessageSquare, TrendingUp, Building } from "lucide-react";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Tim Pengembangan & Teknologi",
      jobs: [
        "Mobile Developer (Android & iOS)",
        "Backend Developer",
        "Frontend/Web Developer",
        "UI/UX Designer",
        "QA/Tester",
        "DevOps/Cloud Engineer",
        "Cybersecurity Engineer"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Tim Produk & Manajemen",
      jobs: [
        "Product Manager",
        "Data Analyst",
        "AI/Algorithm Engineer"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tim Operasional & Moderasi",
      jobs: [
        "Content Moderator",
        "Customer Support",
        "Community Manager"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tim Marketing & Pertumbuhan",
      jobs: [
        "Digital Marketing Specialist",
        "Social Media Manager",
        "Public Relations (PR)",
        "Partnership Manager"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Tim Bisnis & Legal",
      jobs: [
        "Finance & Accounting",
        "Legal Advisor",
        "HR/Recruiter"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Tambahan Khusus",
      jobs: [
        "AI/ML Engineer (anti-spam & fake account)",
        "Payment Integration Specialist",
        "Localization Specialist/Translator"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Karir di SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan tim kami yang berdedikasi untuk menghubungkan jutaan hati di Indonesia
          </p>
        </div>

        {/* Application Deadline */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-6 w-6 text-yellow-600 mr-2" />
            <span className="text-lg font-semibold text-yellow-800">Lowongan Ditutup:</span>
          </div>
          <p className="text-yellow-700 text-xl font-bold">25 September 2026</p>
          <p className="text-yellow-600 text-sm mt-2">
            Segera kirim lamaran Anda sebelum tanggal penutupan
          </p>
        </div>

        {/* Job Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-purple-600 mb-4">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.jobs.map((job, jobIndex) => (
                    <li key={jobIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{job}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Apply */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Cara Melamar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h3 className="font-semibold mb-2">Kirim CV & Portofolio</h3>
              <p className="text-sm text-gray-600">Email ke careers@sejiwaapp.com dengan subject posisi yang dilamar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h3 className="font-semibold mb-2">Proses Seleksi</h3>
              <p className="text-sm text-gray-600">Interview dengan tim HR dan technical test jika diperlukan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h3 className="font-semibold mb-2">Joining Team</h3>
              <p className="text-sm text-gray-600">Onboarding dan mulai berkontribusi dalam tim</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Keuntungan Bergabung</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">💰</div>
              <p className="text-sm font-semibold">Gaji Kompetitif</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">🏥</div>
              <p className="text-sm font-semibold">Asuransi Kesehatan</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">🎯</div>
              <p className="text-sm font-semibold">Bonus Performa</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">📚</div>
              <p className="text-sm font-semibold">Pelatihan Berkala</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">🏠</div>
              <p className="text-sm font-semibold">Flexible Working</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">🎉</div>
              <p className="text-sm font-semibold">Team Building</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">💻</div>
              <p className="text-sm font-semibold">Equipment Modern</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white">🚀</div>
              <p className="text-sm font-semibold">Growth Opportunity</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg" asChild>
            <a href="mailto:careers@sejiwaapp.com">
              <MessageSquare className="h-5 w-5 mr-2" />
              Lamar Sekarang
            </a>
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Lowongan ditutup pada 25 September 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;