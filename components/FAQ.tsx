'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
  { q: "What's the difference between a subscription and a custom project?", a: "A subscription gives you ongoing design support with unlimited requests one by one, while a custom project has a defined scope and timeline." },
  { q: "How fast is the turnaround?", a: "On average, you'll receive updates within 24-48 hours. Complex tasks might be broken down into smaller deliverables." },
  { q: "How many requests can I make?", a: "Unlimited! You can add as many requests to your queue as you'd like, and we'll work through them one by one." },
  { q: "What types of design do you handle?", a: "We specialize in UI/UX, product design, design systems, and branding for tech startups." },
  { q: "What tools do you use?", a: "We primarily work in Figma for design and prototyping." },
  { q: "Can I pause the subscription?", a: "Yes, you can pause or cancel your subscription at any time with no penalty." },
  { q: "Do you offer development too?", a: "We focus exclusively on design to ensure the highest quality, but we can recommend development partners." },
]

export default function FAQ() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        
        {/* Left: Contact Card */}
        <div className="md:col-span-4">
          <div className="sticky top-24">
             <h2 className="font-headline text-4xl mb-8">Your Questions, Answered</h2>
             
             <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 relative overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" 
                      alt="Contact" 
                      fill 
                      className="object-cover"
                    />
                </div>
                <h3 className="font-medium text-lg mb-2">Have more questions?</h3>
                <p className="text-gray-500 text-sm mb-6">Book a free discovery call to discuss your needs.</p>
                <button className="w-full bg-black text-white py-3 rounded-xl font-medium mb-4 flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors">
                    Book Call <ArrowUpRight className="w-4 h-4"/>
                </button>
                <a href="mailto:hello@hanzo.design" className="text-accent-orange text-sm font-medium hover:underline">Or email us directly</a>
             </div>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="md:col-span-8">
          <Accordion.Root type="single" defaultValue="item-0" collapsible className="space-y-4">
            {items.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="bg-white px-6 py-4 rounded-2xl border border-black/5 data-[state=open]:shadow-md transition-all">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full justify-between items-center group">
                    <span className="text-lg font-medium text-left">{item.q}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-gray-500 pt-0">
                  <div className="pt-4 pb-2 leading-relaxed">
                    {item.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

      </div>
    </section>
  )
}
