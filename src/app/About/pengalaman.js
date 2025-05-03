'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function PengalamanPage() {
  return (
    <div className="min-h-screen bg-[#fff] px-6 py-12 text-gray-800">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-20">My <span className="text-pink-300">experience</span></h1>

      {/* Konten */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Teks */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
            
        <h1 className="font-bold text-2xl">PT. Aneka Busa Indonesia</h1>
        <p className="font-medium text-xl text-gray-400 mb-5">2022 - 2023</p>

        <p className="font-bold mb-2">Admin Staff Schdule</p>
          <p className="text-lg leading-relaxed text-justify">
          Seorang Admin Staff Schedule bertanggung jawab dalam menyusun, mengelola, dan memantau jadwal kegiatan atau kerja karyawan agar berjalan efisien dan terorganisir. Posisi ini memerlukan ketelitian tinggi, kemampuan komunikasi yang baik, serta keterampilan administratif untuk memastikan semua rencana berjalan sesuai waktu yang ditentukan.
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/ab.png" // pastikan gambar ini ada di folder /public
            alt="Gambar Pengalaman"
            width={400}
            height={300}
            className=""
          />
        </motion.div>
      </div>

      {/* Konten */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-36">
        {/* Teks */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
            
        <h1 className="font-bold text-2xl">RSUP Dr. Sitanala Tangerang</h1>
        <p className="font-medium text-xl text-gray-400 mb-5">2024 - Sekarang</p>

        <p className="font-bold mb-2">IT Programmer</p>
          <p className="text-lg leading-relaxed text-justify">
          Seorang IT Programmer di rumah sakit bertanggung jawab dalam mengembangkan, memelihara, dan mengelola sistem informasi rumah sakit (SIMRS) serta aplikasi-aplikasi internal lainnya. Peran ini sangat penting dalam mendukung efisiensi operasional dan pelayanan kesehatan dengan memastikan sistem berjalan optimal, aman, dan terintegrasi. Selain itu, seorang IT Programmer juga berkolaborasi dengan tim medis dan administrasi untuk menerjemahkan kebutuhan teknis dan fungsional ke dalam solusi digital yang efektif.          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/sitanala.png" // pastikan gambar ini ada di folder /public
            alt="Gambar Pengalaman"
            width={400}
            height={300}
            className=""
          />
        </motion.div>
        </div>
    </div>
  );
}
