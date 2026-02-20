import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress for the target container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Track while the tall container moves through the viewport
    offset: ['start end', 'end start'],
  });

  // Image scaling: 1 -> 0.8 across full progress
  const rawImageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageScale = useSpring(rawImageScale, { stiffness: 120, damping: 20 });

  // Headline opacities — each headline occupies roughly 30% window with small fade edges
  const textAOpacityRaw = useTransform(
    scrollYProgress,
    [0.0, 0.05, 0.25, 0.30],
    [0, 1, 1, 0]
  );
  const textBOpacityRaw = useTransform(
    scrollYProgress,
    [0.30, 0.35, 0.55, 0.60],
    [0, 1, 1, 0]
  );
  const textCOpacityRaw = useTransform(
    scrollYProgress,
    [0.60, 0.65, 0.85, 0.90],
    [0, 1, 1, 0]
  );

  const textAOpacity = useSpring(textAOpacityRaw, { stiffness: 120, damping: 25 });
  const textBOpacity = useSpring(textBOpacityRaw, { stiffness: 120, damping: 25 });
  const textCOpacity = useSpring(textCOpacityRaw, { stiffness: 120, damping: 25 });

  // Small vertical parallax for text (optional subtle movement)
  const textAY = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const textBY = useTransform(scrollYProgress, [0.3, 0.6], [20, 0]);
  const textCY = useTransform(scrollYProgress, [0.6, 0.9], [20, 0]);

  return (
    <div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center px-6">
        <div className="relative w-full max-w-6xl">
          {/* Layout: text left / image right on large screens; stack on small screens */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative flex items-center">
              {/* Headline stack — absolute so they overlap and fade in/out */}
              <div className="w-full">
                <motion.h2
                  style={{ opacity: textAOpacity, y: textAY }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-lamigo-gunmetal dark:text-lamigo-soft-white"
                >
                  AI that plans the right route — every time.
                </motion.h2>

                <motion.h2
                  style={{ opacity: textBOpacity, y: textBY }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-lamigo-gunmetal dark:text-lamigo-soft-white absolute inset-x-0 top-0"
                >
                  Accurate ETAs that customers trust.
                </motion.h2>

                <motion.h2
                  style={{ opacity: textCOpacity, y: textCY }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-lamigo-gunmetal dark:text-lamigo-soft-white absolute inset-x-0 top-0"
                >
                  Visibility and control for your whole fleet.
                </motion.h2>

                <p className="mt-6 text-lamigo-gunmetal/80 dark:text-lamigo-soft-white/80 max-w-xl">
                  Scroll to explore how CourierAI compresses complexity into simple, measurable impact — lower costs, faster delivery, and happier customers.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* Image scales down as user scrolls — scrubbed to scroll */}
              <motion.div
                style={{ scale: imageScale }}
                className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-lamigo-gunmetal/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b1a6b7a3ed0b9d5d8b5f9afb6a0e7b0"
                  alt="Delivery route visualization"
                  className="w-full h-[360px] object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Small footer hint at bottom of sticky area */}
          <div className="absolute left-0 right-0 bottom-[-6rem] flex justify-center">
            <div className="text-sm text-lamigo-gunmetal/70 dark:text-lamigo-soft-white/70">Scroll to view the sequence →</div>
          </div>
        </div>
      </div>
    </div>
  );
}
