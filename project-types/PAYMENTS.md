# Payments Product Test Pack

Payments and money movement require higher risk controls and qualified review where appropriate.

## Priority order

1. correct authorized money movement;
2. no duplicate transactions;
3. correct recipient/account;
4. correct amount/currency;
5. accurate status;
6. authentication/authorization;
7. reconciliation;
8. failure/retry handling;
9. clear fees/timing;
10. trust/usability.

## Test in safe sandbox/test environments where possible

- happy path;
- invalid/zero/limit amounts;
- duplicate tap/request;
- network interruption;
- timeout;
- delayed/duplicated webhook;
- failed provider call;
- app/browser closed mid-flow;
- retry;
- status/history consistency;
- reversal/refund where supported;
- expired session;
- incorrect permissions;
- receipt/confirmation accuracy.

## Human questions

- Was the amount obvious?
- Were fees/timing clear?
- Did you know whether money had moved?
- What made you hesitate?
- What would you need to trust the product with a larger amount?

Do not use a casual peer test as a substitute for appropriate financial, security, legal, or compliance review.
