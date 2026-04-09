const projects = [
  {
    id: 1,
    category: "Architecture",
    title: "La Maison Noire",
    colSpan: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/5]",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPXCOmYChjKEzVKMK8-QBxQT1SDEOcw9xmeb-KGEPs6uGvJZfrfunxsxtDuoOkdgOJA1xkU-XL0qKAk33JZiD2-KAC3OhjSrvJlXSgywJ7zUMr5y-K0xx8RR9iWhbhuKqFUcqoYY4zOjWxN_r4VTpumIIKbMineF5W0dAlD6m7EAPPrwcdWFAKNeQmNxZDj485k3b3eqapQVOsKaGIUtNaipS-RmHh_Z6kkkJ3gui8SFqcYYeqreZdC2IjWs0fN4_PLB3SXXgOThGw",
    quote: null,
  },
  {
    id: 2,
    category: "Branding",
    title: "Vellum Silk",
    colSpan: "col-span-12 md:col-span-5 md:mt-32",
    aspect: "aspect-square",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQjrrOcAANnkYENRTIdJ0q8s-VJkzD2s04ZhQ7iqXC5Dh48ZfVlMfUpNMX8YHw1eBux7sPdpdAlYFpqrjR2XXJX-wBZVmN6NgsZvUxlfkpZ6VSQBDm2bJ_-pbY-nvRirCN_LZUw73xo3Lxr4x45C9fz5Bq3e0q8x8eQ",
    quote:
      '"The design should not be noticed. It should be felt as a natural extension of the brand\'s identity."',
  },
  {
    id: 3,
    category: "Web Design",
    title: "Ethereal UI",
    colSpan: "col-span-12 md:col-span-4 md:-mt-16",
    aspect: "aspect-[3/4]",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuClheoevjH0Nso6-FgX2kGJnMMGQTRPq2R8UfBwSOGxZ51UouHuzXymwQ_n_5SSlKd-lI58RPEyUcxNPzCs17lfbZ65Sx00pdAZLO9WHabaMB3XFa7HeYRYcTUIsaq7KjYrt65yMqlSX4ZdzbaOTVzTQVk5GJUDQLUr0_pl0Izzmy_ha6ewQPSPqb7LcSZ_5gKcY_SMh2EYu_gDNoCwhWguMQPpwf5_pzGTay6l5mitMkbwW4p4-0Nd4_UtdrHdKAk6wqf3p4AwNxHo",
    quote: null,
  },
  {
    id: 4,
    category: "Creative Direction",
    title: "Luma Exhibition",
    colSpan: "col-span-12 md:col-span-8",
    aspect: "aspect-video",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7ziTMhmLz2vvkJdnnmDRDzPlszWy1uzrsnjHZxg5UICDb8GanNWKgbOKTLOsDG9ngqFMaJSWcLJU87jjg-GwAbfFDSABGANec0HOeQA2DESsIuHHu956fnsHNAj0GJqcuxxG-4MSTyddwo3WMVSfxMkblFIxLFo5XDcBjTTzxnnQKW79xbLjqXOujt2r6t_xjOEke-RTDIqVzB9p6l80p0cV2Unzf4m48zM1TptVjMrEBE1eaf9d0eTjfIZej2ATdnXJ2gBezHDc",
    quote: null,
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-32 bg-[#f9f9f9]" id="portfolio">
      <div className="px-8 md:px-24 mb-24">
        <h2 className="notoSerif text-4xl font-bold">Selected Works</h2>
      </div>
      <div className="grid grid-cols-12 gap-12 px-8 md:px-24 items-center">
        {projects.map((project) => (
          <div key={project.id} className={project.colSpan}>
            <div
              className={`${project.aspect} overflow-hidden bg-[#e4e9ea] relative group`}
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="manrope text-[10px] uppercase tracking-widest opacity-80">
                  {project.category}
                </span>
                <h4 className="notoSerif text-2xl mt-2">{project.title}</h4>
              </div>
            </div>
            {project.quote && (
              <div className="mt-12 max-w-sm">
                <p className="manrope text-[#5a6061] text-sm italic leading-relaxed">
                  {project.quote}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
