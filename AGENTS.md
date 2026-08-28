# Repository conventions

## Formatting

- Prettier is the source of truth for mechanical formatting. Do not manually
  align code against its output.
- Keep JSX elements on one line when they remain comfortably readable within
  the configured print width.
- Configuration-heavy components should expand naturally, with one prop per
  line and the self-closing bracket on its own line.
- Prefer decimal literals with a leading zero, such as `0.7` rather than `.7`.
- Run `npm run format` after editing supported source files.
- Run `npm run check` before considering an implementation complete.

## Linting

- ESLint is responsible for correctness and code-quality rules, not formatting.
- Keep `eslint-config-prettier` last in the ESLint configuration so stylistic
  rules cannot conflict with Prettier.
- Do not disable lint rules merely to make a check pass. Resolve the underlying
  issue unless the exception is documented and intentional.
