const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    text: `Get a fully retina ready site when you build with Startup Framework.
Websites look sharper and more gorgeous on devices with retina display support`,
    name: "RAYHAN CURRAN",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    text: `As a business targeting high net worth individuals, we were looking for a
slick, cool and mini-malistic design for our website`,
    name: "RAYHAN CURRAN",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    text: `The most important part of the Startup Framework is the samples`,
    name: "RAYHAN CURRAN",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    text: `I've built my website with Startup just in one day, and it was ready-to-go.`,
    name: "RAYHAN CURRAN",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[14px] tracking-[6px] text-[#0b1b3f] uppercase mb-4">
            Testimonials
          </p>

          <h2 className="text-[58px] leading-[1.1] font-bold text-[#021b49]">
            What Clients say about us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-24">
          {testimonials.map((item) => (
            <div key={item.id}>
              {/* Top Content */}
              <div className="flex items-start gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[96px] h-[96px] object-cover rounded-md"
                />

                <p className="text-[18px] leading-[1.8] text-black max-w-[470px]">
                  {item.text}
                </p>
              </div>

              {/* Name */}
              <p className="mt-12 ml-[120px] text-[28px] font-semibold text-blackuppercase tracking-wide">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}