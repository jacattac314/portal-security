# Graph Report - AI-Project-Autopilot-Agent  (2026-06-08)

## Corpus Check
- 89 files · ~70,458 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1312 nodes · 1949 edges · 89 communities (76 shown, 13 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 58 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `43127aa5`
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
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]

## God Nodes (most connected - your core abstractions)
1. `WorkItem` - 51 edges
2. `Risk` - 33 edges
3. `Orchestrator` - 17 edges
4. `build` - 17 edges
5. `Project Summary` - 17 edges
6. `ProjectAutopilot` - 16 edges
7. `ProjectIdeation` - 15 edges
8. `JDAnalyzer` - 15 edges
9. `GitHubClient` - 15 edges
10. `formatDateHuman()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `TestAnalyzeJDEndpoint` --uses--> `GenerateSpecRequest`  [INFERRED]
  JD-Automation-System/tests/test_api_workflow.py → JD-Automation-System/api/server.py
- `TestBuildSpecificationPrompt` --uses--> `GenerateSpecRequest`  [INFERRED]
  JD-Automation-System/tests/test_api_workflow.py → JD-Automation-System/api/server.py
- `TestGenerateSpecEndpoint` --uses--> `GenerateSpecRequest`  [INFERRED]
  JD-Automation-System/tests/test_api_workflow.py → JD-Automation-System/api/server.py
- `TestHelperFunctions` --uses--> `GenerateSpecRequest`  [INFERRED]
  JD-Automation-System/tests/test_api_workflow.py → JD-Automation-System/api/server.py
- `TestResponseModels` --uses--> `GenerateSpecRequest`  [INFERRED]
  JD-Automation-System/tests/test_api_workflow.py → JD-Automation-System/api/server.py

## Import Cycles
- None detected.

## Communities (89 total, 13 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (52): analyzeJDWithAI(), cancelSelection(), checkApiServer(), checkSystemStatus(), closeWizard(), createGitHubRepo(), executePipeline(), extractSkills() (+44 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (44): Advanced Questions, Can I add my own project templates?, Can I customize the generated projects?, Can I delete a generated project?, Can I deploy to the cloud?, Can I modify the generated code before publishing?, Can I process multiple job descriptions?, Can I run it without API keys? (+36 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (20): GitHubClient, GitHubClientConfig, JiraClientConfig, JiraIssue, NotionClient, NotionClientConfig, createWorkItemId(), normalizePriority() (+12 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (41): author, dependencies, axios, dotenv, node-cron, @notionhq/client, octokit, openai (+33 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (19): FollowUpGenerator, FollowUpGeneratorConfig, PreviousRiskState, RiskLogGeneratorConfig, SprintData, SprintSummaryGeneratorConfig, Artifact, ArtifactFormat (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (35): Analytics (Optional), Android (Chrome/Edge), Chrome/Edge (Windows/Mac/Linux), Desktop Applications, Desktop PWA Installation, Distribution Guide, Download Page Template, For Desktop Apps (+27 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (34): Anthropic (Required for Claude Code), API Key Setup, AWS EC2 Example, Backup and Recovery, Backup Important Data, Basic Usage, Build and Run, Cloud Deployment (Advanced) (+26 more)

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (33): alerts, allocation_by_team, capacity, allocated_gpus, available_gpus, gpu_type, reserved_gpus, total_gpus (+25 more)

### Community 8 - "Community 8"
Cohesion: 0.06
Nodes (32): Analyze JD, API Endpoint Verification, API Server Won't Start, Automated Test Results, Cancellation, DESIGN.md Not Pushed, Edge Cases to Test, Empty/Invalid Inputs (+24 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (20): aiConfigSchema, AIProviderType, Config, configSchema, getEnvOrDefault(), githubConfigSchema, isSourceConfigured(), jiraConfigSchema (+12 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (31): 1. **Intelligent JD Analysis**, 2. **AI-Powered Project Generation**, 3. **Automated Specification Creation**, 4. **Autonomous Implementation**, 5. **GitHub Integration**, 6. **LinkedIn Publishing**, 7. **Local-First Architecture**, 🙏 Acknowledgments (+23 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (28): Config, create_repo(), CreateRepoRequest, CreateRepoResponse, health_check(), push_files(), PushFilesRequest, FastAPI server for JD Automation frontend.  Exposes GitHub, Gemini, and other se (+20 more)

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (28): Antigravity Runner (`modules/antigravity_runner.py`), Architecture Diagram, Architecture Documentation, Artifact Manager (`modules/artifact_manager.py`), CLI (`cli/main.py`), Config (`core/config.py`), Core Layer, Data Flow (+20 more)

### Community 13 - "Community 13"
Cohesion: 0.07
Nodes (28): author, dependencies, electron-log, electron-updater, description, devDependencies, electron, electron-builder (+20 more)

### Community 14 - "Community 14"
Cohesion: 0.10
Nodes (20): demo_analysis_and_ideation(), Demo script to test the system without requiring full API configuration. This cr, Demo the analysis and ideation modules., Any, ProjectIdeation, Project Ideation Module.  Generates project ideas based on JD requirements., Determine primary category from skills., Generates relevant project ideas based on job requirements. (+12 more)

### Community 15 - "Community 15"
Cohesion: 0.07
Nodes (27): 1.1 Add Unit Test Suite, 1.2 Implement Zod Config Validation, 1.3 Validate API Responses, 2.1 Eliminate `any` Types, 2.2 Create Custom Error Types, 2.3 Add Partial Failure Handling, 3.1 Extract Magic Numbers, 3.2 Consolidate Risk Scoring Weights (+19 more)

### Community 16 - "Community 16"
Cohesion: 0.07
Nodes (26): AI-Generated Follow-up, 📊 **AI-Powered Artifact Generation**, AI Project Autopilot Agent, API Credentials Setup, Architecture, Configuration, Configuration Options, Daily Risk Report (+18 more)

### Community 17 - "Community 17"
Cohesion: 0.19
Nodes (20): RiskScorerConfig, RiskSummary, StalledItem, StalledWorkConfig, DEADLINE_THRESHOLDS, DEFAULT_RISK_WEIGHTS, INACTIVITY_SCORING, MONITORING_DEFAULTS (+12 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (23): background_color, categories, description, display, icons, name, orientation, text (+15 more)

### Community 19 - "Community 19"
Cohesion: 0.09
Nodes (22): Adding a New Module, Adding Project Templates, Areas for Contribution, Code Review Process, Coding Standards, Contributing to JD Automation System, Development Setup, Documentation (+14 more)

### Community 20 - "Community 20"
Cohesion: 0.09
Nodes (21): 🙏 Acknowledgments, 🛠️ AI Project Scaffolding (NEW!), 🔌 API Endpoints, 🔧 Configuration, 🤝 Contributing, 📄 Design Document Generation, ✨ Features, Getting API Keys (+13 more)

### Community 21 - "Community 21"
Cohesion: 0.17
Nodes (3): RiskScorer, JiraClient, WorkItem

### Community 22 - "Community 22"
Cohesion: 0.21
Nodes (10): StalledWorkAnalyzer, daysBetween(), daysSince(), daysUntil(), formatDate(), getRelativeTime(), getSprintStart(), isWithinDays() (+2 more)

### Community 23 - "Community 23"
Cohesion: 0.17
Nodes (11): Orchestrator, Prompt user to confirm project idea., Create initial repository files., Create LinkedIn project description., Save run to local history., Main orchestration engine., Execute the full pipeline.          Args:             job_description: The job d, Any (+3 more)

### Community 24 - "Community 24"
Cohesion: 0.11
Nodes (17): Basic Usage, Configuration, "Configuration errors", Directory Structure, Example, GitHub authentication fails, Installation, "Module not found" (+9 more)

### Community 25 - "Community 25"
Cohesion: 0.17
Nodes (17): check_git(), check_python_version(), create_directories(), create_env_file(), install_dependencies(), main(), print_header(), print_next_steps() (+9 more)

### Community 26 - "Community 26"
Cohesion: 0.21
Nodes (10): main(), ProjectAutopilot, generateSampleRisks(), generateSampleWorkItems(), getImpactDescription(), getSuggestedActions(), isDemoMode(), randomDate() (+2 more)

### Community 27 - "Community 27"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, lib, module, outDir (+8 more)

### Community 28 - "Community 28"
Cohesion: 0.27
Nodes (15): clean_runtime(), cleanup_file(), Colors, download_file(), install_pip_and_deps(), main(), print_error(), print_step() (+7 more)

### Community 29 - "Community 29"
Cohesion: 0.16
Nodes (11): AnalyzeJDResponse, API Workflow Tests for JD Automation System.  Tests the multi-project selection, Test /api/validate-token endpoint., Invalid token should return valid=False., Test /api/generate-spec endpoint (requires Gemini key)., Should fail gracefully without Gemini key., Test response model structure validation., AnalyzeJDResponse should have correct structure. (+3 more)

### Community 30 - "Community 30"
Cohesion: 0.18
Nodes (8): Core configuration and secrets management for JD Automation System.  Handles loa, Main orchestration engine for JD Automation System.  Coordinates the entire pipe, JD Automation System - Main Package, Antigravity Runner Module.  Interfaces with Google Antigravity and Claude Code f, # TODO: Implement core functionality, Gemini Client Module.  Generates technical specifications using Google's Gemini, GitHub Integration Module.  Handles repository creation, management, and publish, LinkedIn Integration Module.  Creates LinkedIn project entries via API.

### Community 31 - "Community 31"
Cohesion: 0.21
Nodes (9): Path, ArtifactManager, Artifact Manager Module.  Organizes and cleans up project artifacts., Manages project artifacts and file organization., Organize project files into proper structure.                  Args:, Create standard directory structure., Move documentation files to docs/ directory., Move log files to logs/ directory. (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.17
Nodes (10): Any, JDAnalyzer, Extract experience level from JD., Analyzes job descriptions to extract key information., Extract key responsibilities., Extract technical skills from job description.          Args:             job_de, Convert keyword to proper case., Extract structured requirements from JD.          Args:             job_descript (+2 more)

### Community 33 - "Community 33"
Cohesion: 0.13
Nodes (15): license, build, appId, appImage, asar, compression, copyright, directories (+7 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (14): check_dependencies(), check_env_file(), check_python_version(), Colors, create_directories(), main(), open_browser(), print_banner() (+6 more)

### Community 35 - "Community 35"
Cohesion: 0.18
Nodes (10): Generate 3 project ideas using Gemini., Suggest projects based on skills (Fallback)., suggest_projects_ai(), suggest_projects_static(), Test static project suggestion fallback., Should always return exactly 3 project suggestions., ML-heavy skills should return ML-focused projects., Cloud-heavy skills should return cloud-focused projects. (+2 more)

### Community 36 - "Community 36"
Cohesion: 0.18
Nodes (8): Config, Validate that required configuration is present., Central configuration management., Load user settings from JSON file., Save a non-sensitive preference to file., Get secret from keyring or environment variable., Store secret in keyring., Any

### Community 37 - "Community 37"
Cohesion: 0.17
Nodes (11): analyze_job_description(), AnalyzeJDRequest, proper_case(), Analyze job description and extract skills., Sanitize project name to valid GitHub repo name., Convert keyword to proper case., sanitize_repo_name(), Test helper functions. (+3 more)

### Community 38 - "Community 38"
Cohesion: 0.17
Nodes (8): { app, BrowserWindow, ipcMain, dialog, Menu, shell }, { autoUpdater }, createMenu(), createWindow(), http, log, path, { spawn }

### Community 39 - "Community 39"
Cohesion: 0.32
Nodes (3): RiskLogGenerator, RiskLogArtifact, RiskLogEntry

### Community 40 - "Community 40"
Cohesion: 0.19
Nodes (8): Any, Path, GitHubService, Sanitize project name to valid GitHub repo name., Check if repository already exists., Manages GitHub repository operations., Create a new GitHub repository.                  Args:             project_name:, Publish local project to GitHub.          Args:             local_path: Path to

### Community 41 - "Community 41"
Cohesion: 0.15
Nodes (13): nsis, allowToChangeInstallationDirectory, createDesktopShortcut, createStartMenuShortcut, deleteAppDataOnUninstall, installerHeaderIcon, installerIcon, license (+5 more)

### Community 42 - "Community 42"
Cohesion: 0.17
Nodes (12): linux, Categories, Comment, Name, artifactName, category, description, desktop (+4 more)

### Community 43 - "Community 43"
Cohesion: 0.21
Nodes (3): MetricEntry, metrics, MetricsCollector

### Community 44 - "Community 44"
Cohesion: 0.18
Nodes (8): cli(), Command-line interface for JD Automation System., Configure API keys and settings., Local-First Job Description Automation System.          Transform job descriptio, Run the automation pipeline., run(), setup(), Main entry point for JD Automation System.

### Community 46 - "Community 46"
Cohesion: 0.18
Nodes (11): 1. Bundle Python Runtime, 2. Install Node Dependencies, 3. Build and Package, Build for All Platforms (macOS only), Build for Linux (on any platform), Build for macOS (must be on macOS), Build for Windows (on any platform), Desktop App (Electron) (+3 more)

### Community 47 - "Community 47"
Cohesion: 0.27
Nodes (7): Any, Path, AntigravityRunner, Execute Claude Code.                  Note: This is a placeholder implementation, Runs Claude Code via Antigravity for project implementation., Run autonomous implementation using Claude Code.                  Args:, Create instruction file for Claude Code.

### Community 48 - "Community 48"
Cohesion: 0.24
Nodes (7): build_specification_prompt(), Build prompt for Gemini specification generation., Should truncate very long job descriptions., Test specification prompt building., Prompt should request Purpose Summary at the top., Prompt should include all required specification sections., TestBuildSpecificationPrompt

### Community 49 - "Community 49"
Cohesion: 0.20
Nodes (7): Track run status and progress., RunStatus, Any, LinkedInService, Manages LinkedIn profile project integration., Create a project entry on LinkedIn profile.                  Args:             t, Verify LinkedIn access token is valid.

### Community 50 - "Community 50"
Cohesion: 0.20
Nodes (9): Building JD Automation System, Development Mode, File Structure, Hot Reload, Publishing Checklist, Resources, Run Without Building, Support (+1 more)

### Community 51 - "Community 51"
Cohesion: 0.20
Nodes (10): mac, artifactName, category, entitlements, entitlementsInherit, gatekeeperAssess, hardenedRuntime, icon (+2 more)

### Community 52 - "Community 52"
Cohesion: 0.20
Nodes (6): Test /api/analyze-jd endpoint., Should extract technical skills from JD., Should return 3 suggested projects., Should detect experience level from JD., Empty JD should still return valid response structure., TestAnalyzeJDEndpoint

### Community 54 - "Community 54"
Cohesion: 0.22
Nodes (8): active_alerts, alert_config, critical_benchmarks, email_list, slack_channel, baseline_model, regression_threshold, resolved_alerts

### Community 55 - "Community 55"
Cohesion: 0.22
Nodes (9): App won't start: "Port 8000 already in use", Build fails with "Cannot find module", "electron-builder" command not found, Large app size (200+ MB), macOS: "App is damaged and can't be opened", "Python not found" error, Service Worker not registering (PWA), Troubleshooting (+1 more)

### Community 58 - "Community 58"
Cohesion: 0.25
Nodes (7): generate_specification(), GenerateSpecRequest, GenerateSpecResponse, Generate project specification using Gemini AI., Test health check endpoint., Health endpoint should return ok status., TestHealthEndpoint

### Community 59 - "Community 59"
Cohesion: 0.25
Nodes (7): [0.1.0] - 2026-01-23, Added, Changelog, Notes, Planned, Security, [Unreleased]

### Community 60 - "Community 60"
Cohesion: 0.25
Nodes (8): dmg, background, contents, icon, title, window, height, width

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (7): Auto-Updates, Disabling Auto-Updates, Distribution, Hosting Installers, Option 1: GitHub Releases (Recommended), Option 2: Custom Server, Testing Auto-Updates

### Community 62 - "Community 62"
Cohesion: 0.38
Nodes (4): Any, Generate a basic fallback specification if API fails., Generate a comprehensive application specification.          Args:             j, Build the prompt for specification generation.

### Community 63 - "Community 63"
Cohesion: 0.33
Nodes (6): Linux, macOS, Platform-Specific Requirements, Prerequisites, Required Software, Windows

### Community 64 - "Community 64"
Cohesion: 0.33
Nodes (4): Test the full workflow integration., Test the analyze JD -> project selection flow., Projects should have distinct titles., TestWorkflowIntegration

### Community 66 - "Community 66"
Cohesion: 0.40
Nodes (4): AIConfig, AIMessage, AIProvider, AIResponse

### Community 67 - "Community 67"
Cohesion: 0.40
Nodes (4): Auto-Generation, PWA Icons, Required Sizes, Shortcuts (Optional)

### Community 68 - "Community 68"
Cohesion: 0.40
Nodes (5): Build Configuration, Change App Icon, Change App Name, Change Version, Customization

### Community 69 - "Community 69"
Cohesion: 0.40
Nodes (5): Code Signing, macOS Signing, Skip Signing (Development), Why Sign Your App?, Windows Signing

### Community 70 - "Community 70"
Cohesion: 0.40
Nodes (5): Deploying PWA, Features, How It Works, Progressive Web App (PWA), Testing PWA Locally

### Community 71 - "Community 71"
Cohesion: 0.40
Nodes (5): publish, owner, provider, releaseType, repo

### Community 72 - "Community 72"
Cohesion: 0.40
Nodes (5): win, artifactName, icon, publish, target

### Community 73 - "Community 73"
Cohesion: 0.50
Nodes (3): App Icons, Icon Generation, Recommended Icon Sizes

### Community 74 - "Community 74"
Cohesion: 0.50
Nodes (4): Advanced Topics, Build on CI/CD, Custom Electron Settings, Custom Python Dependencies

### Community 75 - "Community 75"
Cohesion: 0.50
Nodes (3): Test script for the multi-option project selection feature., Test the /api/analyze-jd endpoint, test_analyze_jd()

## Knowledge Gaps
- **551 isolated node(s):** `Config`, `{ app, BrowserWindow, ipcMain, dialog, Menu, shell }`, `{ autoUpdater }`, `path`, `{ spawn }` (+546 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `WorkItem` connect `Community 21` to `Community 2`, `Community 4`, `Community 45`, `Community 17`, `Community 22`, `Community 56`, `Community 57`, `Community 26`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `ProjectIdeation` connect `Community 14` to `Community 49`, `Community 23`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `Orchestrator` connect `Community 23` to `Community 32`, `Community 40`, `Community 44`, `Community 14`, `Community 47`, `Community 49`, `Community 30`, `Community 31`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `Orchestrator` (e.g. with `AntigravityRunner` and `ArtifactManager`) actually correct?**
  _`Orchestrator` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `JD Automation System - Main Package`, `Main entry point for JD Automation System.`, `Config` to the rest of the system?**
  _687 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07199032062915911 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._