---
id: 002
title: process-not-defined
stage: general
date: 2026-04-18
surface: agent
model: Raptor mini (Preview)
feature: none
branch: unknown
user: user
command: respond
labels: [bugfix,react,environment]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - website/src/pages/contact.tsx
tests:

---

## Prompt

localhost give me this error solve it please   Uncaught runtime errors:
×
ERROR
process is not defined
ReferenceError: process is not defined
    at eval (webpack-internal:///./src/pages/contact.tsx:9:17)
    at ./src/pages/contact.tsx (http://localhost:3000/__comp---site-src-pages-contact-tsx-8-b-3-cf6.js:15:1)
    at __webpack_require__ (http://localhost:3000/runtime~main.js:34:32)
    at fn (http://localhost:3000/runtime~main.js:321:21)

## Response snapshot

Fixed the browser runtime error in `website/src/pages/contact.tsx` by replacing the direct `process.env` reference with a runtime-safe environment lookup that checks `typeof process !== 'undefined'` first. This prevents `ReferenceError: process is not defined` in localhost development.

## Outcome

- ✅ Impact: Resolved client-side runtime error in the contact page.
- 🧪 Tests: validated no errors in updated file.
- 📁 Files: website/src/pages/contact.tsx
- 🔁 Next prompts: Confirm whether environment variable injection is configured correctly for your build.
- 🧠 Reflection: Browser bundles cannot assume Node globals like `process` exist at runtime.

## Evaluation notes (flywheel)

- Failure modes observed: direct `process.env` access in browser code.
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): If using Docusaurus Vite, switch to `import.meta.env` only for environment vars.
