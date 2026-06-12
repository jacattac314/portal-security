# Graph Report - JD-Automation-System  (2026-06-08)

## Corpus Check
- 55 files · ~53,042 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1007 nodes · 1385 edges · 74 communities (61 shown, 13 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.53)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b9ce64d1`
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
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]

## God Nodes (most connected - your core abstractions)
1. `GeminiClient` - 46 edges
2. `Orchestrator` - 35 edges
3. `AntigravityRunner` - 30 edges
4. `ArtifactManager` - 25 edges
5. `startRunLegacy()` - 19 edges
6. `build` - 17 edges
7. `Project Summary` - 17 edges
8. `InputValidationError` - 16 edges
9. `User` - 15 edges
10. `Run` - 15 edges

## Surprising Connections (you probably didn't know these)
- `CreateRepoRequest` --uses--> `AntigravityRunner`  [INFERRED]
  api/server.py → modules/antigravity_runner.py
- `CreateRepoRequest` --uses--> `GeminiClient`  [INFERRED]
  api/server.py → modules/gemini_client.py
- `CreateRepoResponse` --uses--> `AntigravityRunner`  [INFERRED]
  api/server.py → modules/antigravity_runner.py
- `CreateRepoResponse` --uses--> `GeminiClient`  [INFERRED]
  api/server.py → modules/gemini_client.py
- `ValidateTokenRequest` --uses--> `AntigravityRunner`  [INFERRED]
  api/server.py → modules/antigravity_runner.py

## Import Cycles
- None detected.

## Communities (74 total, 13 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (40): buildFallbackEnhancedIdea(), buildFallbackPRD(), checkApiServer(), checkAuth(), countFeatures(), createGitHubRepo(), enhanceIdeaAPI(), escapeHtml() (+32 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (44): Advanced Questions, Can I add my own project templates?, Can I customize the generated projects?, Can I delete a generated project?, Can I deploy to the cloud?, Can I modify the generated code before publishing?, Can I process multiple job descriptions?, Can I run it without API keys? (+36 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (30): demo_analysis_and_ideation(), Demo script to test the system without requiring full API configuration. This cr, Demo the analysis and ideation modules., ProjectIdeation, Any, Project Ideation Module (DEPRECATED).  This module was part of the original JD-b, Determine primary category from skills., Score how well a template matches the skills. (+22 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (13): Sanitize project name to valid GitHub repo name., sanitize_repo_name(), API integration tests using FastAPI TestClient.  Tests endpoint request/response, TestAuthEndpoints, TestCreateRepoEndpoint, TestEnhanceIdeaEndpoint, TestGeneratePRDEndpoint, TestHealthEndpoint (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (35): Analytics (Optional), Android (Chrome/Edge), Chrome/Edge (Windows/Mac/Linux), Desktop Applications, Desktop PWA Installation, Distribution Guide, Download Page Template, For Desktop Apps (+27 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (34): Anthropic (Required for Claude Code), API Key Setup, AWS EC2 Example, Backup and Recovery, Backup Important Data, Basic Usage, Build and Run, Cloud Deployment (Advanced) (+26 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (31): 1. **Intelligent JD Analysis**, 2. **AI-Powered Project Generation**, 3. **Automated Specification Creation**, 4. **Autonomous Implementation**, 5. **GitHub Integration**, 6. **LinkedIn Publishing**, 7. **Local-First Architecture**, 🙏 Acknowledgments (+23 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (17): AntigravityRunner, ImplementationProgress, Any, Path, Antigravity Runner Module.  Interfaces with Claude Code CLI for autonomous featu, Create instruction file for Claude Code based on PRD and features., Build a focused prompt for implementing a single feature., Tracks implementation progress for real-time reporting. (+9 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (28): Antigravity Runner (`modules/antigravity_runner.py`), Architecture Diagram, Architecture Documentation, Artifact Manager (`modules/artifact_manager.py`), CLI (`cli/main.py`), Config (`core/config.py`), Core Layer, Data Flow (+20 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (28): author, dependencies, electron-log, electron-updater, description, devDependencies, electron, electron-builder (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.10
Nodes (25): create_jwt(), decode_jwt(), decrypt_token(), encrypt_token(), exchange_code_for_token(), get_current_user_token(), _get_fernet(), get_github_user() (+17 more)

### Community 11 - "Community 11"
Cohesion: 0.21
Nodes (23): CreateRepoRequest, CreateRepoResponse, EnhanceIdeaRequest, EnhanceIdeaResponse, GeneratePRDRequest, GeneratePRDResponse, PushFilesRequest, Validate GitHub token and return username. (+15 more)

### Community 12 - "Community 12"
Cohesion: 0.08
Nodes (23): background_color, categories, description, display, icons, name, orientation, text (+15 more)

### Community 13 - "Community 13"
Cohesion: 0.09
Nodes (21): auth_github_redirect(), get_current_user(), get_run_status(), health_check(), push_files(), FastAPI server for JD Automation System.  Exposes idea enhancement, PRD generati, Health check endpoint., Get the GitHub OAuth authorization URL. (+13 more)

### Community 14 - "Community 14"
Cohesion: 0.09
Nodes (22): Adding a New Module, Adding Project Templates, Areas for Contribution, Code Review Process, Coding Standards, Contributing to JD Automation System, Development Setup, Documentation (+14 more)

### Community 15 - "Community 15"
Cohesion: 0.17
Nodes (22): check_python_version(), Colors, create_standalone_python(), get_platform_info(), install_dependencies(), install_virtualenv(), main(), optimize_distribution() (+14 more)

### Community 16 - "Community 16"
Cohesion: 0.14
Nodes (20): auth_github_callback(), list_runs(), Handle GitHub OAuth callback — exchange code for token and create session., Get the authenticated user's run history from the database., ApiUsage, get_daily_usage(), get_db(), get_or_create_user() (+12 more)

### Community 17 - "Community 17"
Cohesion: 0.14
Nodes (10): InputValidationError, Validate and sanitize the application idea input.      Returns:         Cleaned, Pipeline step states., Raised when pipeline input validation fails., RunStatus, validate_app_idea(), Tests for the Orchestrator module.  Tests feature extraction, topological sortin, TestFeatureExtraction (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.16
Nodes (10): Any, Build prompt for PRD generation., Try to extract and parse JSON from a Gemini response., Validate PRD structure and attempt AI-powered refinement for weak areas., Identify quality issues in the PRD., Use Gemini to refine weak areas of the PRD., Apply basic structural fixes to the PRD without AI., Generate a domain-aware PRD structure if API fails.          Analyzes the enhanc (+2 more)

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (17): Basic Usage, Configuration, "Configuration errors", Directory Structure, Example, GitHub authentication fails, Installation, "Module not found" (+9 more)

### Community 20 - "Community 20"
Cohesion: 0.17
Nodes (17): check_git(), check_python_version(), create_directories(), create_env_file(), install_dependencies(), main(), print_header(), print_next_steps() (+9 more)

### Community 21 - "Community 21"
Cohesion: 0.12
Nodes (16): Architecture, CLI Mode, Desktop App (Electron), 📥 Get the App, Installation, License, Local-First Job Description Automation System, One-Click Startup (Development) (+8 more)

### Community 22 - "Community 22"
Cohesion: 0.16
Nodes (5): Validate the structure of an enhanced idea before PRD generation.      Raises:, Validate PRD structure before feature extraction.      Raises:         InputVali, validate_enhanced_idea(), validate_prd(), TestInputValidation

### Community 23 - "Community 23"
Cohesion: 0.13
Nodes (15): license, build, appId, appImage, asar, compression, copyright, directories (+7 more)

### Community 24 - "Community 24"
Cohesion: 0.20
Nodes (14): check_dependencies(), check_env_file(), check_python_version(), Colors, create_directories(), main(), open_browser(), print_banner() (+6 more)

### Community 25 - "Community 25"
Cohesion: 0.18
Nodes (8): Any, Path, Execute the full pipeline with retry logic and validation.          Args:, Update run status and notify callback if registered., Extract features from the PRD, ordered by dependency graph then priority., Sort features respecting epic dependency ordering.          Returns None if depe, Create initial repository files., Save run to local history.

### Community 26 - "Community 26"
Cohesion: 0.17
Nodes (8): { app, BrowserWindow, ipcMain, dialog, Menu }, { autoUpdater }, createMenu(), createWindow(), http, log, path, { spawn }

### Community 27 - "Community 27"
Cohesion: 0.15
Nodes (13): nsis, allowToChangeInstallationDirectory, createDesktopShortcut, createStartMenuShortcut, deleteAppDataOnUninstall, installerHeaderIcon, installerIcon, license (+5 more)

### Community 28 - "Community 28"
Cohesion: 0.21
Nodes (8): GitHubService, Any, Path, Sanitize project name to valid GitHub repo name., Check if repository already exists., Manages GitHub repository operations., Create a new GitHub repository.                  Args:             project_name:, Publish local project to GitHub.          Args:             local_path: Path to

### Community 29 - "Community 29"
Cohesion: 0.17
Nodes (12): linux, Categories, Comment, Name, artifactName, category, description, desktop (+4 more)

### Community 30 - "Community 30"
Cohesion: 0.18
Nodes (11): 1. Bundle Python Runtime, 2. Install Node Dependencies, 3. Build and Package, Build for All Platforms (macOS only), Build for Linux (on any platform), Build for macOS (must be on macOS), Build for Windows (on any platform), Desktop App (Electron) (+3 more)

### Community 31 - "Community 31"
Cohesion: 0.20
Nodes (8): cli(), Command-line interface for JD Automation System.  New flow: App Idea -> AI Enhan, Configure API keys and settings., JD Automation System — Idea to Implementation.      Transform application ideas, Run the automation pipeline to build an app from an idea., run(), setup(), Main entry point for JD Automation System.

### Community 32 - "Community 32"
Cohesion: 0.25
Nodes (6): Path, Organize project files into proper structure.                  Args:, Create standard directory structure., Move documentation files to docs/ directory., Move log files to logs/ directory., Remove temporary and cache files safely.

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (6): client(), configured_client(), Tests for the GeminiClient module.  Tests prompt generation, JSON parsing, PRD v, Create a GeminiClient with no API key (unconfigured)., Create a GeminiClient with a mocked model., TestParseJsonResponse

### Community 34 - "Community 34"
Cohesion: 0.22
Nodes (10): create_repo(), enhance_idea(), _execute_pipeline(), generate_prd(), Create a new GitHub repository., Enhance a raw application idea using Gemini AI., Generate a comprehensive PRD with epics, user stories, and features., Execute the full pipeline in a background thread. (+2 more)

### Community 35 - "Community 35"
Cohesion: 0.20
Nodes (9): Building JD Automation System, Development Mode, File Structure, Hot Reload, Publishing Checklist, Resources, Run Without Building, Support (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.24
Nodes (5): Core configuration and secrets management for JD Automation System.  Handles loa, Main orchestration engine for JD Automation System.  Coordinates the pipeline fr, JD Automation System - Main Package, Artifact Manager Module.  Organizes and cleans up project artifacts., GitHub Integration Module.  Handles repository creation, management, and publish

### Community 37 - "Community 37"
Cohesion: 0.20
Nodes (6): LinkedInService, Any, LinkedIn Integration Module.  Creates LinkedIn project entries via API., Manages LinkedIn profile project integration., Create a project entry on LinkedIn profile.                  Args:             t, Verify LinkedIn access token is valid.

### Community 38 - "Community 38"
Cohesion: 0.20
Nodes (10): mac, artifactName, category, entitlements, entitlementsInherit, gatekeeperAssess, hardenedRuntime, icon (+2 more)

### Community 39 - "Community 39"
Cohesion: 0.20
Nodes (9): mock_gemini_model(), Shared test fixtures for JD Automation System tests., A realistic app idea for testing., A mocked Gemini generative model., A sample enhanced idea dict as returned by GeminiClient.enhance_idea()., A sample PRD structure as returned by GeminiClient.generate_prd()., sample_app_idea(), sample_enhanced_idea() (+1 more)

### Community 40 - "Community 40"
Cohesion: 0.22
Nodes (4): Build prompt for idea enhancement., Enhance a raw application idea into a structured product concept.          Args:, Generate a basic enhanced idea if API fails., ValueError

### Community 41 - "Community 41"
Cohesion: 0.22
Nodes (9): App won't start: "Port 8000 already in use", Build fails with "Cannot find module", "electron-builder" command not found, Large app size (200+ MB), macOS: "App is damaged and can't be opened", "Python not found" error, Service Worker not registering (PWA), Troubleshooting (+1 more)

### Community 42 - "Community 42"
Cohesion: 0.25
Nodes (5): Config, Central configuration management., Get secret from keyring or environment variable., Store secret in keyring., Validate that required configuration is present.

### Community 43 - "Community 43"
Cohesion: 0.25
Nodes (7): [0.1.0] - 2026-01-23, Added, Changelog, Notes, Planned, Security, [Unreleased]

### Community 44 - "Community 44"
Cohesion: 0.25
Nodes (8): dmg, background, contents, icon, title, window, height, width

### Community 45 - "Community 45"
Cohesion: 0.29
Nodes (4): BaseSettings, Path, Application settings loaded from environment variables., Settings

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (7): Auto-Updates, Disabling Auto-Updates, Distribution, Hosting Installers, Option 1: GitHub Releases (Recommended), Option 2: Custom Server, Testing Auto-Updates

### Community 47 - "Community 47"
Cohesion: 0.43
Nodes (3): Execute a function with exponential backoff retry.      Args:         fn: Functi, retry_with_backoff(), TestRetryWithBackoff

### Community 48 - "Community 48"
Cohesion: 0.38
Nodes (4): GeminiClient, Gemini Client Module.  Generates enhanced app descriptions and comprehensive PRD, Client for Google Gemini API., test_module()

### Community 50 - "Community 50"
Cohesion: 0.33
Nodes (6): Linux, macOS, Platform-Specific Requirements, Prerequisites, Required Software, Windows

### Community 54 - "Community 54"
Cohesion: 0.40
Nodes (5): Build Configuration, Change App Icon, Change App Name, Change Version, Customization

### Community 55 - "Community 55"
Cohesion: 0.40
Nodes (5): Code Signing, macOS Signing, Skip Signing (Development), Why Sign Your App?, Windows Signing

### Community 56 - "Community 56"
Cohesion: 0.40
Nodes (5): Deploying PWA, Features, How It Works, Progressive Web App (PWA), Testing PWA Locally

### Community 57 - "Community 57"
Cohesion: 0.40
Nodes (4): Auto-Generation, PWA Icons, Required Sizes, Shortcuts (Optional)

### Community 58 - "Community 58"
Cohesion: 0.40
Nodes (5): publish, owner, provider, releaseType, repo

### Community 59 - "Community 59"
Cohesion: 0.40
Nodes (5): win, artifactName, icon, publish, target

### Community 60 - "Community 60"
Cohesion: 0.50
Nodes (3): App Icons, Icon Generation, Recommended Icon Sizes

### Community 61 - "Community 61"
Cohesion: 0.50
Nodes (4): Advanced Topics, Build on CI/CD, Custom Electron Settings, Custom Python Dependencies

## Knowledge Gaps
- **353 isolated node(s):** `allow`, `allow`, `Fernet`, `Path`, `{ app, BrowserWindow, ipcMain, dialog, Menu }` (+348 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GeminiClient` connect `Community 48` to `Community 33`, `Community 34`, `Community 36`, `Community 40`, `Community 11`, `Community 13`, `Community 17`, `Community 18`, `Community 49`, `Community 51`, `Community 52`, `Community 25`, `Community 63`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `Orchestrator` connect `Community 11` to `Community 34`, `Community 36`, `Community 7`, `Community 13`, `Community 47`, `Community 48`, `Community 17`, `Community 22`, `Community 25`, `Community 28`, `Community 31`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `AntigravityRunner` connect `Community 7` to `Community 34`, `Community 36`, `Community 11`, `Community 13`, `Community 17`, `Community 25`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Are the 20 inferred relationships involving `GeminiClient` (e.g. with `CreateRepoRequest` and `CreateRepoResponse`) actually correct?**
  _`GeminiClient` has 20 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `Orchestrator` (e.g. with `CreateRepoRequest` and `CreateRepoResponse`) actually correct?**
  _`Orchestrator` has 19 INFERRED edges - model-reasoned connections that need verification._
- **Are the 15 inferred relationships involving `AntigravityRunner` (e.g. with `CreateRepoRequest` and `CreateRepoResponse`) actually correct?**
  _`AntigravityRunner` has 15 INFERRED edges - model-reasoned connections that need verification._
- **Are the 15 inferred relationships involving `ArtifactManager` (e.g. with `CreateRepoRequest` and `CreateRepoResponse`) actually correct?**
  _`ArtifactManager` has 15 INFERRED edges - model-reasoned connections that need verification._