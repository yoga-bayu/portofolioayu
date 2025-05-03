'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="home">
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="">
          {/* Foto Profil */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-52 h-52 mx-auto mb-10 relative"
          >
            <Image
              src="/profile.png"
              alt="Foto Profil"
              fill
              className="rounded-full object-cover"
            />
          </motion.div>

          {/* Nama dan Deskripsi */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-white mb-5">Ayu Wandira</h1>
            <p className="text-white mb-10 text-xl w-[300px] md:w-[500px] mx-auto">
              "Dengan logika setajam algoritma, dia menulis masa depan satu function pada satu waktu."
            </p>
          </motion.div>

          {/* Tombol Download CV */}
          <motion.a
            href="https://wa.me/6285697476475"
            download
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-block bg-[#fadadd] hover:bg-[#FFB6C1] text-black font-medium py-2 px-4 rounded transition"
          >
            Hubungi
          </motion.a>
        </div>
      </div>
    </section>
  );
}
