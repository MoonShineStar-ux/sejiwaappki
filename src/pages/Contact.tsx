import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import BackButton from "@/components/BackButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi tim support kami untuk pertanyaan atau dukungan teknis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Nama Lengkap" />
                <Input placeholder="Email" type="email" />
              </div>
              <Input placeholder="Subjek" />
              <Textarea placeholder="Pesan Anda" rows={5} />
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-600 mr-3" />
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>support@sejiwaapp.com</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-3" />
                    <CardTitle>Telepon</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>+62 21 1234 5678</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <CardTitle>Alamat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Jl. Mental Health No. 123<br />
                    Jakarta Selatan, Indonesia 12345
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
              <p className="text-gray-600">
                Senin - Jumat: 08:00 - 22:00 WIB<br />
                Sabtu - Minggu: 09:00 - 20:00 WIB<br />
                <span className="text-purple-600">Support 24/7 tersedia untuk anggota premium</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;