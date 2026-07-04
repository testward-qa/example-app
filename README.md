# example-app

A tiny demo app for [Testward](https://testward.app). Its end-to-end tests
live in a **separate** repo: [`testward-qa/example-e2e`](https://github.com/testward-qa/example-e2e).

`.testward.yml` links them. Open a PR that changes the login button's
`data-testid` or the post-login redirect route, and Testward flags exactly
which spec in `example-e2e` will break — on the PR, before CI runs.

## 🎬 60-second demo

[![Watch the Testward demo](https://testward.app/demo-poster.jpg)](https://testward.app/#video)

**[▶ Watch how a PR in this repo breaks a spec in example-e2e — and gets caught](https://testward.app/#video)**
