import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function LogoBlock() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "inline-block",
          cursor: "pointer",
          bgcolor: "#000",
          px: 2,
          py: 1,
          borderRadius: 1,
          userSelect: "none",
        }}
      >
        {/* Top row: cursive "Everyday" + subtitle */}
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>
          <Box
            component="span"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "28px",
              fontWeight: 700,
              color: "#4d90fe",
              lineHeight: 1.1,
            }}
          >
            Everyday
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              color: "#e0e0e0",
              letterSpacing: "0.4px",
              mb: "4px",
            }}
          >
            English lernen mit Spaß!
          </Box>
        </Box>

        {/* ENGLISH filled with Union Jack */}
        <Box
          component="span"
          sx={{
            display: "block",
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: { xs: "44px", sm: "54px" },
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "2px",
            backgroundImage: "url('/src/assets/background.svg')",
            backgroundSize: "100% 200%",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "0.5px rgba(255,255,255,0.25)",
          }}
        >
          ENGLISH
        </Box>
      </Box>
    </Link>
  );
}
