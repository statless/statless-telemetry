# @statless/telemetry SDK

Zero-dependency, privacy-first usage telemetry for developer CLIs and npm packages.
Under 2KB gzipped, no runtime dependencies, non-blocking, and silent on failure.

```bash
npm install @statless/telemetry
```

```ts
import { configure, track } from "@statless/telemetry";

// Configure your collector endpoint and token (or set
// STATLESS_TELEMETRY_URL / STATLESS_TELEMETRY_TOKEN)
configure({ endpoint: "https://telemetry.example.com/v1/telemetry/ping", token: "shared-secret" });

const started = Date.now();
// ... run the command ...
void track({
  package: "mytool",
  version: "1.2.3", // read from your package.json
  command: "build",
  durationMs: Date.now() - started,
});
```

By default, telemetry remains dormant until an endpoint is explicitly configured with
`configure({ endpoint })`, `track({ endpoint })`, or the `STATLESS_TELEMETRY_URL`
environment variable. A private collector that sets `INGEST_TOKEN` is supported with
`configure({ token })` or `STATLESS_TELEMETRY_TOKEN`; a configured token wins, and the
environment variable is read at call time so it remains the fallback.

## Privacy & Legal Compliance

- **No surprise egress:** If unconfigured, `track()` immediately resolves without making any network requests.
- **Opt-out support:** No request is ever made when `DO_NOT_TRACK=1` or `STATLESS_OPTOUT=1` is set, or when `configure({ enabled: false })` is called. You can inspect opt-out status with `isOptedOut()` and active status with `isTelemetryActive()`.
- **Data minimization:** The payload contains only the package name, version, subcommand, duration, Node major version, OS platform, and a CI flag—never paths, arguments, environment variables, or command output.
- **Fail-safe transport:** Requests are capped at 500ms with `AbortSignal.timeout` and fail silently.

### Notice & Consent Guidance for CLI Authors

- **ePrivacy Directive Art. 5(3) (EU/UK/Germany):** Querying terminal equipment properties (such as Node version and OS platform) for non-essential telemetry generally requires user notice or consent in European jurisdictions. Consider displaying a first-run notice or prompting the user before turning telemetry on.
- **GDPR Transparency (Art. 13):** Inform users in your CLI documentation or terminal banner that usage metrics are collected, state your purpose and legal basis, and document how they can opt out (`DO_NOT_TRACK=1`).
- **Data Processor Agreements (Art. 28):** When self-hosting the collector, you control the data. If pointing to a hosted or third-party endpoint, ensure you have an appropriate Data Processing Agreement in place.

See the [repository README](https://github.com/statless/statless-telemetry#readme)
for Commander.js and Yargs integrations.

## License

MIT
