export default function CalltoAction() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background with car detailing texture */}
            <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-amber-900/20">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9846144/pexels-photo-9846144.jpeg?_gl=1*4dmsjy*_ga*OTc1MTAxNjk1LjE3NTk4MzA1MTY.*_ga_8JE65Q40S6*czE3NjMyNDcyMjMkbzE1JGcxJHQxNzYzMjQ3Mzg5JGoxMiRsMCRoMA..')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
            </div>
            
            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Heading */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Ready to Restore Your Car&apos;s 
                            <span className="bg-linear-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"> Showroom Shine?</span>
                        </h2>
                        <p className="text-lg text-zinc-300 md:text-xl max-w-2xl mx-auto">
                            Don&apos;t wait to give your car the care it deserves. Book your premium detailing experience today and see the difference expertise makes.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative bg-linear-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]">
                            <span className="relative z-10">Book Your Detail Now</span>
                            <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-orange-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button className="group border-2 border-amber-400 text-amber-400 font-semibold py-4 px-8 rounded-lg hover:bg-amber-400 hover:text-zinc-900 transition-all duration-300 transform hover:scale-105 min-w-[200px]">
                            <span>View Gallery</span>
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="pt-8">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">★★★★★</div>
                                <span>4.9/5 from 120+ reviews</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-zinc-600"></div>
                            <div className="flex items-center gap-2">
                                <span>🚗 500+ Cars Detailed</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-zinc-600"></div>
                            <div className="flex items-center gap-2">
                                <span>⭐ Certified Experts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}