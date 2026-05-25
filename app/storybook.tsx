import { View } from 'react-native';

import StorybookUI from '../.rnstorybook';
import { DevFloatingToolbar } from '@/components/molecules';

const StorybookScreen = () => (
  <View style={{ flex: 1 }}>
    <StorybookUI />
    <DevFloatingToolbar />
  </View>
);

export default StorybookScreen;
