export default function Footer() {
  return (<>
     <footer
      style={{
        width: "100%",
        borderTop: "1px solid #e5e5e5",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: "14px",
        color: "#111",
        backgroundColor: "#fff",
        boxSizing: "border-box",
      }}
    >
      {/* Left: Logo + Copyright */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Logo */}
        <span
          style={{
            fontWeight: 600,
            fontSize: "16px",
            letterSpacing: "-0.3px",
            display: "flex",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <span style={{ color: "#e8521a" }}>Epixe</span>
          <span style={{ color: "#111" }}>lab</span>
        </span>
 
        {/* Copyright */}
        <span style={{ color: "#555", fontSize: "13px" }}>
          © 2026 Epixelab. All rights reserved.
        </span>
      </div>
 
      {/* Right: Nav Links */}
      <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {["Portfolio", "How it Works", "Pricing", "About", "Login"].map(
          (item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#111",
                textDecoration: "none",
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#e8521a")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#111")
              }
            >
              {item}
            </a>
          )
        )}
      </nav>
    </footer>
     <div
      style={{
        width: "100%",
        padding: "12px 32px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <p style={{ margin: 0, fontSize: "13px", color: "#aaa" }}>
        Startup Framework contains components and complex blocks which can easily be integrated into almost any design.
      </p>
    </div>
    </>

   
  );
}