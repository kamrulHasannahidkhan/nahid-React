import imeg from "./b.jpg";

export default function Service(){
    return  <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">

      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight text-black">
          We boost growth for your startup business
        </h1>

        <p className="mt-5 text-black">
          Modern agency solution for startups.
        </p>

        <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full">
          Get Started
        </button>
      </div>

      <img
        src={imeg}
        className="w-[700px] rounded-3xl mt-10 md:mt-0"
      />
    </section>
  
}