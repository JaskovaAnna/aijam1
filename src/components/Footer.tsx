export default function Footer() {
  return (
    <footer className="w-full py-24 px-12 bg-[#f2f4f4]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">
        <div className="space-y-6">
          <span className="text-sm font-bold text-neutral-800 notoSerif">Atelier Luma</span>
          <p className="max-w-xs text-xs uppercase tracking-[0.2em] manrope text-neutral-600">
            Crafting timeless digital monoliths for the modern curator.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] manrope text-neutral-900 font-bold">
              Studio
            </span>
            <a
              href="#services"
              className="text-xs uppercase tracking-[0.2em] manrope text-neutral-500 hover:text-neutral-800 underline underline-offset-8"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-xs uppercase tracking-[0.2em] manrope text-neutral-500 hover:text-neutral-800 underline underline-offset-8"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] manrope text-neutral-500 hover:text-neutral-800 underline underline-offset-8"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] manrope text-neutral-900 font-bold">
              Legal
            </span>
            <a
              href="#"
              className="text-xs uppercase tracking-[0.2em] manrope text-neutral-500 hover:text-neutral-800 underline underline-offset-8"
            >
              Privacy
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <span className="text-xs uppercase tracking-[0.2em] manrope text-neutral-600">
            © 2024 Atelier Luma. Built for the Digital Curator.
          </span>
        </div>
      </div>
    </footer>
  );
}
