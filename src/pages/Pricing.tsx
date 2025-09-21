import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "BASIC",
      price: {
        weekly: "Rp 25.000",
        monthly: "Rp 75.000",
        yearly: "Rp 750.000"
      },
      features: [
        "Konseling chat 24/7",
        "Meditasi dasar",
        "Journaling mood",
        "Komunitas terbatas",
        "1 sesi grup per minggu"
      ]
    },
    {
      name: "VIP",
      price: {
        weekly: "Rp 50.000",
        monthly: "Rp 150.000",
        yearly: "Rp 1.500.000"
      },
      features: [
        "Semua fitur BASIC",
        "Konseling voice call",
        "Meditasi premium",
        "Progress tracking",
        "2 sesi grup per minggu",
        "Priority support"
      ]
    },
    {
      name: "PREMIUM",
      price: {
        weekly: "Rp 100.000",
        monthly: "Rp 300.000",
        yearly: "Rp 3.000.000"
      },
      features: [
        "Semua fitur VIP",
        "Konseling video call",
        "Konseling keluarga",
        "Program personalisasi",
        "Unlimited sesi grup",
        "24/7 priority support"
      ]
    },
    {
      name: "ELITE",
      price: {
        weekly: "Rp 200.000",
        monthly: "Rp 600.000",
        yearly: "Rp 6.000.000"
      },
      features: [
        "Semua fitur PREMIUM",
        "Konselor pribadi",
        "Terapi intensif",
        "Workshop eksklusif",
        "Coaching karir",
        "Emergency support",
        "Family package included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket yang Tepat untuk Anda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mulai perjalanan kesehatan mental Anda dengan paket yang sesuai kebutuhan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 2 ? "border-2 border-purple-600 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-900">
                  {plan.price.monthly} / bulan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pilihan Durasi Berlangganan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Mingguan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">Flexible</p>
                <p className="text-sm text-gray-600">Coba dulu sebelum commit</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-600">
              <CardHeader>
                <CardTitle>Bulanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">Populer</p>
                <p className="text-sm text-gray-600">Hemat 15% dari mingguan</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tahunan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">Best Value</p>
                <p className="text-sm text-gray-600">Hemat 30% dari bulanan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;