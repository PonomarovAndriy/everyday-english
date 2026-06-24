// src/components/Header/Navigation.tsx
import React from "react";
import {
  Box,
  Button,
  Collapse,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const BLUE = "#2970FA";

export default function Navigation() {
  const { t } = useTranslation();

  const NAV = [
    { label: t('navigation.home'), to: "/" },
    { label: t('navigation.photos'), to: "/photos" },
    { label: t('navigation.prices'), to: "/prices" },
    { label: t('navigation.where'), to: "/where" },
    { label: t('navigation.services'), to: "/services" },
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  // --- MOBILE: dropdown ---
  if (isMobile) {
    return (
      <Box sx={{ width: "100%", mt: 2 }}>
        {/* Dropdown trigger */}
        <Button
          fullWidth
          onClick={() => setOpen((prev) => !prev)}
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: 700,
            borderRadius: 1,
            px: 2.5,
            py: 1,
            bgcolor: BLUE,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            color: "#fff",
            "&:hover": {
              bgcolor: "#1f5fe0"
            },
          }}
        >
          {t('navigation.menuButton')}
          {open ? (
            <ExpandLessIcon sx={{ ml: 1 }} />
          ) : (
            <ExpandMoreIcon sx={{ ml: 1 }} />
          )}
        </Button>

        {/* Dropdown content */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Stack
            direction="column"
            spacing={0}
            sx={{ mt: 1, borderRadius: 1, overflow: "hidden" }}
          >
            {NAV.map((item) => {
              const active = isActive(item.to);
              return (
                <Button
                  key={item.to}
                  onClick={() => {
                    navigate(item.to);
                    setOpen(false);
                  }}
                  fullWidth
                  disableElevation
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    fontWeight: active ? 700 : 500,
                    borderRadius: 0,
                    px: 2.5,
                    py: 1,
                    bgcolor: active ? BLUE : "rgba(41,112,250,0.06)",
                    color: active ? "#fff" : BLUE,
                    "&:hover": {
                      bgcolor: active ? "#1f5fe0" : "rgba(41,112,250,0.15)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Collapse>
      </Box>
    );
  }

  // --- DESKTOP: row of buttons ---
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {NAV.map((item) => {
        const active = isActive(item.to);
        return (
          <Button
            key={item.to}
            onClick={() => navigate(item.to)}
            disableElevation
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minWidth: 110,
              borderRadius: 2,
              px: 2.5,
              py: 1,
              bgcolor: active ? BLUE : `${BLUE}26`,
              color: active ? "#fff" : BLUE,
              "&:hover": { bgcolor: active ? "#1f5fe0" : `${BLUE}5A` },
              boxShadow: active
                ? "0 2px 8px rgba(0,0,0,0.5)"
                : "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Stack>
  );
}
