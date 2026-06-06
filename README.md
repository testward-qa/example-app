# example-app

A tiny demo app for [Testward](https://testward.app). Its end-to-end tests
live in a **separate** repo: [`diffsense-ai/example-e2e`](https://github.com/diffsense-ai/example-e2e).

`.testward.yml` links them. Open a PR that changes the login button's
`data-testid` or the post-login redirect route, and Testward flags exactly
which spec in `example-e2e` will break — on the PR, before CI runs.
