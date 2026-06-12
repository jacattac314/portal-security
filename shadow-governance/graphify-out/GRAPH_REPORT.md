# Graph Report - shadow-governance  (2026-06-08)

## Corpus Check
- 6 files · ~1,809 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 39 nodes · 52 edges · 5 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbb82980`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]

## God Nodes (most connected - your core abstractions)
1. `handleLLMCall()` - 5 edges
2. `scripts` - 4 edges
3. `createExperiment()` - 3 edges
4. `pickVariant()` - 3 edges
5. `recordVariantResult()` - 3 edges
6. `seedDefaultExperiments()` - 3 edges
7. `sanitizeMessages()` - 3 edges
8. `store` - 3 edges
9. `getExperiments()` - 2 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- `handleLLMCall()` --calls--> `pickVariant()`  [EXTRACTED]
  src/proxy.ts → src/eval.ts
- `handleLLMCall()` --calls--> `recordVariantResult()`  [EXTRACTED]
  src/proxy.ts → src/eval.ts
- `handleLLMCall()` --calls--> `sanitizeMessages()`  [EXTRACTED]
  src/proxy.ts → src/pii.ts

## Import Cycles
- None detected.

## Communities (5 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (8): createExperiment(), EvalExperiment, EvalVariant, experiments, getExperiments(), seedDefaultExperiments(), app, PORT

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (7): pickVariant(), recordVariantResult(), PII_PATTERNS, sanitizeMessages(), SanitizeResult, handleLLMCall(), ProxyRequest

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (8): dependencies, hono, description, devDependencies, @types/bun, name, type, version

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (5): AgentQuota, CallRecord, calls, quotas, store

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): scripts, build, dev, start

## Knowledge Gaps
- **21 isolated node(s):** `name`, `version`, `description`, `type`, `dev` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._