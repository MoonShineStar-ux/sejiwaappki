// ... (kode sebelumnya tetap)

<section className="container mx-auto px-4 py-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      Temukan Cinta dengan <span className="text-pink-600">SEJIWAAPP</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Aplikasi kencan dan perjodohan terdepan yang membantu Anda menemukan pasangan terbaik 
      dengan cara yang menyenangkan dan aman
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
        <Link to="/app">
          <Play className="h-4 w-4 mr-2" />
          Coba Aplikasi
        </Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link to="/how-it-works">
          Lihat Cara Kerja
        </Link>
      </Button>
    </div>
  </div>
</section>

// ... (kode setelahnya tetap, tapi ganti warna purple menjadi pink)