# Graph Report - Titan-Finance-  (2026-06-08)

## Corpus Check
- 103 files · ~43,175 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1052 nodes · 1564 edges · 85 communities (74 shown, 11 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 167 edges (avg confidence: 0.57)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4baffd9f`
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
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 80|Community 80]]

## God Nodes (most connected - your core abstractions)
1. `make_engine()` - 41 edges
2. `VirtualPortfolio` - 31 edges
3. `make_portfolio()` - 27 edges
4. `Strategy` - 25 edges
5. `RiskEngine` - 24 edges
6. `FeatureEngineer` - 23 edges
7. `make_validator()` - 18 edges
8. `make_portfolio()` - 18 edges
9. `DataProvider` - 17 edges
10. `buy_fill()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `TestChannelSubscriptionContract` --uses--> `PortfolioManager`  [INFERRED]
  tests/unit/test_execution_channel_contract.py → services/execution/core/manager.py
- `TestSimulateFillAcceptsExecutionRequests` --uses--> `PortfolioManager`  [INFERRED]
  tests/unit/test_execution_channel_contract.py → services/execution/core/manager.py
- `TestSimulateFillRejectsTradeSignals` --uses--> `PortfolioManager`  [INFERRED]
  tests/unit/test_execution_channel_contract.py → services/execution/core/manager.py
- `OrderValidator` --uses--> `VirtualPortfolio`  [INFERRED]
  tests/unit/test_order_validator.py → services/execution/core/portfolio.py
- `VirtualPortfolio` --uses--> `VirtualPortfolio`  [INFERRED]
  tests/unit/test_order_validator.py → services/execution/core/portfolio.py

## Import Cycles
- 1-file cycle: `services/gateway/providers/alpaca_provider.py -> services/gateway/providers/alpaca_provider.py`
- 1-file cycle: `services/gateway/providers/base.py -> services/gateway/providers/base.py`
- 1-file cycle: `services/gateway/providers/synthetic_provider.py -> services/gateway/providers/synthetic_provider.py`

## Communities (85 total, 11 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (20): ExecutionFilledEvent, ExecutionRequestEvent, MarketDataEvent, Any, TitanFlow Shared Event Schemas  Versioned dataclasses for cross-service message, Published to channel: execution_requests (by risk service after approval)., Published to channel: execution_filled (by execution service)., Attempt to validate *data* against *event_cls.from_dict()*.      On validation f (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (20): Record current equity for performance tracking., Calculates total equity (Cash + Market Value of Positions).         Note: Needs, Calculate market value of positions based on latest prices., Check if portfolio has enough cash for the trade., Updates portfolio state based on a trade execution.         Returns the realized, Represents an isolated portfolio for a specific strategy/model.     Tracks cash,, VirtualPortfolio, VirtualPortfolio (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (14): OrderValidator, OrderValidator, Returns True if order is accepted, False if rejected., Enforces risk limits on outgoing orders.     Acts as a pre-trade risk engine., VirtualPortfolio, VirtualPortfolio, make_portfolio(), make_validator() (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (31): dependencies, clsx, lucide-react, next, react, react-dom, recharts, redis (+23 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (17): FeatureEngineer, DataFrame, FeatureEngineer, Adds technical indicators to the DataFrame.         Expected input columns: ['op, Computes technical indicators and features for ML models using 'ta' library., DataFrame, make_engineer(), make_ohlcv() (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (15): Any, SMACrossover, Simple Moving Average Crossover Strategy.     BUY when Fast SMA > Slow SMA (Gold, SMACrossover, feed_ticks(), make_strategy(), Unit tests for services/signal/strategies/sma_crossover.py  SMACrossover emits B, Feed a list of prices and return the last signal (or None). (+7 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (15): TitanAlpacaConnector — BrokerageHandler layer that bridges Titan ML signals to l, Re-enable automated trading after manual review., Rollback to manual-approval mode.         Signals are logged but NOT auto-submit, Resume auto-execution after model performance recovers., True when no orders should be submitted (kill switch OR manual mode)., Return current Alpaca account state as a flat dict.         Used by the circuit-, Return current equity, or 0 on failure., Dynamic position sizing using Fixed-Fractional + Confidence scaling.          Fo (+7 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (13): TradeAuditLogger — Centralized MLOps audit trail for Titan Finance.  Every signa, Write to disk and publish to Redis., Record an inbound ML signal before any execution gate is applied.          Args:, Record a submitted order.  Called immediately after a successful         ``execu, Record a trade fill (paper or live).          Args:             fill_event:    D, Record a kill-switch activation.          Args:             trigger:      Human-, Record a rollback to manual-approval mode.          Args:             trigger:, Singleton audit logger.      Usage:         audit = TradeAuditLogger.get_instanc (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (13): RiskEngine — Core risk governance layer for Titan Finance.  Responsibilities:, Record the outcome of a closed trade.         Used to maintain the consecutive-l, Fixed-Fractional position sizing.             Units = floor( equity × risk_per_t, Pass a signal through the risk governance layer.          Returns False (and log, Log a single prediction outcome into the rolling performance window.          Ar, Return rolling directional accuracy, or None if insufficient data., Return annualised Sharpe ratio over the rolling window.         Assumes daily re, Evaluate rolling model metrics and activate manual approval mode         if Shar (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.14
Nodes (10): Returns the execution price including slippage., Simulates price slippage based on market volatility and order size., SlippageModel, SlippageModel, make_model(), Unit tests for services/execution/simulation/slippage.py  SlippageModel applies, TestBaseBps, TestMarketImpact (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (15): DrawdownState, INITIAL_FILTERS, InternalStatus, PortfolioModelPayload, PortfolioPayload, PriceEventPayload, RANGE_MS, ServerStatusPayload (+7 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (19): handle_tick(), main(), Callback for when a new tick is received., _run(), _load_and_validate_config(), main(), TitanFlow RiskGuardian — asynchronous risk monitoring service.  Subscribes to th, Load risk configuration from environment variables and validate ranges. (+11 more)

### Community 12 - "Community 12"
Cohesion: 0.15
Nodes (13): Simulates a trade execution for paper mode.     Expects an execution_requests pa, simulate_fill(), _execution_request(), simulate_fill must succeed for well-formed execution_requests payloads., Risk publishes 'buy'/'sell'; simulate_fill must normalise to uppercase., execution_requests may omit price; the current market price is used., Fill event must include all fields expected by dashboard and risk service., simulate_fill must return None for raw trade_signals payloads.      A raw signal (+5 more)

### Community 13 - "Community 13"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 14 - "Community 14"
Cohesion: 0.10
Nodes (19): 1. `dashboard/lib/utils.test.ts` (Vitest), 2. `tests/integration_test.py`, Executive Summary, Existing Tests, Highest-Priority Gaps, Infrastructure Gaps, No CI test execution for Python, No coverage reporting (+11 more)

### Community 15 - "Community 15"
Cohesion: 0.16
Nodes (5): make_engine(), Return a RiskEngine with sensible defaults, optionally overridden., TestCalculatePositionSize, TestKillSwitchConsecutiveLosses, TestKillSwitchDrawdown

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (17): 1. Roadmap Alignment, 2. Risk Control Integrity, 3. Signal Explainability, 4. Code Quality Standards, 5. Security Posture, 6. Operational Readiness, Audit Checklist Reference, Audit Finding (+9 more)

### Community 17 - "Community 17"
Cohesion: 0.12
Nodes (16): 1) Risk is currently bypassed by execution channel mismatch (**P0**), 2) No deterministic end-to-end integration test of the full pipeline (**P0**), 3) No schema contract shared across services (**P1**), 4) Ops readiness is partial (health/readiness, startup assertions) (**P1**), Current State (from codebase), Definition of “Working MVP” (exit checklist), Goal, MVP blockers (+8 more)

