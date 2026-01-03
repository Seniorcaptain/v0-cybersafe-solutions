"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="experts" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-[#990012] mb-4">The Expert</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">Ndirangu Charles</h3>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white overflow-hidden aspect-[3/4] w-full max-w-2xl"
          >
            <Image
              src="/images/bbc71bd5-123a-4654-a227-70f962344191-1-105-c.jpeg"
              alt="Ndirangu Charles - Chief Security Architect"
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center border-t border-neutral-100 pt-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Digital Asset Defenders © 2026
          </span>
        </motion.div>
      </div>
    </section>
  )
}
