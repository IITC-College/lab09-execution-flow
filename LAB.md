# Lab: Execution Flow Control in GitHub Actions

## Goal

Build a multi-job CI workflow for a Node.js project that makes intelligent decisions based on what happened before — skipping work when it's unnecessary, continuing past non-critical failures, uploading evidence only when something breaks, and always running a final summary regardless of outcome. You'll practice `if:` conditions, GitHub's built-in condition functions (`success()`, `failure()`, `always()`), `continue-on-error`, `needs:` for job ordering, step outputs, and cache-based optimization.

## What you have

A Node.js calculator app with four scripts:

| Script | What it does |
|---|---|
| `npm run lint` | Runs ESLint on `src/` and `tests/` |
| `npm test` | Runs the main test suite — **these pass** |
| `npm run test:experimental` | Runs experimental tests — **these fail on purpose** |
| `npm run build` | Copies `src/` to `dist/` |

The experimental tests (`tests/experimental.test.js`) call functions not yet implemented in `src/calculator.js`. They are expected to fail — they simulate a feature branch that isn't ready. Your workflow must handle this failure gracefully rather than letting it stop the whole pipeline.

**Before starting:** run `npm install` locally and commit the generated `package-lock.json`. The workflow will need it.

## Acceptance criteria

The workflow you write must:

- [ ] **Trigger** on `push` to `main` and on `pull_request`
- [ ] **Cache `node_modules`** using `actions/cache@v4`, and skip `npm ci` if the cache already exists (use `steps.<cache-step-id>.outputs.cache-hit != 'true'` as the condition)
- [ ] **Run lint, test, and build as separate jobs** with `needs:` chaining: `test` waits for `lint`; `build` waits for `test`
- [ ] **Run the experimental tests** in the `test` job using `continue-on-error: true` so the job does not fail when they report errors
- [ ] **Upload a test artifact** (any file from the test run) only when the `test` job fails — use `if: failure()`
- [ ] **Run a `report` job** last, using `needs:` on all prior jobs and `if: always()`, that prints a one-line summary to the logs
- [ ] **All non-experimental steps must succeed** (lint clean, main tests pass, `dist/` produced by build)

## Hints

- The cache key should include something that changes when dependencies change, like a hash of `package-lock.json`. Look at the `hashFiles()` expression.
- For the `report` job to run even after a failure in an earlier job, you need **both** `needs:` (to establish ordering) **and** `if: always()` (to prevent automatic skipping). One without the other won't do it.
- `continue-on-error: true` on a step changes what GitHub reports as the job's conclusion — but the step's own `outcome` will still be `failure`. Those are different fields. You don't need to use them in this lab, but understanding the distinction is the point.

## Where the workflow goes

Create your workflow at `.github/workflows/ci.yml`.