### Community 18 - "Community 18"
Cohesion: 0.21
Nodes (6): Position, Owns multiple virtual portfolios so many models can share one live data stream., In-memory portfolio ledger for one model., TradeFill, VirtualPortfolio, VirtualPortfolioManager

### Community 19 - "Community 19"
Cohesion: 0.17
Nodes (8): PositionalEncoding, Simplified Transformer for Time Series Forecasting (MVP for TFT).     Uses stand, TFTModel, Trains the Temporal Fusion Transformer on historical CSV data., train_tft(), Any, Temporal Fusion Transformer (TFT) Strategy.     Predicts next 5 bars relative pr, TFTStrategy

### Community 20 - "Community 20"
Cohesion: 0.23
Nodes (5): Any, Process a new tick/trade event.         Returns a Signal dictionary or None., Process a new OHLCV bar., Abstract Base Class for all quantitative strategies.     Enforces a standard int, Strategy

### Community 21 - "Community 21"
Cohesion: 0.18
Nodes (10): baseSnapshot, fetchDashboardSnapshot(), fetchPerformanceSeries(), jitter(), ranges, wait(), App(), formatCurrency() (+2 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (15): Branching and Commits, Coding Standards, Contributing to TitanFlow, Dashboard (`dashboard/`), Docker stack smoke check, Ground Rules, Prerequisites, Pull Request Expectations (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.14
Nodes (7): AlpacaExecutor, Fetch current account info (Equity, Buying Power)., Submit an order to Alpaca.         Args:             side: 'buy' or 'sell', Emergency EOD or Kill Switch Liquidation., Trains a LightGBM model on historical CSV data., train_lgbm(), ValueError

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (14): dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, name, private (+6 more)

### Community 25 - "Community 25"
Cohesion: 0.14
Nodes (7): Initialize SHAP Explainer.         Args:             model: PyTorch model (must, Generate SHAP values for a single prediction.         Args:             input_te, Extract the most influential features., XAIEngine, HybridModel, load_model(), test_signal_pipeline()

### Community 26 - "Community 26"
Cohesion: 0.14
Nodes (13): 1. Market Data Gateway (`services/gateway`), 2. Signal Engine (`services/signal`), 3. Risk Guardian (`services/risk`), 4. Trade Executor (`services/execution`), 5. Dashboard (`dashboard`), Core Services, Data Flow, Data Infrastructure (+5 more)

### Community 27 - "Community 27"
Cohesion: 0.21
Nodes (6): AttentionBlock, LSTMModel, Any, LSTMStrategy, Deep Learning Strategy using LSTM + Attention.     Predicts next bar direction b, LSTMs typically operate on Bars, not Ticks.         For this MVP we aggregate ti

### Community 28 - "Community 28"
Cohesion: 0.20
Nodes (8): DataProvider, Fetch historical bar data.                  Args:             symbol: Ticker sym, Get the latest snapshot price for a symbol., Abstract Base Class for Market Data Providers.     Enforces a standard interface, datetime, DataFrame, datetime, datetime

### Community 29 - "Community 29"
Cohesion: 0.23
Nodes (4): Feed a list of (correct, return) pairs into engine., _seed_predictions(), TestRollingAccuracy, TestRollingSharpe

### Community 30 - "Community 30"
Cohesion: 0.23
Nodes (7): ABC, Base interface for baseline contenders in the paper-trading arena., Return BUY/SELL decision or None when no action is needed., RSIMeanReversion, SMACrossover, Strategy, StrategyDecision

### Community 31 - "Community 31"
Cohesion: 0.15
Nodes (12): 1. Correction, 2. Warning, 3. Temporary Ban, 4. Permanent Ban, Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Guidelines (+4 more)

### Community 32 - "Community 32"
Cohesion: 0.15
Nodes (6): DatabaseManager, Initialize PostgreSQL and Redis connections., Close all connections., Send a tick to QuestDB via InfluxDB Line Protocol (UDP for speed).         Forma, Publish tick to Redis channel for real-time consumers., Fetch latest price from QuestDB (via PG Wire or REST, not implemented in v1 MVP

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (6): PortfolioManager, Map an outgoing order to a specific portfolio., Route fill event to correct portfolio.         fill_event must contain 'order_id, Return summary of all portfolios for dashboard., Orchestrates multiple VirtualPortfolio instances.     Routes execution fills to, VirtualPortfolio

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (4): MetricsGridProps, ModelLeaderboardProps, SortKey, LeaderboardRow

### Community 35 - "Community 35"
Cohesion: 0.17
Nodes (11): Dashboard `MODULE_NOT_FOUND` (socket.io/redis), Environment Setup, Execution Service "Unauthorized", Operations Guide, Redis Connection Refused, Requirements, Running the System, Start All Services (+3 more)

### Community 36 - "Community 36"
Cohesion: 0.17
Nodes (11): Architecture Vision, Core Components, Current State Analysis, Executive Summary, Implementation Roadmap, Phase 1: Foundation (Weeks 1-2), Phase 2: Multi-Model Engine (Weeks 3-4), Phase 3: Dashboard & Glass Box (Weeks 5-6) (+3 more)

### Community 37 - "Community 37"
Cohesion: 0.20
Nodes (7): AlpacaDataProvider, Fetch historical bars., Implementation of DataProvider using raw Websockets for streaming     and Alpaca, Connect and Authenticate., Subscribe to real-time trade updates., Any, DataFrame

### Community 38 - "Community 38"
Cohesion: 0.18
Nodes (4): Unit tests for services/risk/risk_engine.py  The RiskEngine is the financial saf, # NOTE: must use exact integer-representable values (e.g. 0.0) so that, TestResetKillSwitch, TestUpdateAccountState

### Community 39 - "Community 39"
Cohesion: 0.22
Nodes (9): app, buildRedisCandidates(), connectRedisWithFallback(), { createClient }, { createServer }, handle, next, { parse } (+1 more)

### Community 40 - "Community 40"
Cohesion: 0.20
Nodes (6): Generates synthetic market data using Geometric Brownian Motion (GBM).     Usefu, Start generating synthetic trades., Generate fake historical data., SyntheticDataProvider, Any, DataFrame

### Community 41 - "Community 41"
Cohesion: 0.20
Nodes (9): Current Status (February 2026), Immediate Next Milestones, Phase 1: Foundation Stabilization (Week 1-2), Phase 2: Arena Core (Week 3-4), Phase 3: Model Expansion (Week 5-6), Phase 4: Dashboard Intelligence (Week 7-8), Phase 5: Production Hardening (Week 9-10), TitanFlow Roadmap (+1 more)

### Community 42 - "Community 42"
Cohesion: 0.20
Nodes (4): Publish signal to Redis., Connect to QuestDB and Redis., Fetch latest OHLCV bars from QuestDB.          Uses a parameterised query ($1) t, SignalDB

### Community 43 - "Community 43"
Cohesion: 0.36
Nodes (6): GlobalFiltersProps, timeRanges, FilterState, ModelOption, SignalSide, TimeRange

### Community 44 - "Community 44"
Cohesion: 0.39
Nodes (6): dotClass(), formatLastUpdate(), Header(), HeaderProps, SystemStatus, cn()

### Community 45 - "Community 45"
Cohesion: 0.31
Nodes (5): FORECAST_COLORS, PriceChartProps, ForecastRecord, MarkerRecord, PriceRecord

### Community 46 - "Community 46"
Cohesion: 0.31
Nodes (5): Any, LightGBMStrategy, Process a real OHLCV bar from the Gateway., ML Strategy using LightGBM for classification (Up/Down).     Includes SHAP expla, Loads the pre-trained LightGBM model from disk.          If the weights file is

### Community 47 - "Community 47"
Cohesion: 0.28
Nodes (3): Assert subscribe() calls in both execution loops use the correct channels., Return argument strings from every pubsub.subscribe(...) call in fn., TestChannelSubscriptionContract

### Community 48 - "Community 48"
Cohesion: 0.25
Nodes (7): 1. Verify Signal Engine, 2. Verify Trade Log (End-to-End Flow), Integration Tests (Planned), Manual Verification Scripts, Overview, Testing Strategy, Unit Tests (Planned)

### Community 49 - "Community 49"
Cohesion: 0.25
Nodes (7): 1. Provision a Server, 2. Connect to the Server, 3. Run the Setup Script, 4. Launch Titan Finance, 5. Access the Dashboard, Optional: Set up a Domain Name and HTTPS, Titan Finance: VPS Deployment Guide

### Community 50 - "Community 50"
Cohesion: 0.39
Nodes (7): main(), publish_portfolios(), Publish leaderboard/portfolio summaries to Redis., Live execution loop — connects Titan ML signals to real Alpaca orders.      Flow, run_live_execution(), run_paper_execution(), PortfolioManager

### Community 51 - "Community 51"
Cohesion: 0.36
Nodes (4): Any, LogisticRegressionStrategy, Online-ish logistic regression using technical features for directional classifi, Strategy

### Community 53 - "Community 53"
Cohesion: 0.29
Nodes (6): 1) Close the risk-gating gap first (P0), 2) Add one deterministic end-to-end contract test (P0), 3) Introduce shared event schemas (P1), 4) Harden demo operations (P1), Immediate Next Actions, Suggested first ticket

