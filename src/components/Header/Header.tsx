// src/components/Header/Header.tsx
import { Container, Paper, Stack } from "@mui/material";
import LogoBlock from "./LogoBlock";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{ py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 } }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <LogoBlock />

          {/* <LanguageSwitcher
            value={i18n.language as "ru" | "bg" | "en"}
            onChange={(code) => {
              i18n.changeLanguage(code);
            }}
          /> */}
        </Stack>

        <Navigation />
      </Paper>
    </Container>
  );
}
