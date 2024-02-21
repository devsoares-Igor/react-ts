import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import { NavStyles } from './styles';

interface LinkTabProps extends TabProps {
  to: string;
  color?: string; // Adicionando a propriedade color
}

function LinkTab(props: LinkTabProps) {
  const { to, color, label, ...rest } = props;

  return (
    <Tab
      component={Link}
      to={to}
      label={<span style={{ color }}>{label}</span>} // Usando a propriedade color para definir a cor da label
      {...rest}
    />
  );
}

export default function NavTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    // Encontrar o índice da localização atual na lista de tabs e definir o valor correspondente
    const tabValue = tabs.findIndex(tab => tab.to === location.pathname);
    if (tabValue !== -1) {
      setValue(tabValue);
    }
  }, [location.pathname]);

  const tabs: LinkTabProps[] = [
    { label: "Principal", to: "/main", color: "#c9c9c9" }, // Exemplo de como definir a cor para esta tab
    { label: "Catalogo", to: "/catalogo", color: "#dcdcdc" }, // Exemplo de como definir a cor para esta tab
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NavStyles>
      <Box>
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
    </NavStyles>
  );
}