### Community 54 - "Community 54"
Cohesion: 0.43
Nodes (3): Any, RandomForestStrategy, Adaptive random forest classifier over rolling market features.

### Community 55 - "Community 55"
Cohesion: 0.47
Nodes (4): getModelBadge(), TradeLog(), TradeLogProps, TradeRecord

### Community 56 - "Community 56"
Cohesion: 0.33
Nodes (5): Commands Executed, End-to-End User Testing Report, Goal, Recommended Next Steps (for a fully provisioned environment), Summary

### Community 57 - "Community 57"
Cohesion: 0.33
Nodes (5): Audit Team Checklist, Evidence, Operational Notes, Summary, Validation

### Community 58 - "Community 58"
Cohesion: 0.33
Nodes (5): Additional Context, Alternative Solutions, Description, Motivation, Proposed Solution

### Community 59 - "Community 59"
Cohesion: 0.33
Nodes (5): Branding Controls, Mock API Controls, Run, Titan Frontend Demo, What Was Added

### Community 60 - "Community 60"
Cohesion: 0.33
Nodes (3): LatencySimulator, Pause execution for a random, realistic duration (Lognormal)., Simulates network and processing delays to mimic real-world execution lag.

### Community 61 - "Community 61"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 62 - "Community 62"
Cohesion: 0.40
Nodes (3): Contract tests for the execution service's risk-gated channel wiring.  These tes, Mimics the payload the Signal service publishes to trade_signals.     Key differ, _trade_signal()

