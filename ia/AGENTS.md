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
- [ ] Tests are written for new functionality

## Common Mistakes to Avoid

- Don't hardcode colors/spacing - use theme keys
- Don't skip testIDs - they're required for testing
- Don't update testIDs without raising a warning (e.g. adding a "TODO: let know QA about this change")
- Don't create duplicate logic - extract to shared libraries
- Don't ignore TypeScript errors - fix them properly
- Don't skip form validation with zod schemas
- Don't forget error boundaries for React components
- Don't run synchronous database queries (`execSync`, `runSync`) in UI components—keep calculations off the main thread
- Don't violate dependency rules