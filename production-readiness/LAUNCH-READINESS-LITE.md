# Launch Readiness Lite

Use for a small controlled beta of a standard low-to-moderate-risk product.

## Core value

- [ ] core journey works end-to-end;
- [ ] empty/loading/error states are understandable;
- [ ] known P0/P1 issues are resolved or exposure is blocked.

## Production basics

- [ ] production endpoint/config verified;
- [ ] secrets are not exposed in client/repository;
- [ ] basic error monitoring exists;
- [ ] critical analytics event exists;
- [ ] support/contact path exists;
- [ ] rollback/recovery path is understood.

## Test audience

- [ ] target audience is intentionally limited;
- [ ] founder knows how to contact testers;
- [ ] test users know the product is early if appropriate;
- [ ] sensitive/real production data is not used unnecessarily.

## Decision

GREEN — controlled beta reasonable.

YELLOW — reduce audience or fix named risks first.

RED — unresolved critical safety/security/data-integrity/core-flow issue.
