# AI Coding Work Packet

Before asking a coding agent to implement something, provide:

```text
OBJECTIVE
NON-GOALS
USER IMPACT
RELEVANT FILES / AREAS
CONSTRAINTS
DO-NOT-TOUCH AREAS
ACCEPTANCE CRITERIA
TEST REQUIREMENTS
RISK LEVEL
EXPECTED VERIFICATION OUTPUT
```

## Workflow

1. Ask the agent to investigate first.
2. Review its plan.
3. Keep the change bounded.
4. Inspect the diff.
5. Run deterministic tests.
6. Run the user journey.
7. Verify logs/analytics where relevant.
8. Have a human review high-risk changes.

AI should reduce cycle time, not increase uncontrolled scope.
