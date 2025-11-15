"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Rocket} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';



export default function Hero() {
  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Start Your Car&apos;s Transformation</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:leading-[1.125]">
                  Fall in Love with Your Car, All Over Again.
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  Remember that showroom feeling? We bring it back. Our expert detailing revives every curve and surface, delivering an unmatched, head-turning shine and protection.
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  At [detaillink]: We specialize in paint correction and ceramic coating, transforming your vehicle beyond the showroom. Your car&apos;s ultimate shine awaits.
                </p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="#">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">booking Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mask-b-from-55% relative mx-auto mt-16 max-w-6xl overflow-hidden px-4">
              <Image
                className="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
                src="/music.png"
                alt="app screen"
                width={2796}
                height={2008}
              />
              <Image
                className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                src="https://images.pexels.com/photos/14231701/pexels-photo-14231701.jpeg?_gl=1*ejvxad*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjI4OTgyNjEkbzEwJGcxJHQxNzYyODk4Mjc2JGo0NSRsMCRoMA.."
                alt="app screen"
                width={2796}
                height={2008}
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height={20}
                      width={20}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height={28}
                      width={28}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height={24}
                      width={24}
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
