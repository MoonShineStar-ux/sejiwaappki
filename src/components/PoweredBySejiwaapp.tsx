import { Heart } from "lucide-react";

export const PoweredBySejiwaapp = () => {
  return (
    <div className="p-4 text-center bg-gray-50 border-t">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <span>Powered by</span>
        <div className="flex items-center gap-1 font-semibold text-purple-600">
          <Heart className="h-4 w-4" />
          <span>SEJIWAAPP</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        © 2024 SEJIWAAPP. All rights reserved.
      </p>
    </div>
  );
};