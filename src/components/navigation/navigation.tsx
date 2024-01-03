import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';

interface LinkTabProps extends TabProps {
  to: string;
}

function LinkTab(props: LinkTabProps) {
  const { to, label, ...rest } = props;
  
  return (
    <Tab
      component={Link}
      to={to}
      label={label}
      {...rest}
    />
  );
}

export default function NavTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    // Find the index of the current location in the list of tabs and set the value accordingly
    const tabValue = tabs.findIndex(tab => tab.to === location.pathname);
    if (tabValue !== -1) {
      setValue(tabValue);
    }
  }, [location.pathname]);

  const tabs: LinkTabProps[] = [
    { label: "Principal", to: "/main" },
    { label: "Conversas", to: "/conversations" },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '92%', height: '33px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        role="navigation"
      >
        {tabs.map((tab, index) => (
          <LinkTab key={index} {...tab} />
        ))}
      </Tabs>
    </Box>
  );
}
