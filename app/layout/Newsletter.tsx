import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  

  return (
     <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "64px 32px",
        boxSizing: "border-box",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
          Our Team
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
          Subscribe Our Newsletter
        </h2>
      </div>
 
      {/* Content Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Left: 3D Envelope Illustration */}
        <div style={{ flexShrink: 0, width: "280px" }}>
          <svg
            viewBox="0 0 280 300"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto" }}
          >
            {/* Envelope body */}
            <rect x="30" y="140" width="220" height="145" rx="12" fill="#FF6B00" />
 
            {/* Envelope shadow/bottom fold */}
            <path d="M30 240 Q140 300 250 240 L250 285 Q140 310 30 285 Z" fill="#e05a00" opacity="0.6" />
 
            {/* Envelope flap left */}
            <path d="M30 140 L140 210 L30 260 Z" fill="#e05a00" />
            {/* Envelope flap right */}
            <path d="M250 140 L140 210 L250 260 Z" fill="#e05a00" />
 
            {/* Envelope bottom crease */}
            <path d="M30 285 L140 230 L250 285" fill="#cc5200" opacity="0.5" />
 
            {/* Paper / Letter */}
            <rect x="80" y="40" width="150" height="195" rx="14" fill="#f0f0f0" />
            <rect x="80" y="40" width="150" height="195" rx="14" fill="white" opacity="0.9" />
 
            {/* Lines on paper */}
            <rect x="105" y="95" width="100" height="8" rx="4" fill="#f0a0a0" opacity="0.7" />
            <rect x="105" y="115" width="100" height="8" rx="4" fill="#f0a0a0" opacity="0.7" />
            <rect x="105" y="135" width="100" height="8" rx="4" fill="#f0a0a0" opacity="0.7" />
            <rect x="105" y="155" width="80" height="8" rx="4" fill="#f0a0a0" opacity="0.7" />
            <rect x="105" y="175" width="60" height="8" rx="4" fill="#f0a0a0" opacity="0.5" />
          </svg>
        </div>
 
        {/* Right: Text + Form */}
        <div style={{ flex: 1, maxWidth: "520px" }}>
          <p
            style={{
              margin: "0 0 28px 0",
              fontSize: "15px",
              color: "#444",
              lineHeight: "1.7",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            adipisci consequatur sequi maxime id sapiente.
          </p>
 
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your E-mail here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "18px 24px",
              fontSize: "15px",
              color: "#333",
              backgroundColor: "#f5f5f5",
              border: "none",
              borderRadius: "50px",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: "16px",
            }}
          />
 
          {/* Subscribe Button */}
          <button
            style={{
              width: "100%",
              padding: "18px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              backgroundColor: "#FF6B00",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e05a00")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF6B00")
            }
          >
            Subscribe Our Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
