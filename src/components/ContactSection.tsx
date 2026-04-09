export default function ContactSection() {
  return (
    <section className="py-32 bg-[#f8f3ec] px-8 md:px-24" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="notoSerif text-5xl font-bold mb-6">Start a Conversation</h2>
          <p className="manrope text-[#5a6061] tracking-wide">
            Tell us about your project, your vision, and your aspirations.
          </p>
        </div>
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-0 border-b border-[#adb3b4] py-4 px-0 focus:ring-0 focus:border-[#5f5e5e] transition-all manrope outline-none placeholder:text-[#5a6061]/50"
              />
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b border-[#adb3b4] py-4 px-0 focus:ring-0 focus:border-[#5f5e5e] transition-all manrope outline-none placeholder:text-[#5a6061]/50"
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              rows={4}
              placeholder="Your Vision"
              className="w-full bg-transparent border-0 border-b border-[#adb3b4] py-4 px-0 focus:ring-0 focus:border-[#5f5e5e] transition-all manrope outline-none resize-none placeholder:text-[#5a6061]/50"
            />
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-[#5f5e5e] text-[#faf7f6] px-16 py-6 manrope font-bold uppercase tracking-widest hover:bg-[#535252] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
