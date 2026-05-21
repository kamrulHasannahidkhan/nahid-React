import { FaTwitter, FaFacebookF, FaGlobe } from "react-icons/fa";



export default function Team(){
   const teamMembers = [
    {
      name: "Vanessa Laird",
      role: "UI DESIGNER",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    },
    {
      name: "Mason Campbell",
      role: "UI DESIGNER",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    },
    {
      name: "Irea Evans",
      role: "CLIENT MANAGER",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-10">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-[8px] text-[13px] text-gray-500 mb-4">
          Our Team
        </p>

        <h1 className="text-6xl font-bold text-[#001b44]">
          Meet The Team
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl overflow-hidden bg-transparent"
          >
            {/* Top Content */}
            <div className="flex flex-col items-center py-14 px-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-[130px] h-[130px] rounded-full object-cover mb-8"
              />

              <h2 className="text-[22px] font-medium text-[#001b44] mb-3">
                {member.name}
              </h2>

              <p className="tracking-[6px] text-gray-400 text-[13px] uppercase">
                {member.role}
              </p>
            </div>

            {/* Bottom Socials */}
            <div className="grid grid-cols-3 border-t border-gray-300">
              <button className="flex items-center justify-center py-5 border-r border-gray-300 text-gray-500 text-xl hover:bg-gray-100 transition">
                <FaTwitter />
              </button>

              <button className="flex items-center justify-center py-5 border-r border-gray-300 text-gray-500 text-xl hover:bg-gray-100 transition">
                <FaFacebookF />
              </button>

              <button className="flex items-center justify-center py-5 text-gray-500 text-xl hover:bg-gray-100 transition">
                <FaGlobe />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    );

}