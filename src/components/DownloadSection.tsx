import { Button } from "@/components/ui/button";
import { ShoppingBag, Apple } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="bg-pink-600 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Download Aplikasi SEJIWAAPP</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Dapatkan pengalaman terbaik dengan mengunduh aplikasi kami di smartphone Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.sejiwaapp" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-6 w-6 mr-3" />
                Google Play
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6"
              asChild
            >
              <a href="https://apps.apple.com/id/app/sejiwaapp" target="_blank" rel="noopener noreferrer">
                <Apple className="h-6 w-6 mr-3" />
                App Store
              </a>
            </Button>
          </div>
          
          <p className="text-pink-200 mt-6 text-sm">
            Tersedia untuk Android dan iOS
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;