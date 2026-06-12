# Graph Report - Roadmap  (2026-06-08)

## Corpus Check
- 20 files · ~17,227 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 118 nodes · 216 edges · 11 communities (9 shown, 2 thin omitted)
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `NodeData` - 12 edges
3. `NodeType` - 7 edges
4. `Edge` - 7 edges
5. `ExecutionLog` - 6 edges
6. `generateAgentResponse()` - 5 edges
7. `transcribeAudio()` - 5 edges
8. `Project` - 5 edges
9. `RoadmapData` - 5 edges
10. `MODEL_OPTIONS` - 4 edges

## Surprising Connections (you probably didn't know these)
- `PropertiesPanelProps` --references--> `NodeData`  [EXTRACTED]
  components/PropertiesPanel.tsx → types.ts
- `ExecutionModalProps` --references--> `ExecutionLog`  [EXTRACTED]
  components/ExecutionModal.tsx → types.ts
- `GenerationProgressProps` --references--> `ExecutionLog`  [EXTRACTED]
  components/GenerationProgress.tsx → types.ts
- `NodeProps` --references--> `NodeData`  [EXTRACTED]
  components/Node.tsx → types.ts
- `ProjectInputProps` --references--> `Project`  [EXTRACTED]
  components/ProjectInput.tsx → types.ts

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.19
Nodes (16): STEPS, DragMode, DragState, Props, RoadmapVisualizer(), AIInsight, ChatMessage, PriorityLevel (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (18): dependencies, @google/genai, lucide-react, react, react-dom, devDependencies, @types/node, typescript (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.21
Nodes (12): AppState, MeetingState, ViewMode, LandingPage(), LandingPageProps, ProjectInput(), ProjectInputProps, INITIAL_EDGES (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (11): PropertiesPanel(), PropertiesPanelProps, callWithRetry(), GenerateAgentOptions, generateAgentResponse(), GenerateChatOptions, generateChatResponse(), transcribeAudio() (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.32
Nodes (9): Canvas(), CanvasProps, ChatPanel(), ChatPanelProps, Node(), NodeProps, Edge, NodeData (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (6): ExecutionModalProps, GenerationProgress(), GenerationProgressProps, LOADING_MESSAGES, STEPS, ExecutionLog

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (3): description, name, requestFramePermissions

## Knowledge Gaps
- **47 isolated node(s):** `AppState`, `ViewMode`, `MeetingState`, `STEPS`, `STEPS` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `NodeData` connect `Community 5` to `Community 0`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `ExecutionLog` connect `Community 6` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `AppState`, `ViewMode`, `MeetingState` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._