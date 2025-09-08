# Default Instructions for Copilot Coding Agent

## Coding Standards

- Always use TypeScript for all files.
- Avoid using `any` type unless explicitly required.
- Follow modular, composable, and DRY principles.
- Use async/await for asynchronous logic and avoid callbacks where possible.
- Wrap all async operations in try/catch blocks.
- Optimize for readability, scalability, and maintainability.
- Use modern ESNext syntax.
- Use functional components and hooks for state management in React code where applicable.
- Use `useCallback` and `useMemo` to optimize performance in React code where applicable.
- Use meaningful variable and function names that describe their purpose.

## Error Handling

- Return meaningful error messages.
- Validate inputs and schema using appropriate libraries (e.g., Zod, Fastify schema).

## Testing

- Include unit tests for all utilities and business logic.

## Reviews (additional rules)

- Highlight missing error boundaries or input validation.
- Suggest improved file structure if logic is too tightly coupled.