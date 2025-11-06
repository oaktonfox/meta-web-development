## Quick context

This repository is a small collection of JavaScript learning exercises and demos (single-file examples) and a stray assembly file (`timesTwo.s`). There is no application server, framework, or build tooling. Key facts:

- Entry JS (`main`) is `arrow.js` (per `package.json`).
- Many files are standalone examples: `oop-example.js`, `click-handling.js`, `input-capture.js`, `spread.js`, etc.
- Some examples manipulate the DOM and are intended to be opened in a browser (e.g. `click-handling.js`, `input-capture.js`). Do not assume all files run under Node.
- The project currently lists `jest` as a devDependency but the `test` script is the default placeholder and no test files are present.

## What an AI coding agent should know

1. Run and verification

   - To run a Node-compatible example: `node <filename.js>` (for example `node arrow.js`).
   - For DOM-related files, open the file in a browser (or load via a minimal HTML wrapper). Examples: `click-handling.js`, `input-capture.js`.
   - Install dev dependencies before adding tests: `npm install` (this will install `jest` per `package.json`).

2. Project patterns & conventions

   - Files are small, self-contained, and not modularized with import/export. Prefer editing the single-file directly unless adding a new module or test harness.
   - Filenames may include spaces (e.g. `for-of lab.js`). Use shell escaping or rename files when adding tooling that assumes POSIX-friendly names.
   - Keep changes minimal and focused — these are learning snippets rather than production services.

3. Tests and CI

   - There are no existing test files. If you add tests, update `package.json` scripts (e.g., set `test` to `jest`) and include a simple test that runs fast. Don’t remove `jest` from devDependencies without confirming intent.

4. Editing & PR guidance

   - When adding or changing files, include a short description in your commit message (what the change does and why). This repo is educational — prefer clarifying comments and small examples.
   - Avoid global refactors across many example files unless asked — maintain the pedagogical structure.

5. Useful files to reference

   - `package.json` — project scripts and devDependencies (jest present but unused).
   - `arrow.js`, `oop-example.js`, `spread.js` — representative JS examples showing the repo style.
   - `timesTwo.s` — non-JS file (assembly); do not assume Node execution for this file.

## Example agent prompts (repo-aware)

- "Add a small Jest unit test for `arrow.js` (showing the main exported behavior) and update `package.json` test script to run jest. Ensure test runs under Node." 
- "Make `click-handling.js` runnable in a minimal HTML file and add instructions in a new `docs/` README describing how to open it in a browser."

If anything in this file is unclear or you'd like additional conventions (for example: branching, linting, or a test scaffold), tell me which area to expand and I will update this guidance.
