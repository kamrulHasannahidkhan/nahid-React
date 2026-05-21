import img from "./a.jpg";

export default function About() {
  return (
    <section className="min-h-screen bg-white flex items-center px-8 md:px-20">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-[55px] md:text-[80px] leading-none font-bold text-[#071B4A]">
            We boost growth for your startup business
          </h1>

          <p className="mt-8 text-[#3d4b6d] text-lg leading-9 max-w-xl">
            Our goal is top at the heart of creativity services industry
            as a digital creator. It has after comment.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white px-10 py-5 rounded-2xl text-xl font-semibold">
              Get Started
            </button>

            <div className="flex items-center gap-4 cursor-pointer">

              {/* PLAY BUTTON */}
              <div className="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center">

                <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-white text-xl">
                  ▶
                </div>

              </div>

              <h3 className="text-2xl font-semibold text-[#071B4A]">
                Learn More
              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center h-[700px]">

          {/* TOP CARD */}
          <div className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4 z-30">

            <div className="bg-black text-white p-3 rounded-xl text-2xl">
              📈
            </div>

            <div>
              <h4 className="font-bold text-lg">
                100% Business Growth
              </h4>

              <p className="text-gray-500">
                ⭐ 4.9 (1520 Reviews)
              </p>
            </div>

          </div>

          {/* CENTER IDEA BOX */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-36 h-36 rounded-xl shadow-lg flex items-center justify-center text-5xl z-10">
            💡
          </div>

          {/* BOTTOM CARD */}
          <div className="absolute bottom-10 left-10 bg-white shadow-xl rounded-2xl px-6 py-4 z-30">

            <h3 className="font-bold text-3xl text-[#071B4A]">
              1000,000 Happy Clients
            </h3>

            <p className="text-gray-500 mt-2 text-lg">
              ⭐ 4.9 (15k Reviews)
            </p>

          </div>

          {/* MAIN IMAGE */}
            <img
        src={img}
        className="w-[550px] rounded-3xl mt-10 md:mt-0"
      />

        </div>

      </div>

    </section>
  );
}