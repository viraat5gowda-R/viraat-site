```markdown
# viraat-site Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `viraat-site` TypeScript codebase. You'll learn about file naming, import/export styles, commit message conventions, and how to write and run tests. This guide is designed to help you quickly onboard and maintain consistency across the project.

## Coding Conventions

### File Naming
- **Pattern:** PascalCase
- **Example:**  
  `UserProfile.ts`  
  `HomePageComponent.ts`

### Import Style
- **Pattern:** Use aliases for imports.
- **Example:**
  ```typescript
  import UserService from '@services/UserService';
  import { formatDate } from '@utils/DateUtils';
  ```

### Export Style
- **Pattern:** Default exports are preferred.
- **Example:**
  ```typescript
  // UserProfile.ts
  class UserProfile { /* ... */ }
  export default UserProfile;
  ```

### Commit Messages
- **Pattern:** Conventional commits with `feat` prefix for features.
- **Example:**
  ```
  feat: add user authentication to login page
  ```

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- **Framework:** Unknown (no specific framework detected)
- **File Pattern:** Test files follow the `*.test.*` naming convention.
- **Example:**
  ```
  UserProfile.test.ts
  ```
- **Typical Test Structure:**
  ```typescript
  // UserProfile.test.ts
  import UserProfile from './UserProfile';

  describe('UserProfile', () => {
    it('should create a user profile instance', () => {
      const profile = new UserProfile('Alice');
      expect(profile.name).toBe('Alice');
    });
  });
  ```

## Commands
| Command | Purpose |
|---------|---------|
| /test   | Run all test files matching `*.test.*` |
| /lint   | Lint the codebase (if a linter is configured) |
| /commit | Make a conventional commit (e.g., `feat: ...`) |
```
