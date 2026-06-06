# example-app

A tiny demo app for [DiffSense](https://diffsense.app). Its end-to-end tests
live in a **separate** repo: [`diffsense-ai/example-e2e`](https://github.com/diffsense-ai/example-e2e).

`.diffsense.yml` links them. Open a PR that changes the login button's
`data-testid` or the post-login redirect route, and DiffSense flags exactly
which spec in `example-e2e` will break — on the PR, before CI runs.
