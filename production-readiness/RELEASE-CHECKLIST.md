# Release Checklist

## Before

- [ ] critical automated tests pass;
- [ ] product-specific smoke tests pass;
- [ ] no unresolved known P0/P1 in affected journey;
- [ ] environment/config verified;
- [ ] migrations verified if applicable;
- [ ] analytics/error monitoring verified;
- [ ] feature flags configured if used;
- [ ] rollback understood.

## Release

- [ ] deploy;
- [ ] run smoke tests;
- [ ] check logs/errors;
- [ ] verify analytics events;
- [ ] verify core journey.

## After

- [ ] monitor first real sessions/requests;
- [ ] review support;
- [ ] verify payment/revenue events where relevant;
- [ ] create regression tests for issues found;
- [ ] document decision/result.
