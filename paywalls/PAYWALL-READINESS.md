# Paywall Readiness

A paywall is a product journey, not just a screen.

## User comprehension

Can the user explain:

- what is free;
- what becomes paid;
- the amount;
- the billing period;
- when charging starts;
- what happens after trial;
- how access/cancellation works.

## State testing

Test where relevant:

- free → paid;
- trial → paid;
- trial expiration;
- purchase failure;
- renewal;
- cancellation;
- resubscribe;
- restore purchase;
- reinstall / second device;
- offline entitlement check;
- store/provider outage.

## Analytics

Consider events such as:

```text
paywall_viewed
plan_selected
purchase_started
purchase_success
purchase_failed
restore_started
restore_success
trial_started
trial_converted
subscription_cancelled
```

Do not add sophisticated paywall optimization before users reliably reach core value.
