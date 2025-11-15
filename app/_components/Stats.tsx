export default function Stats() {
    return (
        <section className="py-16 md:py-32 bg-linear-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Why Car Enthusiasts Trust Our Detailing</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        We don&apos;t just clean cars — <span className="font-medium text-zinc-900 dark:text-white">we restore pride and protect investments</span> with precision and passion that shows in every detail.
                    </p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                            Our commitment to excellence is reflected in the numbers and the smiles we create every day.
                        </p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-8 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-5xl font-bold text-transparent">+500</div>
                                <p className="font-medium">Cars Detailed</p>
                                <p className="text-sm text-zinc-500">Satisfied customers and counting</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-5xl font-bold text-transparent">99%</div>
                                <p className="font-medium">Satisfaction Rate</p>
                                <p className="text-sm text-zinc-500">Based on customer reviews</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <blockquote className="border-l-4 border-amber-500 pl-6">
                            <p className="text-lg italic text-zinc-700 dark:text-zinc-300">
                                &qout;I thought my black car&apos;s swirl marks were permanent. The team worked miracles - it looks better than the day I bought it! The ceramic coating has made maintenance so easy.&qout;
                            </p>
                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium text-zinc-900 dark:text-white">Sarah Johnson</cite>
                                <p className="text-sm text-zinc-500">Porsche 911 Owner</p>
                                <div className="flex text-amber-400">
                                    {"★".repeat(5)}
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}