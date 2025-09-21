import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Smile,
  Meh,
  Calendar,
  Download,
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

  // Mood options
  const moodOptions = [
    { id: 1, emoji: '😊', label: 'Sangat Baik', color: 'bg-green-500' },
    { id: 2, emoji: '🙂', label: 'Baik', color: 'bg-blue-500' },
    { id: 3, emoji: '😐', label: 'Biasa saja', color: 'bg-yellow-500' },
    { id: 4, emoji: '😕', label: 'Buruk', color: 'bg-orange-500' },
    { id: 5, emoji: '😢', label: 'Sangat Buruk', color: 'bg-red-500' }
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

  const renderMainMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm" onClick={() => setCurrentView('moodTrack')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Smile className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle>Pelacakan Mood</CardTitle>
          <CardDescription>Catat perasaan Anda hari ini</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm" onClick={() => setCurrentView('moodHistory')}>
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
          <CardTitle>Riwayat Mood</CardTitle>
          <CardDescription>Lihat history mood Anda</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm" onClick={() => setCurrentView('download')}>
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

  const renderMoodTrack = () => (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm">
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
                    : 'bg-white/80 hover:bg-white'
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
                className="bg-white/80"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Simpan Mood
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-4">
        <Button variant="outline" className="bg-white/80 hover:bg-white" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" className="bg-white/80 hover:bg-white" asChild>
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
      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
        <div className="text-3xl">🎉</div>
      </div>
      <h2 className="text-2xl font-bold text-white">Mood Berhasil Dicatat!</h2>
      <p className="text-white/80">Terima kasih telah melacak perasaan Anda hari ini.</p>
      <div className="space-y-4">
        <div className="flex gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setCurrentView('moodHistory')}>Lihat Riwayat</Button>
          <Button variant="outline" className="bg-white/80 hover:bg-white" onClick={() => setCurrentView('main')}>
            Kembali ke Menu
          </Button>
        </div>
        <Button variant="outline" className="bg-white/80 hover:bg-white" asChild>
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
      <Card className="bg-white/90 backdrop-blur-sm">
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
                <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg bg-white/80">
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
        <Button variant="outline" className="bg-white/80 hover:bg-white" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" className="bg-white/80 hover:bg-white" asChild>
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
      <Card className="bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Download Aplikasi SEJIWAAPP</CardTitle>
          <CardDescription>Tersedia di berbagai platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 border rounded-lg bg-white/80">
              <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Google Play Store</h3>
              <p className="text-sm text-gray-600 mb-4">Untuk perangkat Android</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="text-center p-6 border rounded-lg bg-white/80">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">􀣺</span>
              </div>
              <h3 className="font-semibold mb-2">Apple App Store</h3>
              <p className="text-sm text-gray-600 mb-4">Untuk perangkat iOS</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50/80 rounded-lg backdrop-blur-sm">
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
        <Button variant="outline" className="bg-white/80 hover:bg-white" onClick={() => setCurrentView('main')}>
          Kembali ke Menu
        </Button>
        <Button variant="outline" className="bg-white/80 hover:bg-white" asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D145B] to-[#6E0032]">
      <div className="container mx-auto px-4 py-8">
        {/* Header dengan tombol kembali ke home */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-4 bg-white/20 hover:bg-white/30 text-white">
              <Link to="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <Logo size="md" className="text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {currentView === 'main' && renderMainMenu()}
          {currentView === 'moodTrack' && renderMoodTrack()}
          {currentView === 'moodSuccess' && renderMoodSuccess()}
          {currentView === 'moodHistory' && renderMoodHistory()}
          {currentView === 'download' && renderDownload()}
        </div>

        {/* Footer baru */}
        <PoweredBySejiwaapp />
      </div>
    </div>
  );
};

export default SejiwaApp;