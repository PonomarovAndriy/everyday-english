import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <Container
      component="main"
      sx={{
        maxWidth: "1200px !important",
      }}
    >
      <Box
        sx={{
          minHeight: "100dvh",
          display: "grid",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 1.5,
          boxShadow: 10,
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />

        <Outlet />

        {/* <Footer /> */}
      </Box>
    </Container>
  );
}
