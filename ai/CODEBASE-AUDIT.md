# Codebase Audit Prompt

```text
Audit this repository without modifying files.

Identify the complete path for the primary user journey and find likely launch risks including:
- runtime failures;
- unhandled errors;
- placeholder/mock behavior;
- TODO/FIXME items on core flows;
- hardcoded environment assumptions;
- frontend/backend mismatches;
- missing loading/error/recovery states;
- exposed secrets or insecure client/server boundaries;
- missing observability around consequential actions;
- critical test gaps.

Rank findings:
P0 — safety/security/data/money critical
P1 — blocks core launch flow
P2 — materially harms activation/reliability
P3 — polish/debt

For every finding, cite concrete file/function evidence and explain why it matters before proposing a change.
```
