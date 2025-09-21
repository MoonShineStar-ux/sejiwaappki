import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      onClick={() => navigate(-1)}
      className="flex items-center gap-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Kembali
    </Button>
  );
};

export default BackButton;