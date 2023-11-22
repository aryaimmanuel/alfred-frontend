import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-5 font-poppins text-white bg-[#1F2131]">
      <div className="w-full max-w-7xl p-5 mt-5 flex flex-col items-center justify-between gap-9 md:flex-row">
        <div className="w-full flex flex-col justify-center gap-6 md:w-fit">
          <span className="text-4xl">Alfred</span>
          <p className="max-w-xs text-sm sm:text-base">
            Alfred is a Freelance Landing Website lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#3CB5DB]"></div>
            <div className="w-12 h-12 rounded-full bg-[#3CB5DB]"></div>
            <div className="w-12 h-12 rounded-full bg-[#3CB5DB]"></div>
          </div>
        </div>

        <nav className="w-full flex items-center pt-5 border-t border-gray-700 md:border-t-0 md:max-w-[250px]">
          <div className="w-fit flex flex-col gap-4">
            <span className="text-2xl font-semibold">Links</span>

            <div className="flex flex-col gap-3">
              <Link href={"/id/beranda"} className="py-2 font-light">
                Beranda
              </Link>
              <Link href={"/id/explore"} className="py-2 font-light">
                Explore
              </Link>
            </div>
          </div>
        </nav>

        <div className="w-full flex flex-col gap-6 pt-5 border-t border-gray-700 md:border-t-0 md:w-fit">
          <span className="min-w-[250px] text-2xl font-semibold">Get in Touch with Us</span>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#3CB5DB]"></div>
              <p>Jl. Pahlawan Indonesia</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#3CB5DB]"></div>
              <p>+628123456789</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#3CB5DB]"></div>
              <p>support@alfred.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center border-t border-gray-700">
        <div className="w-full max-w-7xl px-3 py-5 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <span className="text-sm text-gray-400">
            © Alfred Freelancer Landing Website {new Date().getFullYear()}. All
            Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
