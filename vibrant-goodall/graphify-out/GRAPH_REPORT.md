# Graph Report - vibrant-goodall  (2026-06-09)

## Corpus Check
- 9 files · ~23,259 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 128 nodes · 242 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `55dd6d2e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `AppController` - 39 edges
2. `MLStripper` - 12 edges
3. `route_task()` - 11 edges
4. `api_ecc_dispatch()` - 10 edges
5. `AgentExecutePayload` - 9 edges
6. `Request` - 9 edges
7. `NotionPRDGenerate` - 8 edges
8. `SlackWebhookTrigger` - 8 edges
9. `JiraTicketCreate` - 8 edges
10. `GmailNotificationSend` - 8 edges

## Surprising Connections (you probably didn't know these)
- `AgentExecutePayload` --uses--> `AgentExecutePayload`  [INFERRED]
  middleware.py → schemas.py
- `Request` --uses--> `AgentExecutePayload`  [INFERRED]
  server.py → schemas.py
- `MLStripper` --uses--> `AgentExecutePayload`  [INFERRED]
  server.py → schemas.py
- `AgentExecutePayload` --uses--> `AgentExecutePayload`  [INFERRED]
  server.py → schemas.py
- `api_ecc_dispatch()` --calls--> `execute_slack_action()`  [EXTRACTED]
  server.py → middleware.py

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (11): api_ecc_status(), api_eval_annotations(), api_eval_run(), api_fetch(), api_search(), Returns runtime telemetry for the M4 Sandbox Environment., Queries Arize Phoenix locally on port 6006, parses logged annotations, and compu, run_eval_background() (+3 more)

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (17): Any, classify_intent_heuristics(), classify_intent_llm(), execute_browser_fallback(), execute_jira_action(), execute_notion_action(), execute_slack_action(), AgentExecutePayload (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (19): BaseModel, HTMLParser, Request, AgentExecuteResponse, api_chat_completions(), api_ecc_dispatch(), api_webhook_execute(), MLStripper (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (11): 1. Launch Ollama Locally, 2. Configure the local CLI Configuration (`~/.hermes/config.yaml`), 3. Enter Configurations in the Web Settings Modal, 4. Enable Live Mode & Real Browser Action, Key Features, Local Hermes (Ollama + Qwen3) with OpenAI Fallback - Client, Proxy & Browser Controller, 🏗️ Premium Architecture & Components, Quick Start Guide (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.60
Nodes (4): extract_context(), get_installed_ollama_models(), main(), Hits the local Ollama API to find active pulled models as fallbacks.

### Community 9 - "Community 9"
Cohesion: 0.47
Nodes (5): check_requirements(), get_repositories(), main(), Fetch all repositories for the user via gh CLI., Verify that gh CLI and graphify command are available.

## Knowledge Gaps
- **8 isolated node(s):** `🏗️ Premium Architecture & Components`, `Key Features`, `Step 1: Launch the Proxy Server`, `Step 2: Try Simulation Mode (Out-of-the-Box)`, `1. Launch Ollama Locally` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppController` connect `Community 5` to `Community 3`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Why does `route_task()` connect `Community 1` to `Community 0`, `Community 2`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `MLStripper` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `MLStripper` (e.g. with `AgentExecutePayload` and `AgentExecuteResponse`) actually correct?**
  _`MLStripper` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `AgentExecutePayload` (e.g. with `Any` and `AgentExecutePayload`) actually correct?**
  _`AgentExecutePayload` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Hits the local Ollama API to find active pulled models as fallbacks.`, `Verify that gh CLI and graphify command are available.`, `Fetch all repositories for the user via gh CLI.` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10822510822510822 - nodes in this community are weakly interconnected._