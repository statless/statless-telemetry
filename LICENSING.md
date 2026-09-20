# Licensing

This repository is **not** single-licensed. The license that applies depends on
where a file lives. GitHub and SPDX tooling read the root `LICENSE` and will
report the repository as **AGPL-3.0-or-later**; that is intentional. The
collector service is AGPL, and only the published client SDK is MIT.

| Path | What it is | License | SPDX |
| --- | --- | --- | --- |
| `packages/sdk/` | `@statless/telemetry` npm package | MIT | `MIT` |
| `collector/` | FastAPI ingest + storage service | GNU AGPL v3 or later | `AGPL-3.0-or-later` |
| repo root, `.github/`, docs, everything else | project scaffolding and infrastructure | GNU AGPL v3 or later | `AGPL-3.0-or-later` |

Full texts: [`LICENSE`](LICENSE) (repo root, AGPLv3),
[`collector/LICENSE`](collector/LICENSE) (the identical copy packaged into the
collector wheel/sdist), and [`packages/sdk/LICENSE`](packages/sdk/LICENSE)
(MIT).

## Why the split

The SDK is meant to be dropped into any CLI, including closed-source and
commercial tools, so it stays permissive. The collector is a network service:
AGPL ensures that anyone who modifies and hosts it offers their changes back to
the community.

## What this means when you consume it

- **Using the SDK** in your own project: MIT. Keep the copyright notice and you
  are done.
- **Self-hosting the collector** unmodified: AGPL. No source-disclosure
  obligation, because you are neither distributing nor modifying it.
- **Modifying and network-hosting the collector**: AGPL §13 requires you to
  offer the modified source to your users.

If you need the collector under different terms, contact the copyright holder.
