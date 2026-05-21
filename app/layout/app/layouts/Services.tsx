import React from "react";
 
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}
 
const GraphicDesignIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#111" />
    <path
      d="M14 42 L24 28 L31 36 L38 24 L50 42 Z"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <circle cx="50" cy="16" r="5" fill="#FF6B00" />
  </svg>
);
 
const VideoEditingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#111" />
    {/* Camera body */}
    <rect x="8" y="20" width="36" height="26" rx="6" fill="white" />
    {/* Camera lens triangle */}
    <polygon points="48,22 60,30 60,36 48,44" fill="white" />
  </svg>
);
 
const BarChartIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#111" />
    <rect x="12" y="30" width="10" height="22" rx="3" fill="white" />
    <rect x="27" y="20" width="10" height="32" rx="3" fill="white" />
    <rect x="42" y="14" width="10" height="38" rx="3" fill="white" />
  </svg>
);
 
const services: ServiceCard[] = [
  {
    icon: <GraphicDesignIcon />,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: <VideoEditingIcon />,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: <BarChartIcon />,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
];
 

export default function Services(){
    return(
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "64px 48px",
        boxSizing: "border-box",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            margin: "0 0 10px 0",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "3px",
            color: "#aaa",
            textTransform: "uppercase",
          }}
        >
          Service
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "40px",
            fontWeight: 800,
            color: "#0f1f3d",
            letterSpacing: "-0.5px",
          }}
        >
          Our Vision &amp; Our Goal
        </h2>
      </div>
 
      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "40px 32px 36px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxSizing: "border-box",
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: "24px" }}>{service.icon}</div>
 
            {/* Title */}
            <h3
              style={{
                margin: "0 0 16px 0",
                fontSize: "22px",
                fontWeight: 800,
                color: "#0f1f3d",
              }}
            >
              {service.title}
            </h3>
 
            {/* Description */}
            <p
              style={{
                margin: "0 0 32px 0",
                fontSize: "14px",
                color: "#555",
                lineHeight: "1.75",
                flex: 1,
              }}
            >
              {service.description}
            </p>
 
            {/* Button */}
            <button
              style={{
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "#FF6B00",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e05a00")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF6B00")
              }
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
    );
}