---
name: Hardening: ESLint 10 compatibility
about: Follow-up to move from ESLint 9 to 10 once compatible
title: "hardening: validate and migrate lint stack to ESLint 10"
labels: ["hardening", "tooling", "dependencies"]
assignees: []
---

## Context

In the porting baseline, `eslint@9.39.3` is pinned because ESLint 10 currently fails with:

`TypeError: scopeManager.addGlobals is not a function`

## Goal

Migrate to ESLint 10 without regressions.

## Acceptance Criteria

- [ ] `eslint@10.x` and `@eslint/js@10.x` installed
- [ ] `bun run lint` passes
- [ ] `bun run build` passes
- [ ] `bun audit` has no lint-stack related findings
- [ ] Migration documented in changelog/PR notes

## Validation Commands

```bash
bun run lint
bun run build
bun audit
```
