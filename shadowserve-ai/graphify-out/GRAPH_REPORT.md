# Graph Report - shadowserve-ai  (2026-06-08)

## Corpus Check
- 25 files · ~7,321 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 175 nodes · 298 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 78% EXTRACTED · 22% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `927473ed`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `CanaryRouter` - 24 edges
2. `ModelClient` - 21 edges
3. `InferenceRequest` - 20 edges
4. `ModelPrediction` - 20 edges
5. `ShadowRouter` - 19 edges
6. `InferenceResponse` - 12 edges
7. `TestCanaryRouter` - 10 edges
8. `FastAPI` - 9 edges
9. `CanaryConfig` - 9 edges
10. `Request` - 8 edges

## Surprising Connections (you probably didn't know these)
- `TestCanaryRouter` --uses--> `InferenceRequest`  [INFERRED]
  tests/test_routing.py → shadowserve/models/schemas.py
- `TestShadowRouter` --uses--> `InferenceRequest`  [INFERRED]
  tests/test_routing.py → shadowserve/models/schemas.py
- `TestCanaryRouter` --uses--> `ModelPrediction`  [INFERRED]
  tests/test_routing.py → shadowserve/models/schemas.py
- `TestShadowRouter` --uses--> `ModelPrediction`  [INFERRED]
  tests/test_routing.py → shadowserve/models/schemas.py
- `TestShadowRouter` --uses--> `CanaryRouter`  [INFERRED]
  tests/test_routing.py → shadowserve/routing/canary.py

## Import Cycles
- 1-file cycle: `shadowserve/audit/ledger.py -> shadowserve/audit/ledger.py`
- 1-file cycle: `shadowserve/main.py -> shadowserve/main.py`
- 1-file cycle: `shadowserve/serving/mock_models.py -> shadowserve/serving/mock_models.py`

## Communities (19 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.16
Nodes (22): Any, BaseModel, CanaryConfig, InferenceResponse, AuditEntry, CanaryConfig, DriftReport, HealthResponse (+14 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (15): BaseSettings, Dashboard API routes — serves the control plane UI and JSON data feeds., _compute_kl_divergence(), _compute_psi(), DriftState, get_state(), _maybe_evaluate(), Statistical drift detection between production and challenger prediction distrib (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (9): AuditRecord, Base, Immutable audit ledger — every inference is written once and never updated.  Use, write_entry(), datetime, DeclarativeBase, Tests for the in-memory audit ledger fallback., Ledger exposes no update/delete — only write and read. (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (12): metrics_output(), Prometheus metrics registry for ShadowServe., get_canary(), health(), infer(), _on_shadow_result(), prometheus_metrics(), ShadowServe AI — main FastAPI application. (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (15): 1. Shadow Deployment, 2. Drift Detection & Auto-Rollback, 3. Live Canary Weight Adjustment, API Reference, Architecture, Audit lookup, Compliance Alignment, Demo Scenarios (+7 more)

### Community 5 - "Community 5"
Cohesion: 0.24
Nodes (5): CanaryRouter, Routes a configurable fraction of traffic to the challenger model.     The remai, _mock_client(), Tests for canary and shadow routing logic., TestCanaryRouter

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (12): _gbm_score(), _logistic_score(), make_challenger_app(), make_production_app(), _normalize(), PredictRequest, Mock FastAPI servers simulating production (v1.2.0) and challenger (v1.3.0) mode, Challenger scorer — slightly more aggressive on DTI and derogatory marks. (+4 more)

### Community 7 - "Community 7"
Cohesion: 0.29
Nodes (6): Forks every request to the challenger model asynchronously.     The caller recei, Fire-and-forget shadow inference. Schedules a background task., ShadowRouter, lifespan(), InferenceRequest, TestShadowRouter

### Community 9 - "Community 9"
Cohesion: 0.53
Nodes (5): AsyncClient, main(), random_credit_features(), _run(), send_request()

### Community 10 - "Community 10"
Cohesion: 0.60
Nodes (4): anomaly_credit_features(), main(), High-risk profile cluster — shifts score distribution significantly., _run()

## Knowledge Gaps
- **13 isolated node(s):** `Config`, `ndarray`, `Features`, `Local (no Docker)`, `Docker Compose (full stack)` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `PredictRequest` connect `Community 6` to `Community 0`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `CanaryRouter` connect `Community 5` to `Community 0`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `ShadowRouter` connect `Community 7` to `Community 0`, `Community 3`, `Community 5`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `CanaryRouter` (e.g. with `CanaryConfig` and `Request`) actually correct?**
  _`CanaryRouter` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `ModelClient` (e.g. with `CanaryConfig` and `InferenceResponse`) actually correct?**
  _`ModelClient` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 14 inferred relationships involving `InferenceRequest` (e.g. with `CanaryConfig` and `InferenceResponse`) actually correct?**
  _`InferenceRequest` has 14 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `ModelPrediction` (e.g. with `Any` and `InferenceResponse`) actually correct?**
  _`ModelPrediction` has 13 INFERRED edges - model-reasoned connections that need verification._