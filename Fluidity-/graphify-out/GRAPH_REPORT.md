# Graph Report - Fluidity-  (2026-06-08)

## Corpus Check
- 68 files · ~19,953 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 427 nodes · 790 edges · 24 communities (22 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

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

## God Nodes (most connected - your core abstractions)
1. `Feature` - 38 edges
2. `useAppStore` - 22 edges
3. `SignalEvent` - 22 edges
4. `compilerOptions` - 20 edges
5. `compilerOptions` - 18 edges
6. `AppState` - 16 edges
7. `Risk` - 16 edges
8. `DriftEvent` - 15 edges
9. `ConfidenceScore` - 15 edges
10. `Milestone` - 13 edges

## Surprising Connections (you probably didn't know these)
- `ProposedChange` --references--> `Feature`  [EXTRACTED]
  src/components/AIReplanner.tsx → src/types/index.ts
- `AlertBannerProps` --references--> `DriftEvent`  [EXTRACTED]
  src/components/AlertBanner.tsx → src/types/index.ts
- `RiskPanelProps` --references--> `Risk`  [EXTRACTED]
  src/components/RiskPanel.tsx → src/types/index.ts
- `AIReplanner()` --calls--> `useAppStore`  [EXTRACTED]
  src/components/AIReplanner.tsx → src/store/index.ts
- `CanvasArea()` --calls--> `useAppStore`  [EXTRACTED]
  src/components/CanvasArea.tsx → src/store/index.ts

## Import Cycles
- None detected.

## Communities (24 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (35): AIProvider, AnalysisViewProps, SUB_TABS, SubView, CellBar(), ConfidencePanel(), ConfidencePanelProps, shieldLevel() (+27 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (40): dependencies, @anthropic-ai/sdk, html2canvas, idb-keyval, jspdf, lucide-react, mermaid, openai (+32 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (35): applyScenario(), scenarioNameByType, shiftDate(), baseFeatures, ComparisonResult, ConfidenceFactors, ConfidenceFactorsSchema, ConfidenceScoreSchema (+27 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (21): SignalFeedProps, SOURCE_ICON, SourceFilter, clampToUnit(), classifySeverity(), computeCompositeScore(), defaultDriftConfig, detectDrift() (+13 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (15): AnalysisView(), CanvasArea(), tabs, DriftDashboard(), FilterSeverity, severityOrder, SortKey, ExecutiveOverview() (+7 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (11): callAnthropicModel(), callGeminiModel(), GeminiCandidate, GeminiRequest, GeminiResponse, callOpenAIModel(), AnthropicProvider, createAIProvider() (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (14): GitHubAdapter, MockGitHubAdapter, JiraAdapter, MockJiraAdapter, quarters, sampleFeatures, sampleMilestones, sampleProject (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+13 more)

### Community 8 - "Community 8"
Cohesion: 0.19
Nodes (16): clamp(), GanttChart(), ScrollMetrics, buildGanttSyntax(), BuildGanttSyntaxOptions, buildSafeTaskIdByFeatureId(), buildTaskLine(), durationDays() (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+11 more)

### Community 10 - "Community 10"
Cohesion: 0.16
Nodes (10): Alert, AlertBanner(), AlertBannerProps, Shell(), ShellProps, Theme, ThemeToggle(), downloadMarkdown() (+2 more)

### Community 11 - "Community 11"
Cohesion: 0.14
Nodes (11): StorageService, mocks, AnalysisSubView, CanvasTab, ChatMessage, createFeatureId(), createNewFeature(), defaultDagStatus (+3 more)

### Community 12 - "Community 12"
Cohesion: 0.17
Nodes (11): AIReplanner(), Message, ProposedChange, ChatPanel(), QUICK_ACTIONS, DataInput(), Message, useKeyboardShortcuts() (+3 more)

### Community 13 - "Community 13"
Cohesion: 0.20
Nodes (11): nodeLabels, nodes, PipelineStatusBar(), PipelineStatusBarProps, statusSymbol, nodeLabels, nodes, statusLabels (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.19
Nodes (7): ExecutiveOverviewProps, NarrativeViewProps, REPORT_SECTIONS, SOURCE_ICON, ReportViewerProps, sections, NarrativeReport

### Community 15 - "Community 15"
Cohesion: 0.17
Nodes (10): SectionState, Sidebar(), RecordingState, SpeechRecognitionConstructor, SpeechRecognitionErrorData, SpeechRecognitionEventData, SpeechRecognitionInstance, SpeechRecognitionResult (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.20
Nodes (6): CELL_LUMINANCE, DEFAULT_CATEGORIES, IMPACT_LABELS, PROBABILITY_LABELS, RiskPanel(), RiskPanelProps

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (9): 1. Prerequisites, 2. Optional API Key, 3. Quick Start (No Coding Required), AI-Enhanced Roadmap OS (Phase 1 MVP), Before You Start, Data Input Format, First Run Workflow, Project Structure (+1 more)

### Community 19 - "Community 19"
Cohesion: 0.50
Nodes (3): AIProviderType, SettingsModal(), SettingsModalProps

## Knowledge Gaps
- **170 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+165 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Feature` connect `Community 0` to `Community 2`, `Community 3`, `Community 4`, `Community 8`, `Community 11`, `Community 12`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `SignalEvent` connect `Community 3` to `Community 0`, `Community 2`, `Community 6`, `Community 11`, `Community 14`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `useAppStore` connect `Community 12` to `Community 4`, `Community 10`, `Community 11`, `Community 15`, `Community 19`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _170 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1091581868640148 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.058029689608636977 - nodes in this community are weakly interconnected._