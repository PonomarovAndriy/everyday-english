// src/components/Header/Header.tsx
import { Container, Paper, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import LogoBlock from "./LogoBlock";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { i18n } = useTranslation();

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
          backgroundColor: "#000",
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

          <LanguageSwitcher
            value={i18n.language as "de" | "en"}
            onChange={(code) => {
              i18n.changeLanguage(code);
            }}
          />
        </Stack>

        <Navigation />
      </Paper>
    </Container>
  );
}
