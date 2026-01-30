"use client"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-16">
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-6 opacity-0 animate-in [animation-fill-mode:forwards] [animation-delay:200ms]">
          <span className="text-[14px] font-semibold text-[#990012] uppercase tracking-[0.2em]">
            Elite Security Protocol
          </span>
        </div>

        <h1 className="text-5xl md:text-[92px] font-bold text-gray-950 mb-8 tracking-[-0.03em] leading-[1] opacity-0 animate-in [animation-fill-mode:forwards] [animation-delay:400ms]">
          Defend Your <br className="hidden md:block" />
          <span className="text-gray-400">Digital Infrastructure.</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed opacity-0 animate-in [animation-fill-mode:forwards] [animation-delay:600ms]">
          Premium cybersecurity consultancy for organizations that demand total protection and absolute discretion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-in [animation-fill-mode:forwards] [animation-delay:800ms]">
          <Button
            size="lg"
            className="bg-[#990012] hover:bg-[#7a000e] text-white px-10 py-7 text-base font-semibold rounded-full transition-all duration-500 hover:scale-[1.02]"
          >
            Start Assessment
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-900 hover:bg-gray-50 px-10 py-7 text-base font-semibold rounded-full transition-all"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/30 rounded-full blur-[120px] -z-10" />
    </section>
  )
}
