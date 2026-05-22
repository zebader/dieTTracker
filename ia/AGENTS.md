# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

---

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

export const MealLoggerCard = () => {
  return (
    <Container>
      {/* Content */}
    </Container>
  );
};