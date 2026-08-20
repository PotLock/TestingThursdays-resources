# Production Configuration Audit

Search code/config before release for suspicious values such as:

```text
localhost
127.0.0.1
staging
sandbox
test_
TODO
FIXME
example.com
debug=true
```

Also verify:

- production API host;
- bundle/package identity;
- analytics environment;
- error-monitoring environment;
- payment environment;
- callback/webhook endpoints;
- feature flags;
- debug menus;
- secrets/key boundaries.

Not every match is a bug; review intentionally.
