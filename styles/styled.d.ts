import 'styled-components/native';
import type { AppTheme } from './theme';

declare module 'styled-components/native' {
  /* TODO: fix this with no disabling */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
