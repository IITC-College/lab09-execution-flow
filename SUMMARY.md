# Lab Summary: execution-flow

## Lab Details

- **Topic:** Execution Flow Control in GitHub Actions
- **Stack:** Node.js (npm)
- **Acceptance criteria:** 7
- **Attempts to pass verification:** 1

## Acceptance Criteria Results

| # | Criterion | Result |
|---|---|---|
| 1 | Trigger on push to main and pull_request | ✓ Confirmed — triggered via pull_request event |
| 2 | Cache node_modules; skip npm ci on cache hit | ✓ Confirmed — Install dependencies skipped in Test + Build jobs |
| 3 | Separate lint/test/build jobs chained with needs: | ✓ Confirmed — lint → test → build sequential execution |
| 4 | Experimental tests run with continue-on-error: true | ✓ Confirmed — 3 tests failed (unimplemented functions), job still ✓ |
| 5 | Artifact uploaded only on failure (if: failure()) | ✓ Confirmed — upload step correctly skipped when no non-optional failure |
| 6 | report job with needs: [lint, test, build] and if: always() | ✓ Confirmed — ran last, printed summary line |
| 7 | All non-experimental steps succeed | ✓ Confirmed — lint clean, main tests pass, dist/calculator.js produced |

## Verification Run

- **Repo:** lirone-iitc/lab09-execution-flow
- **Branch:** verify/execution-flow-1778146858
- **Run URL:** https://github.com/lirone-iitc/lab09-execution-flow/actions/runs/25488206238
- **Conclusion:** success
- **Date:** 2026-05-07

## Convention Check

- ✓ All actions pinned to major version tags (@v4)
- ✓ Top-level `name:` present
- ✓ All jobs have `name:` fields
- ✓ All steps have `name:` fields
- ✓ No explanatory comments in YAML
- ✓ `runs-on: ubuntu-latest` on all jobs
- ✓ Triggers match lab requirements

**Infrastructure note:** GitHub warns that actions/checkout@v4, setup-node@v4, and cache@v4 internally use Node.js 20 (scheduled for removal September 2026). The @v4 pin is correct — action maintainers will ship compatible versions before the deadline. No action required now.

## Retry History

None — passed on first attempt.

## Files

### Ships to students
- `LAB.md` — lab brief with goal, criteria, hints
- `package.json` — npm scripts: lint, test, test:experimental, build
- `package-lock.json` — committed lockfile for npm ci
- `src/calculator.js` — add/subtract/multiply/divide functions
- `tests/calculator.test.js` — 6 passing tests
- `tests/experimental.test.js` — 3 failing tests (unimplemented functions; intentional)
- `scripts/build.js` — copies src/ to dist/
- `.eslintrc.json` — ESLint config (no-unused-vars: warn)
- `.gitignore`

### Instructor only (not in student repo)
- `_solution/ci.yml` — reference workflow (gitignored, not pushed)
- `SUMMARY.md` — this file

## Instructor Notes

_Space for your notes here._