### Community 63 - "Community 63"
Cohesion: 0.40
Nodes (4): Local Setup, Production Build Verification, Scripts, TitanFlow Dashboard

### Community 66 - "Community 66"
Cohesion: 0.50
Nodes (3): Added, Changelog, [Unreleased]

### Community 67 - "Community 67"
Cohesion: 0.50
Nodes (3): Key Features, Overview, TitanFlow

### Community 68 - "Community 68"
Cohesion: 0.50
Nodes (3): Reporting a Vulnerability, Security Policy, Supported Versions

## Knowledge Gaps
- **237 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `RANGE_MS`, `INITIAL_FILTERS` (+232 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `PortfolioManager` connect `Community 50` to `Community 0`, `Community 33`, `Community 1`, `Community 2`, `Community 6`, `Community 7`, `Community 9`, `Community 12`, `Community 60`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Why does `run_signal_engine()` connect `Community 11` to `Community 0`, `Community 46`, `Community 51`, `Community 20`, `Community 19`, `Community 54`, `Community 27`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Why does `main()` connect `Community 11` to `Community 8`, `Community 0`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Are the 21 inferred relationships involving `VirtualPortfolio` (e.g. with `PortfolioManager` and `OrderValidator`) actually correct?**
  _`VirtualPortfolio` has 21 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `Strategy` (e.g. with `Any` and `Any`) actually correct?**
  _`Strategy` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 11 inferred relationships involving `RiskEngine` (e.g. with `main()` and `make_engine()`) actually correct?**
  _`RiskEngine` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _377 weakly-connected nodes found - possible documentation gaps or missing edges._