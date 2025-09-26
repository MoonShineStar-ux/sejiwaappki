import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";

const FAQ = () => {
  const faqItems = [
    {
      question: "Bagaimana cara mendaftar di SEJIWAAPP?",
      answer: "Anda bisa mendaftar dengan mengunduh aplikasi SEJIWAAPP dari Google Play Store atau App Store, lalu ikuti langkah-langkah pendaftaran dengan mengisi data diri dan verifikasi email/nomor telepon."
    },
    {
      question: "Apakah SEJIWAAPP gratis?",
      answer: "SEJIWAAPP memiliki paket gratis dengan fitur dasar dan paket premium dengan fitur lengkap. Anda bisa memilih paket yang sesuai dengan kebutuhan Anda."
    },
    {
      question: "Bagaimana sistem matching bekerja?",
      answer: "Sistem matching kami menggunakan algoritma cerdas yang mempertimbangkan minat, lokasi, nilai, dan preferensi Anda untuk menemukan pasangan yang paling cocok."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Ya, kami menggunakan enkripsi tingkat tinggi dan sistem keamanan berlapis untuk melindungi data pribadi Anda. Kebijakan privasi kami sangat ketat."
    },
    {
      question: "Bagaimana cara menghapus akun?",
      answer: "Anda bisa menghapus akun melalui pengaturan aplikasi > pengaturan akun > hapus akun. Data Anda akan dihapus secara permanen dalam 30 hari."
    },
    {
      question: "Apakah ada batasan usia?",
      answer: "Ya, Anda harus berusia minimal 18 tahun untuk menggunakan SEJIWAAPP sesuai dengan ketentuan yang berlaku."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h1>
            <p className="text-gray-600 text-lg">Temukan jawaban untuk pertanyaan yang sering diajukan tentang SEJIWAAPP</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>FAQ SEJIWAAPP</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Masih punya pertanyaan?</p>
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;