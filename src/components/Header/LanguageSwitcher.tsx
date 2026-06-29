import { IconButton, Stack, Tooltip } from '@mui/material';
import EN from "../../assets/flags/en2.svg";
import DE from "../../assets/flags/at2.svg";
import { Lang } from '../../app/utilities/Languages';

export default function LanguageSwitcher({
  value,
  onChange,
}: {
  value: Lang;
  onChange: (code: Lang) => void;
}) {
  const BLUE = "#f5f7fc";
  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: Lang.EN, label: "English",   flag: EN }, // 🇬🇧
    { code: Lang.DE, label: "Deutsch",   flag: DE }, // 🇬🇧
  ];

  return (
    <Stack direction="row" spacing={1.3}>
      {languages.map((l) => (
        <Tooltip key={l.code} title={l.label}>
          <IconButton
            size="small"
            onClick={() => onChange(l.code)}
            aria-label={l.label}
            sx={{
              p: 0.5,
              borderRadius: 0.5,
              border: "1px solid",
              borderColor: l.code === value ? "divider" : "divider",
              bgcolor: l.code === value ? `${BLUE}5A` : "transparent",
              "&:hover": {
                bgcolor: l.code === value ? `${BLUE}2A` : "action.hover",
              },
              boxShadow: "0 0 8px rgba(0, 170, 255, 1)",
            }}
          >
            <img
              src={l.flag}
              alt={l.label}
              style={{
                width: 42,
                height: 26,
                borderRadius: 2,
                display: "block",
                objectFit: "cover",
                background: "#fff",
              }}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}
