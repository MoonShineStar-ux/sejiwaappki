import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Eye } from 'lucide-react';
import CountUp from 'react-countup';

interface VisitorData {
  country: string;
  countryCode: string;
  totalVisitors: number;
  todayVisitors: number;
}

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        // Simulasi data pengunjung (dalam aplikasi nyata, ini akan diambil dari database)
        const mockData: VisitorData = {
          country: 'Indonesia',
          countryCode: 'ID',
          totalVisitors: 12457,
          todayVisitors: 234
        };

        // Simulasi delay loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setVisitorData(mockData);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        // Fallback data
        setVisitorData({
          country: 'Indonesia',
          countryCode: 'ID',
          totalVisitors: 12457,
          todayVisitors: 234
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Loading Visitor Data...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-700">
          <Users className="h-5 w-5" />
          Statistik Pengunjung
        </CardTitle>
        <CardDescription>Data pengunjung real-time berdasarkan lokasi</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="font-medium">Negara:</span>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
              {visitorData?.country} ({visitorData?.countryCode})
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">Total Pengunjung</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                <CountUp end={visitorData?.totalVisitors || 0} duration={2} separator="." />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Hari Ini</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                <CountUp end={visitorData?.todayVisitors || 0} duration={2} />
              </div>
            </div>
          </div>

          <div className="bg-purple-100 p-3 rounded-lg">
            <p className="text-sm text-purple-800 text-center">
              🎉 Anda adalah pengunjung ke-#{visitorData?.totalVisitors ? visitorData.totalVisitors + 1 : 1} dari {visitorData?.country}!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorCounter;