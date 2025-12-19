'use client'
import { motion } from 'framer-motion'

const badgesLeft = [
  { text: 'Design Systems', rotate: '-rotate-6', x: -20, y: 0 },
  { text: 'UI/UX Design', rotate: 'rotate-3', x: 0, y: 40 },
  { text: 'User Research', rotate: '-rotate-2', x: -10, y: 80 },
]

const badgesRight = [
  { text: 'Animation', rotate: 'rotate-6', x: 20, y: 10 },
  { text: 'Prototyping', rotate: '-rotate-3', x: 0, y: 50 },
  { text: 'Product Strategy', rotate: 'rotate-2', x: 20, y: 90 },
]

export default function About() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl w-full relative flex flex-col items-center">
        
        {/* Left Badges (Desktop) */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-[200px]">
          {badgesLeft.map((badge, i) => (
            <motion.div
              key={i}
              className={`absolute left-0 bg-white px-4 py-2 rounded-full shadow-md border border-black/5 text-sm font-medium ${badge.rotate}`}
              style={{ top: `${i * 80 + 20}px`, left: `${badge.x}px` }}
              animate={{ 
                y: [0, -10, 0],
                rotate: i % 2 === 0 ? [badge.rotate, '0deg', badge.rotate] : [badge.rotate, '0deg', badge.rotate]
               }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              {badge.text}
            </motion.div>
          ))}
        </div>

        {/* Right Badges (Desktop) */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-[200px]">
           {badgesRight.map((badge, i) => (
            <motion.div
              key={i}
              className={`absolute right-0 bg-white px-4 py-2 rounded-full shadow-md border border-black/5 text-sm font-medium ${badge.rotate}`}
              style={{ top: `${i * 80 + 20}px`, right: `${badge.x}px` }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 + 1 }}
            >
              {badge.text}
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <div className="text-center md:max-w-lg z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-instrument italic text-6xl md:text-7xl mb-6 text-accent-orange"
          >
            Hello!
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl md:text-2xl leading-relaxed text-text-primary"
          >
            I'm a digital product designer focusing on turning complex problems into simple, beautiful, and intuitive designs helping startups and companies communicate their story.
          </motion.p>
        </div>

        {/* Mobile Badges (Grid) */}
        <div className="lg:hidden mt-12 flex flex-wrap justify-center gap-3">
            {[...badgesLeft, ...badgesRight].map((b, i) => (
                <span key={i} className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-black/5 text-sm">{b.text}</span>
            ))}
        </div>

      </div>
    </section>
  )
}
