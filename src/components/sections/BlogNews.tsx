"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";

export function BlogNews() {
  return (
    <section id="blog" className="bg-gradient-to-br from-[#0c1f64] via-[#132c8b] to-[#3062ff] py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge variant="ghost" className="bg-white/10 text-white">
              Blog & News
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold">Stay Informed With CureNast Updates</h2>
            <p className="mt-3 text-white/80">
              Insights from our clinicians so you can translate the science into daily rituals.
            </p>
          </div>
          <Link href="#blog" className={buttonClasses("ghost")}>
            View All Blog's
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={420}
                  height={260}
                  className="h-48 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-white/80">{post.summary}</p>
              <div className="mt-4 flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-white/70">{post.role}</p>
                </div>
                <span className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
