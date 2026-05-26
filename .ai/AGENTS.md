# AI Assistant Instructions

## General Guidelines

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

## Code Generation & Syntax Rules

### 1. Function Syntax Standard
* **Arrow Functions Only:** Always generate functional React components, hooks, utilities, and helper callbacks using explicit **arrow function syntax** (`const MyComponent = () => {}`) instead of traditional function declarations (`function MyComponent() {}`).
* **Named Exports:** Use explicit named exports for components and hooks at the bottom of the file or inline to remain predictable across feature module configurations.

### 2. Implementation Style Reference

**React Native Components:**
```javascript
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

export const Card = () => {
  return (
    <Container>
      {/* Content */}
    </Container>
  );
};

When generating code for this project:

1. **Always follow the established patterns** shown in existing code
2. **Use TypeScript** with proper type definitions
3. **Extract reusable logic** into shared libraries when possible
4. **Use theme keys** for all styling, never hardcode values
5. **Include proper testIDs** for all interactive elements
6. **Follow the component structure** with styled-components namespace
7. **Use local-first SQLite patterns** for persistence, wrapped in custom React Hooks for UI reactivity
8. **Maintain consistency** with existing error handling
9. **Check existing implementations** before creating new patterns
10. **Use the correct imports** from `@/-*` packages

## Code Generation Rules

### Before Writing Code

- Check existing code patterns in similar features
- Look for existing components in `@/components-*` packages
- Verify the correct file structure and location
- Ensure database tables are initialized before writing queries against them

### When Writing Components

- Always define proper TypeScript interfaces
- Use styled-components with `S` namespace
- Include testIDs for all interactive elements
- Use theme keys for all styling
- Add or update colocated `ComponentName.test.tsx` when creating or changing atoms, molecules, or other shared `src/components/` UI (see **Unit tests** below)

### Storybook (atoms & molecules)

Whenever you **create or update** a component under `src/components/atoms/` or `src/components/molecules/`:

1. **Check for a colocated story** — `ComponentName.stories.tsx` next to `ComponentName.tsx`.
2. **Create the story** if it does not exist; **update the story** if props, variants, behavior, or visual states changed.
3. **Story conventions:**
   - Title: `Atoms/ComponentName` or `Molecules/ComponentName` (match folder).
   - Use CSF3 (`Meta`, `StoryObj`) from `@storybook/react-native`.
   - Rely on the global `withAppTheme` decorator in `.rnstorybook/preview.tsx` (Poppins + `ThemeProvider`); do not duplicate theme setup unless a story needs an exception.
   - Cover default usage plus meaningful variants (sizes, colors, states, edge cases).
   - If `render` uses hooks (`useTheme`, etc.), extract a **PascalCase** inner component (see `Text.stories.tsx`) to satisfy `react-hooks/rules-of-hooks`.
4. **After adding or moving story files**, run `pnpm run storybook:generate` to refresh `.rnstorybook/storybook.requires.ts`.
5. **Export** new components from the folder `index.ts` when applicable.

Use existing stories (`Text.stories.tsx`, `IconSymbol.stories.tsx`, `HapticTab.stories.tsx`) as templates. Do not add stories for feature screens or other layers unless explicitly requested.

### Unit tests (Jest & React Native Testing Library)

The project uses **Jest** with the **`jest-expo`** preset and **`@testing-library/react-native`** for unit and component tests. Official reference: [Expo unit testing](https://docs.expo.dev/develop/unit-testing/).

Whenever you **create or update** a reusable component under `src/components/atoms/`, `src/components/molecules/`, or other shared `src/components/` UI (not feature screens unless explicitly requested):

1. **Check for a colocated test** — `ComponentName.test.tsx` next to `ComponentName.tsx`.
2. **Create the test** if it does not exist; **update the test** if props, variants, behavior, accessibility, or user-visible output changed.
3. **Test conventions:**
   - Colocate: `src/components/atoms/Text.test.tsx` beside `Text.tsx` (same folder as the component).
   - Use `describe` / `it` blocks; name tests by user-visible behavior (e.g. “renders children”, “calls onPress when pressed”).
   - Import `render` from `@testing-library/react-native` only when no theme wrapper is needed; otherwise use **`renderWithTheme`** from `@/testing/render-with-theme` for any component that uses `useTheme`, styled-components, or theme tokens.
   - Prefer queries aligned with how users interact: `getByText`, `getByTestId`, `getByRole` (when applicable). Assert with `toBeOnTheScreen()`, `toHaveTextContent()`, etc.
   - Cover default render, meaningful variants (sizes, colors, states), and important interactions (press, toggle) when the component supports them.
   - Do **not** use `@testing-library/react` (web/DOM); use **`@testing-library/react-native`** only.
4. **After adding or changing tests**, run `pnpm run test:ci` (or `pnpm test`) and ensure they pass. `pnpm run validate` includes tests on pre-commit.
5. **Export** is unchanged by tests; keep component `index.ts` exports in sync when adding new atoms/molecules.

Use `Text.test.tsx` and `src/testing/render-with-theme.tsx` as templates. For hooks, utilities, and feature logic outside `src/components/`, add tests when behavior is non-trivial or when explicitly requested.

**Scripts:** `pnpm test` (once), `pnpm test:watch` (watch), `pnpm test:ci` (CI / validate).

### Icons

- **Never import icon libraries directly in features or screens.** Always render icons through the shared `IconSymbol` atom (`@/components/atoms`).
- **`IconSymbol` implementation:** On Android and web, `IconSymbol` must use `MaterialIcons` from `@expo/vector-icons/MaterialIcons` inside `src/components/atoms/IconSymbol.tsx`. Add every new icon to the `MAPPING` object there (SF Symbol name → Material Icons name). Browse names at [icons.expo.fyi](https://icons.expo.fyi).
- **iOS:** `IconSymbol.ios.tsx` uses SF Symbols via `expo-symbols`; keep the same SF Symbol `name` keys as in the Android/web mapping.
- **Usage:** Pass `name`, `size`, and `color` (resolved theme color string) to `IconSymbol`. Example: theme toggle uses `sun.max.fill` when dark (switch to light) and `moon.fill` when light (switch to dark).

### When Writing SQLite Operations

- **Asynchronous Execution:** Always use asynchronous execution (`*Async` methods like `runAsync`, `getAllAsync`, `getFirstAsync`) to keep the JavaScript thread free and prevent UI freezing.
- **Prepared Statements:** Always use parameterized queries (e.g., `db.runAsync('INSERT INTO logs (text) VALUES (?)', [text])`) to maintain security, optimize query parsing, and automatically escape input content.
- **Database Lifecycle:** Initialize the SQLite engine globally using `openDatabaseSync` and reuse that connection across features.
- **UI Reactivity:** Wrap SQLite reads inside local feature hooks using `useEffect` and React state changes, or combine with Jotai atoms to refresh and emit state updates to the UI immediately after executing a database modification (`INSERT`, `UPDATE`, `DELETE`).

### When Writing State Management

- Use Jotai atoms for global state and synchronizing local database payloads
- Use useState for local component UI state
- Prefer functional components with hooks

## Quality Checklist

- [ ] TypeScript types are properly defined
- [ ] Theme keys are used for styling
- [ ] TestIDs are included for interactive elements
- [ ] Error handling follows project patterns
- [ ] SQLite calls use proper parameters/bindings to avoid injection vulnerabilities
- [ ] All database queries utilize modern asynchronous (`*Async`) execution methods
- [ ] Code follows established component structure
- [ ] Imports use correct `@/-*` packages
- [ ] Logic is extracted to shared libraries when appropriate
- [ ] Tests are written or updated for new/changed functionality
- [ ] Atom/molecule (and shared component) changes include an up-to-date colocated `*.test.tsx` (`pnpm run test:ci` passes)
- [ ] Atom/molecule changes include an up-to-date `*.stories.tsx` (and `storybook:generate` was run if story paths changed)

## Common Mistakes to Avoid

- Don't hardcode colors/spacing - use theme keys
- Don't import `@expo/vector-icons` or other icon sets outside `IconSymbol` — extend `MAPPING` instead
- Don't skip testIDs - they're required for testing
- Don't update testIDs without raising a warning (e.g. adding a "TODO: let know QA about this change")
- Don't create duplicate logic - extract to shared libraries
- Don't ignore TypeScript errors - fix them properly
- Don't skip form validation with zod schemas
- Don't forget error boundaries for React components
- Don't run synchronous database queries (`execSync`, `runSync`) in UI components—keep calculations off the main thread
- Don't violate dependency rules
- Don't ship new or changed atoms/molecules (or shared `src/components/` UI) without creating or updating their colocated `*.test.tsx`
- Don't ship new or changed atoms/molecules without creating or updating their Storybook story
- Don't use `@testing-library/react` in this React Native project — use `@testing-library/react-native`
- Don't render theme-dependent components in tests without `renderWithTheme` (or an equivalent `ThemeProvider` wrapper)