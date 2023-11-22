export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 font-poppins">
      <section className="w-full px-3 py-5 flex items-center justify-center gap-5">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-5 sm:flex-row">
          <div className="w-64 h-36 rounded-md bg-slate-600"></div>
          <h1 className="text-3xl text-center font-bold sm:text-4xl md:text-5xl">
            Lorem Ipsum Dolor Sit Amet
          </h1>
        </div>
      </section>

      <section className="w-full px-3 py-5 flex items-center justify-center gap-5">
        <div className="w-full max-w-5xl flex flex-col justify-center gap-5">
          <h2 className="text-2xl">Berbagai Pilihan Jasa</h2>
          <div className="w-full flex items-center justify-center">
            <div className="h-64 w-full max-w-2xl flex flex-wrap flex-col gap-3 overflow-x-auto sm:h-auto sm:flex-row sm:items-start sm:justify-center">
              <div className="w-52 h-28 rounded-md bg-slate-600"></div>
              <div className="w-52 h-28 rounded-md bg-slate-600"></div>
              <div className="w-52 h-28 rounded-md bg-slate-600"></div>
              <div className="w-52 h-28 rounded-md bg-slate-600"></div>
              <div className="w-52 h-28 rounded-md bg-slate-600"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-5 flex items-center justify-center gap-5">
        <div className="w-full max-w-5xl flex flex-col justify-center gap-5">
          <h2 className="text-2xl">Benefit</h2>

          <div className="w-full flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <div className="w-40 h-40 rounded-full bg-slate-600 sm:w-48 sm:h-48"></div>

            <div className="w-full flex flex-col items-center justify-center gap-5 sm:max-w-sm md:max-w-lg">
              <div className="w-full flex items-center justify-between gap-3 border-b">
                <button className="px-3 py-2 text-lg font-medium rounded-t-lg bg-[#5F4BDB] text-white">
                  Benefit 1
                </button>
                <button className="px-3 py-2 text-lg font-medium">
                  Benefit 2
                </button>
                <button className="px-3 py-2 text-lg font-medium">
                  Benefit 3
                </button>
              </div>

              <p className="w-full text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-16 flex items-center justify-center gap-5 bg-[#5F4BDB]">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-12">
          <h2 className="text-2xl text-white">Call To Action</h2>

          <div className="w-full max-w-lg relative flex items-center md:max-w-3xl">
            <div className="absolute w-8 h-8 rounded-full right-3 bg-slate-600"></div>
            <input
              type="search"
              name="landingPageJobSearch"
              placeholder="Cari lowongan..."
              className="w-full pl-5 pr-12 py-3 rounded-full border text-sm border-gray-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
