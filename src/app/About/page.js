export default function AboutPage() {
  return (
    <section id="about">
      <div
        className="min-h-screen text-gray-800 px-6 py-12"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Judul */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-pink-300">Me</span>
          </h1>

          {/* Galeri Foto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 animate-fadeIn">
            <img
              src="/about1.png"
              alt="Foto 1"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="/about2.png"
              alt="Foto 2"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="/about3.jpg"
              alt="Foto 3"
              className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Deskripsi */}
          <p className="text-lg leading-relaxed text-justify">
          Saya adalah seorang perempuan yang saat ini bekerja sebagai IT Programmer di salah satu rumah sakit pemerintah yang terletak di Tangerang, yaitu RSUP Dr. Sitanala. Dalam peran ini, saya bertanggung jawab untuk mengembangkan dan memelihara berbagai sistem informasi yang digunakan untuk mendukung operasional rumah sakit, mulai dari sistem manajemen pasien, data rekam medis, hingga integrasi teknologi dengan layanan kesehatan.
          </p>

          <p className="text-lg leading-relaxed text-justify mt-4">
  Saya menyukai dunia teknologi, terutama dalam pengembangan web. Setiap hari saya menulis baris demi baris kode untuk menciptakan solusi digital yang bermanfaat. Saya percaya bahwa teknologi bukan hanya tentang mesin, tapi juga tentang kreativitas, inovasi, dan membangun masa depan.
</p>


          <p className="text-lg leading-relaxed mt-4 text-justify">
            Di waktu luang, saya senang belajar hal-hal baru, mengembangkan proyek pribadi,
            dan berbagi ilmu dengan sesama melalui komunitas teknologi. Dengan semangat belajar yang tinggi
            dan dedikasi yang konsisten, saya siap menghadapi tantangan dan terus tumbuh dalam dunia digital.
          </p>
        </div>
      </div>
    </section>
  );
}
