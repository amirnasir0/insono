"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function Banner({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.fromTo(ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  return (
    <section ref={ref} className="bg-blue-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="mt-3 text-lg text-gray-700">{subtitle}</p>
        <button className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700">
          Check Prices
        </button>
      </div>
      <div className="w-40 h-40 relative">
        <Image
          src="https://placehold.co/200x200.png?text=Device"
          alt="Hearing aid"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  )
}
