# Rollback Readiness

Know before release:

- what constitutes rollback-worthy impact;
- how to return to the previous stable version;
- whether database/schema changes are backwards compatible;
- what user actions may be in-flight;
- who decides;
- how users/support will be informed.

Example rollback triggers include critical auth breakage, inconsistent money/data state, severe crash increase, or inability to complete the primary journey.
