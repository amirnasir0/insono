// "use client"
// import { useEffect, useRef, useState } from "react"

// export default function GsapTest() {
//   const boxRef = useRef<HTMLDivElement | null>(null)
//   const [animationStatus, setAnimationStatus] = useState("Waiting to load...")
//   const [isBrowser, setIsBrowser] = useState(false)

//   useEffect(() => {
//     // This effect only runs in the browser
//     setIsBrowser(true)

//     if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setAnimationStatus("Reduced motion enabled - animation skipped")
//       return
//     }
//   }, [])

//   useEffect(() => {
//     if (!isBrowser) return

//     let mounted = true
//     let animation: any = null

//     const initAnimation = async () => {
//       try {
//         setAnimationStatus("Loading GSAP...")

//         // Dynamically import GSAP only in the browser
//         const gsapModule = await import("gsap")
//         const gsap = gsapModule.gsap || gsapModule.default

//         if (!mounted || !boxRef.current) return

//         setAnimationStatus("Starting animation...")

//         // Set initial state
//         gsap.set(boxRef.current, { x: -100, opacity: 0 })

//         // Animate to final state
//         animation = gsap.to(boxRef.current, {
//           x: 0,
//           opacity: 1,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.3,
//           onStart: () => setAnimationStatus("Animation in progress"),
//           onComplete: () => setAnimationStatus("Animation completed successfully!")
//         })
//       } catch (err) {
//         console.error("GSAP load error:", err)
//         setAnimationStatus("Error loading GSAP")
//       }
//     }

//     initAnimation()

//     return () => {
//       mounted = false
//       if (animation) {
//         animation.kill()
//       }
//     }
//   }, [isBrowser])

//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6">GSAP Animation Demo</h2>

//       <div
//         ref={boxRef}
//         className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center font-semibold shadow-lg"
//       >
//         GSAP Animation - Sliding in from left
//       </div>

//     </div>
//   )
// }
"use client";
import { useEffect, useRef, useState } from "react";
import type { gsap } from "gsap";

export default function GsapTest() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [animationStatus, setAnimationStatus] = useState("Waiting to load...");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setAnimationStatus("Reduced motion enabled - animation skipped");
      return;
    }
  }, []);

  useEffect(() => {
    if (!isBrowser) return;

    let mounted = true;
    let animation: gsap.core.Tween | null = null;

    const initAnimation = async () => {
      try {
        setAnimationStatus("Loading GSAP...");

        const gsapModule = await import("gsap");
        const gsapInstance = gsapModule.gsap || gsapModule.default;

        if (!mounted || !boxRef.current) return;

        setAnimationStatus("Starting animation...");

        gsapInstance.set(boxRef.current, { x: -100, opacity: 0 });

        animation = gsapInstance.to(boxRef.current, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,
          onStart: () => setAnimationStatus("Animation in progress"),
          onComplete: () =>
            setAnimationStatus("Animation completed successfully!"),
        });
      } catch (err) {
        console.error("GSAP load error:", err);
        setAnimationStatus("Error loading GSAP");
      }
    };

    initAnimation();

    return () => {
      mounted = false;
      if (animation) {
        animation.kill();
      }
    };
  }, [isBrowser]);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        GSAP Animation Demo
      </h2>

      <div
        ref={boxRef}
        className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center font-semibold shadow-lg"
      >
        GSAP Animation - Sliding in from left
      </div>

      {/* Show animation status so ESLint sees it used */}
      <p className="text-center mt-4 text-gray-600">{animationStatus}</p>
    </div>
  );
}
