export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f9f9f9]/70 backdrop-blur-lg">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-[100vw]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-neutral-700">menu</span>
          <span className="text-xl font-bold tracking-tighter text-neutral-800 notoSerif">
            Atelier Luma
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#"
            className="text-neutral-900 border-b-2 border-neutral-800 pb-1 font-medium manrope"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-neutral-500 font-medium manrope hover:text-neutral-900 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-neutral-500 font-medium manrope hover:text-neutral-900 transition-colors duration-300"
          >
            Portfolio
          </a>
        </div>
        <button className="text-neutral-700 font-serif text-lg tracking-tight notoSerif hover:text-neutral-900 transition-colors duration-300">
          Contact
        </button>
      </nav>
    </header>
  );
}
