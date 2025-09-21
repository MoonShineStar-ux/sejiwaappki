import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, X } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useState } from "react";

const Pricing = () => {
  const [duration, setDuration] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "BASIC",
      price: {
        weekly: "Gratis",
        monthly: "Gratis",
        yearly: "Gratis"
      },
      features: [
        { text: "Support di jam kerja", included: true },
        { text: "Swipe/Like 25 per hari", included: true },
        { text: "Tidak bisa batalkan swipe", included: false },
        { text: "Lokasi random", included: true },
        { text: "Tidak bisa call dan video call", included: false },
        { text: "Nama tidak bisa diganti", included: false },
        { text: "Tidak ada lencana", included: false },
        { text: "Tidak bisa jadi host live room", included: false }
      ],
      popular: false,
      free: true
    },
    {
      name: "VIP",
      price: {
        weekly: "Rp 50.000",
        monthly: "Rp 150.000",
        yearly: "Rp 1.500.000"
      },
      features: [
        { text: "Support di jam kerja", included: true },
        { text: "Suka tanpa batas", included: true },
        { text: "5 Super Like setiap hari", included: true },
        { text: "Batalkan/undo aksi swipe", included: true },
        { text: "Bisa merubah jarak pencarian", included: true },
        { text: "Lencana VIP", included: true },
        { text: "Bisa call dan video call", included: true },
        { text: "Bisa ganti nama 1 kali", included: true },
        { text: "Bisa jadi host live room", included: true }
      ],
      popular: false,
      free: false
    },
    {
      name: "PREMIUM",
      price: {
        weekly: "Rp 100.000",
        monthly: "Rp 300.000",
        yearly: "Rp 3.000.000"
      },
      features: [
        { text: "Support 24/7", included: true },
        { text: "Suka tanpa batas", included: true },
        { text: "5 Super Like setiap hari", included: true },
        { text: "Batalkan/undo aksi swipe", included: true },
        { text: "Bisa merubah jarak pencarian", included: true },
        { text: "Lencana Premium", included: true },
        { text: "Bisa call dan video call", included: true },
        { text: "Bisa ganti nama 1 kali", included: true },
        { text: "Bisa jadi host live room", included: true },
        { text: "Bisa lihat yang menyukai", included: true },
        { text: "Buka kunci yang melihat saya", included: true },
        { text: "Recommended pengguna berkualitas", included: true },
        { text: "Berkencan dengan aman", included: true }
      ],
      popular: true,
      free: false
    },
    {
      name: "ELITE",
      price: {
        weekly: "Rp 200.000",
        monthly: "Rp 600.000",
        yearly: "Rp 6.000.000"
      },
      features: [
        { text: "Support 24/7", included: true },
        { text: "Suka tanpa batas", included: true },
        { text: "Super Like tidak terbatas", included: true },
        { text: "Batalkan/undo aksi swipe", included: true },
        { text: "Bisa merubah jarak pencarian", included: true },
        { text: "Lencana Eksklusif Elite", included: true },
        { text: "Bisa call dan video call", included: true },
        { text: "Bisa ganti nama 2 kali", included: true },
        { text: "Bisa jadi host live room", included: true },
        { text: "Bisa lihat yang menyukai", included: true },
        { text: "Buka kunci yang melihat saya", included: true },
        { text: "Recommended pengguna berkualitas", included: true },
        { text: "Berkencan dengan aman", included: true },
        { text: "Exposure penuh", included: true },
        { text: "Pencocokan 1 klik", included: true }
      ],
      popular: false,
      free: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return plan.price[duration];
  };

  const getDurationText = () => {
    switch (duration) {
      case 'weekly': return '/ minggu';
      case 'monthly': return '/ bulan';
      case 'yearly': return '/ tahun';
      default: return '/ bulan';
    }
  };

  const calculateSavings = (weeklyPrice: string, monthlyPrice: string, yearlyPrice: string) => {
    const weeklyNum = parseInt(weeklyPrice.replace(/[^\d]/g, ''));
    const monthlyNum = parseInt(monthlyPrice.replace(/[^\d]/g, ''));
    const yearlyNum = parseInt(yearlyPrice.replace(/[^\d]/g, ''));
    
    if (duration === 'monthly') {
      const monthlyFromWeekly = weeklyNum * 4;
      return Math.round((1 - monthlyNum / monthlyFromWeekly) * 100);
    } else if (duration === 'yearly') {
      const yearlyFromMonthly = monthlyNum * 12;
      return Math.round((1 - yearlyNum / yearlyFromMonthly) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket yang Tepat untuk Anda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tingkatkan pengalaman kencan Anda dengan paket premium SEJIWAAPP
          </p>
        </div>

        {/* Duration Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <div className="flex space-x-1">
              {(['weekly', 'monthly', 'yearly'] as const).map((dur) => (
                <button
                  key={dur}
                  onClick={() => setDuration(dur)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    duration === dur
                      ? 'bg-pink-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {dur === 'weekly' ? 'Mingguan' : dur === 'monthly' ? 'Bulanan' : 'Tahunan'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={plan.popular ? "border-2 border-pink-600 shadow-lg relative" : ""}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    Populer
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className={plan.free ? "text-green-600 font-bold text-lg" : "text-lg font-semibold text-gray-900"}>
                  {getPrice(plan)} {plan.free ? "" : getDurationText()}
                </CardDescription>
                {!plan.free && duration !== 'weekly' && (
                  <div className="text-sm text-green-600 font-semibold">
                    💰 Hemat {calculateSavings(plan.price.weekly, plan.price.monthly, plan.price.yearly)}%
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  {plan.free ? "Mulai Gratis" : "Pilih Paket"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Keuntungan Berlangganan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Mingguan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-pink-600">Flexible</p>
                <p className="text-sm text-gray-600">Coba dulu sebelum commit</p>
                <div className="mt-2 text-xs text-gray-500">
                  ⚡ Cocok untuk trial period
                </div>
              </CardContent>
            </Card>
            
            <Card className={duration === 'monthly' ? "border-2 border-pink-600" : ""}>
              <CardHeader>
                <CardTitle>Bulanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-pink-600">Populer</p>
                <p className="text-sm text-gray-600">Hemat 15% dari mingguan</p>
                <div className="mt-2 text-xs text-gray-500">
                  🏆 Pilihan paling ekonomis
                </div>
              </CardContent>
            </Card>
            
            <Card className={duration === 'yearly' ? "border-2 border-pink-600" : ""}>
              <CardHeader>
                <CardTitle>Tahunan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-pink-600">Best Value</p>
                <p className="text-sm text-gray-600">Hemat 30% dari bulanan</p>
                <div className="mt-2 text-xs text-gray-500">
                  💎 Value terbaik untuk komitmen jangka panjang
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">💡 Tips Memilih Durasi</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <strong>Mingguan:</strong> Ideal untuk mencoba fitur premium
            </div>
            <div>
              <strong>Bulanan:</strong> Paling fleksibel untuk kebutuhan bulanan
            </div>
            <div>
              <strong>Tahunan:</strong> Hemat maksimal untuk komitmen jangka panjang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;