export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <section className="w-full px-3 py-5 flex items-center justify-center gap-5">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-5">
          <div className="w-64 h-36 rounded-md bg-slate-600"></div>
          <h1 className="text-3xl text-center font-bold">
            Lorem Ipsum Dolor Sit Amet
          </h1>
        </div>
      </section>

      <section className="w-full px-3 py-5 flex items-center justify-center gap-5">
        <div className="w-full max-w-5xl flex flex-col justify-center gap-5">
          <h2 className="text-2xl">Berbagai Pilihan Jasa</h2>
          <div className="w-full flex items-center justify-center overflow-x-auto">
            <div className="h-96 flex flex-wrap flex-col items-center gap-3 sm:w-full sm:h-auto sm:flex-row sm:items-start sm:justify-center">
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
          <div className="w-full flex flex-col items-center justify-center gap-5 sm:flex-row">
            <div className="w-40 h-40 rounded-full bg-slate-600 sm:w-52 sm:h-52"></div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-between gap-3">
                <button className="px-3 py-2 text-lg font-medium">
                  Benefit 1
                </button>
                <button className="px-3 py-2 text-lg font-medium">
                  Benefit 2
                </button>
                <button className="px-3 py-2 text-lg font-medium">
                  Benefit 3
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-5 flex items-center justify-center gap-5 bg-slate-100">
        <div className="w-full max-w-5xl flex flex-col justify-center gap-5">
          <h2 className="text-2xl">Call To Action</h2>
          <button>Cari Lowongan</button>
        </div>
      </section>
    </div>
  );
}
