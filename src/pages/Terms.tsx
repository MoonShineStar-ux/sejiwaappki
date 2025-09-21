import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Smartphone, Wifi, Calendar } from "lucide-react";
import BackButton from "@/components/BackButton";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Syarat & Ketentuan SEJIWAAPP</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ketentuan penggunaan aplikasi Sejiwaapp untuk pengalaman yang aman dan menyenangkan
          </p>
        </div>

        {/* Requirements Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Syarat Utama</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">Usia Minimal 18 Tahun</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Anda harus berusia minimal 18 tahun untuk menggunakan aplikasi Sejiwaapp
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Perangkat Kompatibel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Perangkat Android atau iOS yang mendukung aplikasi Sejiwaapp
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Koneksi Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Terhubung ke internet untuk mengunduh dan menggunakan aplikasi
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Langkah-langkah Menginstal Aplikasi SEJIWAAPP</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h3 className="font-semibold mb-2">Buka Toko Aplikasi</h3>
              <p className="text-sm text-gray-600">
                Buka Google Play Store (Android) atau App Store (iOS) di ponsel Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h3 className="font-semibold mb-2">Cari SEJIWAAPP</h3>
              <p className="text-sm text-gray-600">
                Ketik "Sejiwaapp" di bilah pencarian dan tekan enter
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h3 className="font-semibold mb-2">Unduh & Instal</h3>
              <p className="text-sm text-gray-600">
                Pilih aplikasi dan ketuk tombol "Unduh" atau "Instal"
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">4</div>
              <h3 className="font-semibold mb-2">Setujui Persyaratan</h3>
              <p className="text-sm text-gray-600">
                Setujui izin akses dan baca Kebijakan Privasi
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>📋 Persetujuan yang Diperlukan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Izin akses kamera dan foto</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Izin akses lokasi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Izin notifikasi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Penyetujuan Syarat Layanan</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Penyetujuan Kebijakan Privasi</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚠️ Penting Diperhatikan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span>Pastikan usia Anda sudah memenuhi syarat (18+ tahun)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span>Gunakan foto asli dan terbaru untuk profil</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span>Jaga privasi dan keamanan data pribadi</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span>Laporkan pengguna yang mencurigakan</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span>Patuhi aturan komunitas Sejiwaapp</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Step */}
        <div className="mt-12 bg-pink-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Siap Memulai?</h3>
          <p className="text-gray-700 mb-6">
            Setelah instalasi selesai, buka aplikasi dan buat akun atau masuk untuk mulai menggunakan Sejiwaapp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.sejiwaapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Download di Google Play
            </a>
            <a 
              href="https://apps.apple.com/id/app/sejiwaapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download di App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;