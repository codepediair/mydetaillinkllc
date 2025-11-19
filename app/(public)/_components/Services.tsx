"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Amphora, Eye, Lightbulb, PaintBucket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import logoIcon from "@/public/logoIcon.svg";
import { LogoIcon } from "@/components/logoIcon";
import { Logo } from "@/components/logo";

export default function Services() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image:
        "https://images.pexels.com/photos/6969026/pexels-photo-6969026.jpeg?_gl=1*15eh1oj*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjMyNDQ1NDIkbzE0JGcxJHQxNzYzMjQ0ODMzJGo1OSRsMCRoMA..",
      alt: "Database visualization",
    },
    "item-2": {
      image:
        "https://images.pexels.com/photos/10126663/pexels-photo-10126663.jpeg?_gl=1*9nu9af*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjMyNDQ1NDIkbzE0JGcxJHQxNzYzMjQ1MTk3JGoxNyRsMCRoMA..",
      alt: "Security authentication",
    },
    "item-3": {
      image:
        "https://images.pexels.com/photos/17029941/pexels-photo-17029941.jpeg?_gl=1*c9n3tl*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjMyNDQ1NDIkbzE0JGcxJHQxNzYzMjQ0OTk0JGo2MCRsMCRoMA..",
      alt: "Identity management",
    },
    "item-4": {
      image:
        "https://images.pexels.com/photos/30112421/pexels-photo-30112421.jpeg?_gl=1*tdihy3*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjMyNDQ1NDIkbzE0JGcxJHQxNzYzMjQ1MjYxJGoyMiRsMCRoMA..",
      alt: "Analytics dashboard",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Where Art Meets Automotive
          </h2>
          <p>
            This is where the magic happens. We don&apos;t just clean cars; we
            restore and protect them. Explore our core specialties that set us
            apart from the rest.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  {/*<PaintBucket className="size-4" />*/}
                  <LogoIcon />
                  Paint Correction Mastery
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Achieving flawless, mirror-like finishes on even the most
                delicate paints.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  {/*<Amphora className="size-4" />*/}
                  <LogoIcon />
                  Ceramic Coating Expertise
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Applying advanced nano-ceramic coatings for years of protection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  {/*<Eye className="size-4" />*/}
                  <LogoIcon />
                  Interior Revival
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Transforming worn-out interiors into like-new condition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  {/*<Lightbulb className="size-4" />*/}
                  <LogoIcon />
                  Headlight Restoration
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Restoring cloudy headlights to like-new clarity and performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-top-left dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
