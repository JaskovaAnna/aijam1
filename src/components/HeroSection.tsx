export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 hero-gradient">
      <div className="max-w-6xl">
        <span className="manrope text-xs uppercase tracking-[0.3em] text-[#5a6061] mb-6 block">
          Digital Curators based in Paris
        </span>
        <h1 className="notoSerif text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
          Defining <span className="italic font-normal">Digital</span> Aesthetics
        </h1>
        <p className="manrope text-lg md:text-xl text-[#5a6061] max-w-2xl leading-relaxed mb-12">
          We craft immersive digital experiences for high-end brands. At Atelier Luma, creative
          excellence is the standard, and minimalism is our language.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <button className="bg-[#5f5e5e] text-[#faf7f6] px-10 py-5 manrope font-medium tracking-wide hover:bg-[#535252] transition-all duration-300">
            Explore Our Work
          </button>
          <button className="border-b border-[#2d3435] py-5 manrope font-medium tracking-wide hover:opacity-60 transition-all duration-300">
            View Showreel
          </button>
        </div>
      </div>
    </section>
  );
}
