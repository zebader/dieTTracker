import type { Preview } from '@storybook/react-native';

import { withAppTheme } from './decorators/StorybookProviders';

const preview: Preview = {
  decorators: [withAppTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
