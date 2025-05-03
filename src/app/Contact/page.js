'use client';

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section id="contact">
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        <span className="text-pink-300">Get in</span> Touch
      </motion.h1>

      {/* Subjudul */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 max-w-xl mx-auto mb-12"
      >
        Have a question, a project, or just want to say hi? Feel free to drop a message below. I'd love to hear from you!
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="Write your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
    </section>
  );
}
