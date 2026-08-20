# Full Production Readiness

Assess each area separately:

- core functionality;
- reliability;
- security;
- data integrity;
- observability;
- performance;
- accessibility;
- payments/billing where applicable;
- privacy/compliance where applicable;
- analytics;
- support;
- release/rollback;
- external dependencies;
- incident response.

## Suggested interpretation

- **GREEN:** reasonable for intended exposure.
- **YELLOW:** controlled launch with explicit guardrails.
- **ORANGE:** internal/invite-only while named issues are addressed.
- **RED:** do not expose users to the affected journey.

Higher-risk categories require stricter specialist review. A numerical score should never override a known critical issue.
