import { Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavTabs() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const items = [
    { label: t('navigation.home'), to: '/' },
    { label: t('navigation.photos'), to: '/photos' },
    { label: t('navigation.prices'), to: '/prices' },
    { label: t('navigation.where'), to: '/where' },
    { label: t('navigation.services'), to: '/services' },
  ];

  const value = items.findIndex(i => i.to === pathname) ?? 0;

  return (
    <Tabs value={value === -1 ? 0 : value} onChange={(_, idx) => navigate(items[idx].to)}
      variant="scrollable" allowScrollButtonsMobile>
      {items.map(i => <Tab key={i.to} label={i.label} />)}
    </Tabs>
  );
}
