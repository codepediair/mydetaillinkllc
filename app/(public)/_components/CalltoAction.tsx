import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CalltoAction() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-foreground px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="oklch(0.9414 0.1983 105.6172)" />
                <stop offset={1} stopColor="oklch(0.9414 0.1983 105.6172)" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Ready to Restore Your Car&apos;s Showroom Shine?
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Don&apos;t wait to give your car the care it deserves. Book your
              premium detailing experience today and see the difference
              expertise makes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button>Book Your Detail Now</Button>
              <Button variant="outline">Show Gallery</Button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="App screenshot"
              src="https://images.pexels.com/photos/14445438/pexels-photo-14445438.jpeg?_gl=1*w85j9*_ga*MTc3NDg1NjUyOC4xNzYzNDk2MDU5*_ga_8JE65Q40S6*czE3NjM1NTg2NzMkbzIkZzEkdDE3NjM1NTg4MDUkajYwJGwwJGgw"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
