import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulasi peningkatan counter pengunjung
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);

    // Tampilkan counter setelah 1 detik
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-auto transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              {count.toLocaleString()} pengunjung
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorCounter;