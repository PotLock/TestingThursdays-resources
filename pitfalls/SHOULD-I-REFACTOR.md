# Should I Refactor?

Refactor now when:

- architecture repeatedly causes bugs;
- basic changes are dangerously slow;
- security/data integrity is at risk;
- performance is actually blocking users;
- the team cannot safely understand/modify a critical area.

Defer when:

- code is merely ugly;
- the product is still changing rapidly;
- there is no user/operational impact;
- the founder wants a more fashionable architecture.

Prefer bounded improvements over rewrites unless evidence strongly supports a rewrite.
