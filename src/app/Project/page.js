'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectPage() {
  const projects = [
    {
      title: "Sistem Informasi Manajemen Rumah Sakit",
      image: "/project3.png",
      description: "SIMRS dengan fitur lengkap, teknologi terkini, terkoneksi dengan BPJS dan Berbiaya sangat terjangkau. Terdaftar di ditjen HKI nomor 000483511, PSE dan Satusehat",
    },
    {
      title: "Aplikasi RS",
      image: "/project2.png",
      description: "Aplikasi RS (Rumah Sakit) adalah sebuah sistem perangkat lunak yang dirancang untuk mendukung pengelolaan operasional dan layanan di lingkungan rumah sakit secara digital. Aplikasi ini membantu dalam mengintegrasikan berbagai aktivitas, mulai dari pendaftaran pasien, rekam medis, penjadwalan dokter, hingga manajemen farmasi dan keuangan.",
    },
    {
      title: "Dashborad RS",
      image: "/project1.png",
      description: "Dashboard aplikasi adalah tampilan antarmuka yang menyajikan data dan informasi penting secara visual dan ringkas, seperti grafik, statistik, dan indikator kinerja. Fungsinya adalah untuk memudahkan pengguna memantau, menganalisis, dan mengambil keputusan berdasarkan data real-time dari sistem aplikasi.",
    },
  ];

  return (
    <section id="projects">
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="text-pink-300">Project</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
