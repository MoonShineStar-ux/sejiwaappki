import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  Smile,
  Meh,
  Brain,
  Calendar,
  Activity,
  Download,
  Play,
  Clock,
  ShoppingBag,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PoweredBySejiwaapp } from '@/components/PoweredBySejiwaapp';
import Logo from '@/components/Logo';

const SejiwaApp = () => {
  const [currentView, setCurrentView] = useState('main');
  const [moodData, setMoodData] = useState<any[]>([]);
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [moodNote, setMoodNote] = useState('');

  // Data cuaca
  const weatherData = {
    city: "Jakarta",
    temperature: 28,
    condition: "Clear",
    humidity: 65,
    wind: 12
  };

  // Data meditasi
  const meditationTypes = [
    { id: 1, name: 'Meditasi Pernapasan', duration: 5, icon: '🧘', description: 'Fokus pada napas masuk dan keluar' },
    { id: 2, name: 'Meditasi Body Scan', duration: 10, icon: '🔍', description: 'Scan tubuh dari kepala hingga kaki' },
    { id: 3, name: 'Meditasi Loving-Kindness', duration: 15, icon: '💖', description: 'Kirim cinta dan kebaikan' },
    { id: 4, name: 'Meditasi Mindfulness', duration: 20, icon: '🌿', description: 'Hadir sepenuhnya di momen sekarang' }
  ];

  // Mood options
  const moodOptions = [
    { id: 1, emoji: '😊', label: 'Sangat Baik', color: 'bg-green-500' },
    { id: 2, emoji: '🙂', label: 'Baik', color: 'bg-blue-500' },
    { id: 3, emoji: '😐', label: 'Biasa saja', color: 'bg-yellow-500' },
    { id: 4, emoji: '😕', label: 'Buruk', color: 'bg-orange-500' },
    { id: 5, emoji: '😢', label: 'Sangat Buruk', color: 'bg-red-500' }
  ];

  // Activity suggestions
  const activitySuggestions = [
    "Coba meditasi 5 menit",
    "Hubungi teman untuk berbicara",
    "Tulis jurnal perasaan",
    "Dengarkan musik yang menenangkan",
    "Berjalan-jalan sebentar",
    "Baca buku inspiratif",
    "Olahraga ringan",
    "Minum air putih yang cukup"
  ];

  const trackMood = () => {
    if (currentMood) {
      const newMoodEntry = {
        id: Date.now(),
        mood: currentMood,
        emoji: moodOptions.find(m => m.id === currentMood)?.emoji,
        note: moodNote,
        timestamp: new Date().toLocaleString('id-ID')
      };
      
      setMoodData(prev => [...prev, newMoodEntry]);
      setCurrentMood(null);
      setMoodNote('');
      setCurrentView('moodSuccess');
    }
  };

  const getWeatherIcon = () => {
    switch (weatherData.condition) {
      case 'Clear': return <Sun className="h-12 w-12 text-yellow-500" />;
      case 'Rain': return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'Clouds': return <Cloud className="h-12 w-12 text-gray-500" />;
      case 'Snow': return <CloudSnow className="h-12 w-12 text-blue-300" />;
      case 'Thunderstorm': return <CloudLightning className="h-12 w-12 text-purple-500" />;
      default: return <Cloud className="h-12 w-12 text-gray-500" />;
    }
  };

  const renderMainMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('weather')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Cloud className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle>Informasi Cuaca</CardTitle>
          <CardDescription>Lihat kondisi cuaca terkini</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('moodTrack')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Smile className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle>Pelacakan Mood</CardTitle>
          <CardDescription>Catat perasaan Anda hari ini</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('moodHistory')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
          <CardTitle>Riwayat Mood</CardTitle>
          <CardDescription>Lihat history mood Anda</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('activities')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <Activity className="h-8 w-8 text-orange-600" />
          </div>
          <CardTitle>Saran Aktivitas</CardTitle>
          <CardDescription>Dapatkan saran berdasarkan mood</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('meditation')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Brain className="h-8 w-8 text-indigo-600" />
          </div>
          <CardTitle>Panduan Meditasi</CardTitle>
          <CardDescription>Mulai sesi meditasi terpandu</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('download')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Download className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle>Download Aplikasi</CardTitle>
          <CardDescription>Dapatkan aplikasi mobile</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );

  const renderWeather = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informasi Cuaca</CardTitle>
          <CardDescription>Kondisi cuaca terkini di {weatherData.city}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {getWeatherIcon()}
            </div>
            <h3 className="text-2xl font-bold mb-2">{weatherData.temperature}°C</h3>
            <p className="text-gray-600 mb-4">{weatherData.condition}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Kelembaban</div>
                <div className="text-lg font-semibold">{weatherData.humidity}%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Angin</div>
                <div className="text-lg font-semibold">{weatherData.wind} km/jam</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button onClick={() => setCurrentView('main')}>Kembali ke Menu</Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderMoodTrack = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bagaimana perasaan Anda hari ini?</CardTitle>
          <CardDescription>Pilih mood yang paling menggambarkan perasaan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4 mb-6">
            {moodOptions.map((mood) => (
              <div
                key={mood.id}
                className={`p-4 rounded-lg text-center cursor-pointer transition-all ${
                  currentMood === mood.id
                    ? `${mood.color} text-white scale-105`
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setCurrentMood(mood.id)}
              >
                <div className="text-2xl mb-2">{mood.emoji}</div>
                <div className="text-sm">{mood.label}</div>
              </div>
            ))}
          </div>

          {currentMood && (
            <div className="space-y-4">
              <Input
                placeholder="Tambahkan catatan (opsional)"
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
              />
              <Button className="w-full" onClick={trackMood}>
                Simpan Mood
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderMoodSuccess = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-3xl">🎉</div>
      </div>
      <h2 className="text-2xl font-bold">Mood Berhasil Dicatat!</h2>
      <p className="text-gray-600">Terima kasih telah melacak perasaan Anda hari ini.</p>
      <div className="space-y-4">
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setCurrentView('moodHistory')}>Lihat Riwayat</Button>
          <Button variant="outline" onClick={() => setCurrentView('main')}>
            Kembali ke Menu
          </Button>
        </div>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderMoodHistory = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Mood</CardTitle>
          <CardDescription>Perkembangan mood Anda dari waktu ke waktu</CardDescription>
        </CardHeader>
        <CardContent>
          {moodData.length === 0 ? (
            <div className="text-center py-8">
              <Meh className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Belum ada data mood yang tercatat.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {moodData.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{entry.emoji}</span>
                    <div>
                      <p className="font-semibold">{moodOptions.find(m => m.id === entry.mood)?.label}</p>
                      <p className="text-sm text-gray-600">{entry.timestamp}</p>
                      {entry.note && <p className="text-sm text-gray-600 mt-1">{entry.note}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Saran Aktivitas</CardTitle>
          <CardDescription>Berikut adalah beberapa aktivitas yang mungkin membantu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activitySuggestions.map((activity, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">{index + 1}</span>
                  </div>
                  <p className="text-sm">{activity}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderMeditation = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Panduan Meditasi</CardTitle>
          <CardDescription>Pilih jenis meditasi yang ingin Anda praktikkan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meditationTypes.map((meditation) => (
              <Card key={meditation.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{meditation.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{meditation.name}</CardTitle>
                        <CardDescription>{meditation.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {meditation.duration} menit
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Mulai Meditasi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderDownload = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Download Aplikasi SEJIWAAPP</CardTitle>
          <CardDescription>Tersedia di berbagai platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Google Play Store</h3>
              <p className="text-sm text-gray-600 mb-4">Untuk perangkat Android</p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">􀣺</span>
              </div>
              <h3 className="font-semibold mb-2">Apple App Store</h3>
              <p className="text-sm text-gray-600 mb-4">Untuk perangkat iOS</p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="font-semibold mb-4">🎁 Fitur lengkap di aplikasi mobile:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-sm">Notifikasi harian</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-sm">Pelacakan mood lengkap</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-sm">Meditasi terpandu</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-sm">Komunitas support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-sm">Konseling profesional</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header dengan tombol kembali ke home */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-4">
              <Link to="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <Logo size="md" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {currentView === 'main' && renderMainMenu()}
          {currentView === 'weather' && renderWeather()}
          {currentView === 'moodTrack' && renderMoodTrack()}
          {currentView === 'moodSuccess' && renderMoodSuccess()}
          {currentView === 'moodHistory' && renderMoodHistory()}
          {currentView === 'activities' && renderActivities()}
          {currentView === 'meditation' && renderMeditation()}
          {currentView === 'download' && renderDownload()}
        </div>

        {/* Footer baru */}
        <PoweredBySejiwaapp />
      </div>
    </div>
  );
};

export default SejiwaApp;