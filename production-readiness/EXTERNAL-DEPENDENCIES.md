# External Dependency Readiness

Inventory services your product depends on.

For each ask:

- What if it is unavailable?
- What if it is slow?
- What if a webhook/event is delayed or duplicated?
- What if credentials expire?
- What if rate limits are reached?
- What if pricing changes?
- What if the account is suspended?
- What data leaves your system?
- Can the user recover gracefully?

Do not discover your dependency model only after production fails.
