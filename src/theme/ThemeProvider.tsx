import React from 'react';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Montserrat, sans-serif',
        colorScheme: 'light',
        colors: {
          primary: [
            '#A2585B',
            '#A74E51',
            '#AF4145',
            '#B93237',
            '#C62127',
            '#B23135',
            '#A23C40',
            '#944548',
            '#8A4B4E',
            '#815052',
          ],
        },
        primaryColor: 'primary',
        primaryShade: 4,
        components: {
          Button: {
            defaultProps: {
              radius: 10,
              fw: 'normal',
              variant: 'gradient',
              gradient:{ from: '#c62127', to: '#86181a', deg: 90 }
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
