import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Mail, Phone, Globe } from "lucide-react";
import BackButton from "@/components/BackButton";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Kebijakan Privasi SEJIWAAPP</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tanggal efektif: 1 Januari 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Selamat Datang di SEJIWAAPP</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Privasi dan keamanan data pengguna adalah prioritas kami. Dokumen ini menjelaskan jenis data yang kami kumpulkan, 
                bagaimana kami menggunakannya, dengan siapa data dibagikan, hak-hak Anda sebagai pengguna, dan langkah-langkah 
                yang kami ambil untuk melindungi informasi Anda.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Principles */}
          <Card>
            <CardHeader>
              <CardTitle>Prinsip-Prinsip Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Akuntabilitas</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Batasan Tujuan</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Minimalisasi Data</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Keamanan</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Keterbukaan</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-green-600 mr-3" />
                  <span>Transparansi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle>1. Bagaimana Kami Mengumpulkan dan Menggunakan Informasi Pribadi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Untuk Membantu Anda Menjadi Pengguna Kami</h3>
                <p className="text-gray-700 text-sm">
                  Untuk menyelesaikan pembuatan akun Anda agar kami dapat menyediakan layanan kepada Anda, Anda diwajibkan untuk 
                  memberikan informasi berikut: nomor ponsel, alamat email, foto profil, nama panggilan, dan jenis kelamin Anda, 
                  serta membuat nama pengguna dan kata sandi.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Informasi yang Anda Berikan kepada Kami</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Informasi pribadi relevan yang Anda berikan saat mendaftar akun</li>
                  <li>• Informasi bersama yang Anda berikan kepada pihak lain dengan menggunakan layanan kami</li>
                  <li>• Informasi pengenalan wajah dengan persetujuan khusus Anda</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Informasi yang Kami Kumpulkan Selama Anda Menggunakan Layanan</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Informasi perangkat (model, versi OS, pengaturan)</li>
                  <li>• Informasi lokasi (dengan izin khusus)</li>
                  <li>• Informasi log penggunaan layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle>2. Bagaimana Kami Menggunakan Informasi Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Menyediakan dan meningkatkan layanan kami</li>
                <li>• Mempersonalisasi pengalaman pengguna</li>
                <li>• Mengidentifikasi aktivitas akun yang tidak normal</li>
                <li>• Memberikan hasil yang lebih sesuai dengan kebutuhan Anda</li>
                <li>• Komunikasi dan dukungan pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>3. Bagaimana Kami Melindungi Informasi Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Eye className="h-5 w-5 text-blue-600 mr-3" />
                <span className="font-semibold">Langkah-Langkah Keamanan</span>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Enkripsi data yang kuat</li>
                <li>• Sistem keamanan berlapis</li>
                <li>• Pemantauan keamanan 24/7</li>
                <li>• Pelatihan keamanan untuk staf</li>
                <li>• Audit keamanan berkala</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle>4. Hak-Hak Anda sebagai Pengguna</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Hak untuk mengakses informasi pribadi Anda</li>
                <li>• Hak untuk memperbaiki informasi yang tidak akurat</li>
                <li>• Hak untuk menghapus informasi pribadi</li>
                <li>• Hak untuk membatasi pemrosesan data</li>
                <li>• Hak untuk menarik persetujuan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>5. Cara Menghubungi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700 text-sm">support@sejiwaapp.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-700 text-sm">+62882 0017 77721</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-gray-700 text-sm">www.sejiwaapp.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Note */}
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Penting untuk Dibaca</h3>
            <p className="text-gray-700 text-sm">
              Dengan menggunakan layanan SEJIWAAPP, Anda telah membaca, memahami, dan menyetujui seluruh ketentuan 
              dalam Kebijakan Privasi ini. Jika Anda memiliki pertanyaan, silakan hubungi tim support kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;