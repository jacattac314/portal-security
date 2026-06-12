---
name: portal-security-build
description: Build, refresh, verify, serve, or deploy the jacattac314/portal-security dashboard with all configured Graphify graph artifacts included. Use when Codex works on Portal Security builds, graph/report availability, repository additions, dashboard launch, deployment, CI, or missing graphify-out files.
---

# Portal Security Build

Use the repository-enforced build. Do not serve `index.html` or `portal.html` directly after changing the portal or its Graphify inputs.

## Workflow

1. Locate the `portal-security` checkout.
2. Update `graphify-artifacts.json` when adding or removing a repository.
3. Generate or refresh source graphs:

```bash
uvx --from graphifyy graphify update /path/to/source-repository
```

4. Run the bundled wrapper:

```bash
scripts/build_portal.sh /path/to/portal-security
```

5. Serve or deploy only the generated `dist/` directory.
6. Verify one graph view, one structure report, Security Governance, and a DLP scenario in a browser.

The build must fail when a configured repository lacks `graph.html`, `graph.json`, or `GRAPH_REPORT.md`. Do not bypass `npm run build` by copying only the HTML entry points.
