const services = [
  {
    icon: "brush",
    title: "Branding",
    description:
      "Creating visual identities that whisper luxury. We focus on typography, texture, and tonal balance to define your brand's soul.",
  },
  {
    icon: "language",
    title: "Web Design",
    description:
      "Architecting digital monolithic structures. Our websites are designed to be fast, fluid, and visually stunning across all canvases.",
  },
  {
    icon: "photo_camera",
    title: "Photography",
    description:
      "Capturing the essence of light and space. Editorial imagery that complements modern digital layouts with cinematic depth.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-[#f2f4f4] px-8 md:px-24" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <h2 className="notoSerif text-4xl font-bold mb-6">Disciplines</h2>
          <p className="manrope text-[#5a6061] leading-relaxed">
            A synthesis of technical precision and artistic vision. Our services are tailored for
            those who value silent sophistication.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-[#5a6061] mb-2">01 / 03</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`bg-white p-16 group hover:bg-[#f8f3ec] transition-colors duration-500${
              index > 0 ? " md:border-l border-[#ebeeef]" : ""
            }`}
          >
            <span className="material-symbols-outlined mb-12 block text-3xl font-light">
              {service.icon}
            </span>
            <h3 className="notoSerif text-2xl mb-6">{service.title}</h3>
            <p className="manrope text-[#5a6061] text-sm leading-loose mb-12">
              {service.description}
            </p>
            <span className="text-xs uppercase tracking-[0.2em] underline underline-offset-8 cursor-pointer">
              Learn More
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
