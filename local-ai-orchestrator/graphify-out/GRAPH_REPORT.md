# Graph Report - local-ai-orchestrator  (2026-06-08)

## Corpus Check
- 77 files · ~51,087 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2104 nodes · 3368 edges · 110 communities (99 shown, 11 thin omitted)
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 686 edges (avg confidence: 0.55)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `31f43192`
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
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 91|Community 91]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 102|Community 102]]
- [[_COMMUNITY_Community 103|Community 103]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Community 106|Community 106]]
- [[_COMMUNITY_Community 107|Community 107]]
- [[_COMMUNITY_Community 108|Community 108]]
- [[_COMMUNITY_Community 109|Community 109]]

## God Nodes (most connected - your core abstractions)
1. `ModelMetrics` - 60 edges
2. `OllamaAdapter` - 53 edges
3. `RoutingProfile` - 48 edges
4. `ModelScore` - 46 edges
5. `CompositeScorer` - 46 edges
6. `Router` - 40 edges
7. `RedisCache` - 34 edges
8. `OpenRouterAdapter` - 32 edges
9. `BenchmarkSource` - 31 edges
10. `InMemoryCache` - 29 edges

## Surprising Connections (you probably didn't know these)
- `Path` --uses--> `HuggingFaceAdapter`  [INFERRED]
  tests/test_huggingface_adapter.py → src/orchestrator/adapters/huggingface.py
- `DatabaseManager` --uses--> `DatabaseManager`  [INFERRED]
  tests/conftest.py → src/orchestrator/db/manager.py
- `HuggingFaceAdapter` --uses--> `HuggingFaceAdapter`  [INFERRED]
  tests/test_huggingface_adapter.py → src/orchestrator/adapters/huggingface.py
- `TestHuggingFaceAdapter` --uses--> `HuggingFaceAdapter`  [INFERRED]
  tests/test_huggingface_adapter.py → src/orchestrator/adapters/huggingface.py
- `LMSYSAdapter` --uses--> `LMSYSAdapter`  [INFERRED]
  tests/test_lmsys_adapter.py → src/orchestrator/adapters/lmsys.py

## Import Cycles
- 1-file cycle: `src/orchestrator/adapters/huggingface.py -> src/orchestrator/adapters/huggingface.py`
- 1-file cycle: `src/orchestrator/adapters/openrouter.py -> src/orchestrator/adapters/openrouter.py`
- 1-file cycle: `src/orchestrator/api/app.py -> src/orchestrator/api/app.py`
- 1-file cycle: `src/orchestrator/cache/base.py -> src/orchestrator/cache/base.py`
- 1-file cycle: `src/orchestrator/resilience.py -> src/orchestrator/resilience.py`
- 1-file cycle: `tests/test_security.py -> tests/test_security.py`

## Communities (110 total, 11 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (75): add_custom_model(), BudgetUpdateRequest, ChatChoice, ChatCompletionRequest, ChatCompletionResponse, check_budget_allowed(), create_chat_completion(), CustomModelRequest (+67 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (41): ComplexityClassifier, ComplexityFeatures, ComplexityLevel, ComplexityResult, Prompt complexity classification for intelligent routing., Initialize classifier with token thresholds.          Args:             simple_t, Rough token count (words * 1.3 approximation)., Extract classification features from text. (+33 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (41): cache_adapter_response(), cache_model_rankings(), create_cache(), get_cache(), get_cached_adapter_response(), get_cached_model_rankings(), initialize_cache(), invalidate_rankings() (+33 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (29): AsyncClient, Client, HttpClient, RateLimitError, HTTP client with retry logic, timeouts, and rate limit handling., Make an HTTP request with retry logic.          Args:             method: HTTP m, Raised when API rate limit is hit., Make a DELETE request. (+21 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (25): OllamaAdapter, Close the HTTP client., Adapter for Ollama local LLM service.          Discovers locally installed model, Initialize Ollama adapter.                  Args:             host: Ollama API h, Check if Ollama is running and accessible., Test connection to Ollama API., Test successful data fetch., Test graceful handling when Ollama is not running. (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (23): Redis cache backend implementation., Ensure we're connected to Redis., Get a value from the cache., Redis cache backend for distributed caching.      Best for:     - Multi-instance, Set a value in the cache., Delete a value from the cache., Check if a key exists in the cache., Clear cache entries matching pattern. (+15 more)

### Community 6 - "Community 6"
Cohesion: 0.04
Nodes (44): Adapter Layer, API Authentication, API Layer, Architecture, Benchmark Sync Lifecycle, Caching Strategy, Circuit Breaker, Complexity Classifier (+36 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (23): InMemoryCache, Test connection status., Test basic set and get operations., Test get returns None for missing key., Test set with custom TTL., Test delete operation., Test delete returns False for nonexistent key., Test exists operation. (+15 more)

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (29): NormalizedValue, Normalize quality metric using min-max scaling.          Higher quality scores m, Normalize latency using log scaling with inversion.          Lower latency maps, Result of metric normalization., Normalize cost using log scaling with inversion.          Lower cost maps to hig, Normalize context length using log scaling., Normalize a metric value to [0, 1] range.          Args:             value: Raw, Normalize a batch of values. (+21 more)

### Community 9 - "Community 9"
Cohesion: 0.05
Nodes (40): API Key Management, AWS ECS Setup, Backup & Recovery, Configuration Reference, Core Settings, Database connection errors, Database Security, Database Setup (+32 more)

### Community 10 - "Community 10"
Cohesion: 0.08
Nodes (31): analyzePrompt(), DEMO_BUDGET, DEMO_DATA, elements, fetchAPI(), filterModels(), formatModelName(), formatNumber() (+23 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (40): Acknowledgments, API Reference, Component Breakdown, Configuration, Contributing, 💰 Cost Optimization, Data Flow, Deployment (+32 more)

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (25): OllamaModel, Ollama adapter for local LLM models.  Discovers and manages local models via the, Represents an Ollama local model., Get cached list of discovered models., Model size in gigabytes., Human-readable display name., Tests for Ollama adapter., Tests for OllamaModel dataclass. (+17 more)

### Community 13 - "Community 13"
Cohesion: 0.07
Nodes (22): ContextLengthNormalizer, LatencyNormalizer, MetricNormalizer, Metric normalizers for routing score calculation., Normalizer for latency metrics (p90, TTFT).      Latency is "lower is better", s, Initialize latency normalizer.          Args:             metric_name: Name of t, Normalizer for context length (tokens).      Larger context is generally better,, Initialize context length normalizer.          Args:             min_context: Mi (+14 more)

### Community 14 - "Community 14"
Cohesion: 0.07
Nodes (23): TestClient, Tests for API endpoints., Test rankings with specific profile., Test rankings with limit., Tests for routing profiles endpoint., Test getting routing profiles., Tests for models list endpoint., Test listing available models. (+15 more)

### Community 15 - "Community 15"
Cohesion: 0.09
Nodes (17): RedisCache, Tests for RedisCache backend., Create a test Redis cache instance., Test initial connection status is False., Test value serialization/deserialization., Test deserialization of invalid data., Test successful connection (mocked)., Test connection failure handling. (+9 more)

### Community 16 - "Community 16"
Cohesion: 0.09
Nodes (23): ABC, BenchmarkSource, Abstract base class for benchmark data sources., Validate the raw response structure.          Override this to add source-specif, Raw metric data from a benchmark source.      Represents a single metric measure, Abstract base class for benchmark data sources.      Implement this class to add, Unique identifier for this source.          Returns:             Source name (e., Recommended sync interval in minutes.          Returns:             Minutes betw (+15 more)

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (17): OpenRouterAdapter, Adapter for OpenRouter API.      Fetches model information including:     - Pric, Initialize the OpenRouter adapter.          Args:             api_key: OpenRoute, Tests for OpenRouter adapter., Test that all metrics have the correct source., Test source name property., Test sync interval property., Test response validation with valid data. (+9 more)

### Community 18 - "Community 18"
Cohesion: 0.09
Nodes (24): BudgetPeriod, BudgetStatus, Budget management service. Tracks spending and enforces configurable budget limi, Current budget status., Current spending summary., SpendSummary, str, Tests for budget management service. (+16 more)

### Community 19 - "Community 19"
Cohesion: 0.09
Nodes (24): classifier(), large_model_set(), ComplexityClassifier, CompositeScorer, ModelMetrics, Performance benchmarks for routing components.  Run with: pytest -m performance, Benchmark router selection speed., Benchmark routing with 100 models. (+16 more)

### Community 20 - "Community 20"
Cohesion: 0.09
Nodes (19): get_model_service(), ModelDataCache, ModelDataService, Model data service for providing real-time model metrics. Fetches and caches dat, Remove a custom model by name., Get a custom model by name., List all custom models., Check if cache is still valid. (+11 more)

### Community 21 - "Community 21"
Cohesion: 0.08
Nodes (18): Model, ModelAlias, AliasRepository, Repository for managing model aliases., Update an existing alias.          Args:             alias: The alias to update, Remove an alias mapping.          Args:             alias: The alias to remove, Repository for managing model alias mappings.      Handles CRUD operations for t, Get aliases pending human review.          Args:             limit: Maximum numb (+10 more)

### Community 22 - "Community 22"
Cohesion: 0.07
Nodes (29): 1.1 Fix CHANGELOG.md Formatting, 1.2 Add Missing Test Coverage for New Features, 1.3 API Schema Documentation, 1.4 Error Handling Audit, 2.1 Redis Distributed Caching, 2.2 Request Quota Management, 2.3 WebSocket Streaming Support, 2.4 Enhanced Monitoring & Observability (+21 more)

### Community 23 - "Community 23"
Cohesion: 0.08
Nodes (17): CircuitBreaker, Get or create circuit breaker for a model., Record a successful model call., Record a failed model call., Get the current status of a model's circuit breaker., Manually reset a model's circuit breaker., Reset all circuit breakers., Circuit breaker for model failure handling.      Tracks failures and temporarily (+9 more)

### Community 24 - "Community 24"
Cohesion: 0.10
Nodes (16): Tests for UrlValidator., Test valid external URL passes., Test HTTP scheme is allowed., Test blocks 10.x.x.x range., Test blocks 192.168.x.x range., Test blocks 172.16.x.x range., Test blocks localhost hostname., Test blocks 127.0.0.1. (+8 more)

### Community 25 - "Community 25"
Cohesion: 0.09
Nodes (17): BudgetManager, Tests for spend summary calculation., Create a manager with mocked storage., Test summary when storage is not initialized., Test summary with healthy budget status., Test summary with warning status (approaching limit)., Test summary with exceeded status., Test that disabled limits (0) don't trigger warnings. (+9 more)

### Community 26 - "Community 26"
Cohesion: 0.09
Nodes (16): CacheBackend, Set a value in the cache.          Args:             key: Cache key, Delete a value from the cache.          Args:             key: Cache key, Check if a key exists in the cache.          Args:             key: Cache key, Clear cache entries.          Args:             pattern: Optional pattern to mat, Get multiple values from the cache.          Args:             keys: List of cac, Set multiple values in the cache.          Args:             items: Dict mapping, Close the cache connection. (+8 more)

### Community 27 - "Community 27"
Cohesion: 0.12
Nodes (16): Router, NormalizationMethod, Methods for normalizing metric values., CompositeScorer, ModelMetrics, Tests for CompositeScorer., Test scoring a single model., Test ranking multiple models. (+8 more)

### Community 28 - "Community 28"
Cohesion: 0.09
Nodes (15): CostNormalizer, Normalizer for cost metrics (price per million tokens).      Cost is "lower is b, Initialize cost normalizer.          Args:             metric_name: Name of the, Tests for routing normalizers, profiles, scorer, and router., Test expensive models score low., Tests for RoutingProfile., Test weights are normalized to sum to 1.0., Test composite score calculation. (+7 more)

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (13): InMemoryCache, In-memory cache backend implementation., Clear cache entries matching pattern., Set multiple values in the cache., In-memory cache backend using a simple dictionary.      Best for:     - Single-i, Close the cache and stop cleanup task., Evict oldest entry without acquiring lock (caller must hold lock)., Remove all expired entries. (+5 more)

### Community 30 - "Community 30"
Cohesion: 0.11
Nodes (14): CacheEntry, A cached value with metadata.      Attributes:         key: Cache key         va, Check if entry has expired., Get age of entry in seconds., Get remaining TTL in seconds, or None if no expiry., Tests for CacheEntry dataclass., Test expires_at calculation with TTL., Test expires_at returns None without TTL. (+6 more)

### Community 31 - "Community 31"
Cohesion: 0.12
Nodes (13): HuggingFaceAdapter, Test parsing nested result structures., Test that benchmark average is calculated., Test cache save and load., Test content hash computation., Tests for HuggingFaceAdapter., Test source name is correct., Test sync interval is 24 hours. (+5 more)

### Community 32 - "Community 32"
Cohesion: 0.11
Nodes (14): DataPruner, Cleans old metrics from the database.      Runs as a scheduled job to prevent un, Initialize data pruner.          Args:             retention_days: Days to retai, Set database manager (for deferred initialization)., Delete metrics older than retention period.          Returns:             Number, Mark models as inactive if not updated recently.          Args:             days, Run all pruning tasks.          Returns:             Dict with counts for each p, Any (+6 more)

### Community 33 - "Community 33"
Cohesion: 0.13
Nodes (12): AnalyticsCollector, Analytics event collector. Records routing decisions, API calls, and usage metri, Write buffered events to storage., Get analytics summary for the specified period., Get time-series usage data., Get per-model usage breakdown., A single routing decision event., Collects and stores analytics events.          Thread-safe event collection with (+4 more)

### Community 34 - "Community 34"
Cohesion: 0.13
Nodes (21): analytics(), chat(), cli(), get_client(), health(), main(), models(), profiles() (+13 more)

### Community 35 - "Community 35"
Cohesion: 0.12
Nodes (13): MatchResult, Similarity matching using Levenshtein distance., Find the best matching candidate for a query.          Args:             query:, Find all matching candidates above threshold.          Args:             query:, Get the current match threshold., Set the match threshold., Similarity matcher using Levenshtein distance.      Calculates edit distance bet, Initialize the matcher.          Args:             threshold: Minimum similarity (+5 more)

### Community 36 - "Community 36"
Cohesion: 0.11
Nodes (12): DatabaseManager, Database connection manager with SQLite WAL mode support., Create all tables if they don't exist., Drop all tables. Use with caution!, Check if the database connection is healthy.          Returns:             True, Run VACUUM to optimize the SQLite database., Manages database connections and sessions with SQLite optimizations., Initialize the database manager.          Args:             database_url: SQLAlc (+4 more)

### Community 37 - "Community 37"
Cohesion: 0.14
Nodes (12): OfflineCache, Path, Test retrieve_stale returns old data when needed., Test clearing specific source., Test clearing all cache., Tests for OfflineCache., Create temporary cache directory., Test storing and retrieving data. (+4 more)

### Community 38 - "Community 38"
Cohesion: 0.11
Nodes (15): DatabaseManager, Tests for database models., Tests for the Model class., Tests for ModelAlias., Test creating a model alias., Tests for RoutingIndex., Test creating a model., Test creating a routing index entry. (+7 more)

### Community 39 - "Community 39"
Cohesion: 0.13
Nodes (12): FastAPI, TestClient, Tests for security module: URL validation and API key middleware., Create app with API key auth., Test health endpoint doesn't require auth., Test protected endpoint requires auth., Test missing Authorization header returns 401., Test invalid header format returns 401. (+4 more)

### Community 40 - "Community 40"
Cohesion: 0.16
Nodes (12): ChatCompletion, Orchestrator API Client HTTP client with sync and async support., Orchestrator Client SDK Python client library for the AI Orchestrator API., AnalyticsSummary, ModelRanking, Pydantic models for Orchestrator API responses., A ranked model with scores., Result of a routing decision. (+4 more)

### Community 41 - "Community 41"
Cohesion: 0.14
Nodes (11): LMSYSAdapter, Test cache age tracking., Tests for LMSYSAdapter., Test source name is correct., Test sync interval is 6 hours., Test CSV response validation., Test JSON response validation., Test invalid response validation. (+3 more)

### Community 42 - "Community 42"
Cohesion: 0.15
Nodes (11): EntityResolver, Resolves model names across different benchmark sources.      Uses normalization, Tests for EntityResolver., Sample canonical models., Test exact match resolution., Test high confidence match., Test medium confidence match needs review., Test batch resolution. (+3 more)

### Community 43 - "Community 43"
Cohesion: 0.12
Nodes (10): Fetch list of models from Ollama.                  Returns:             Raw resp, Parse Ollama models response into RawMetric objects.                  Creates qu, Parse raw model data into OllamaModel., Estimate quality score for a local model.                  Uses heuristics based, Estimate context window size based on model family., Pull a model from Ollama registry.                  Args:             model_name, Generate completion using Ollama.                  Args:             model: Mode, Chat completion using Ollama (OpenAI-compatible format).                  Args: (+2 more)

### Community 44 - "Community 44"
Cohesion: 0.14
Nodes (10): BudgetConfig, Load configuration from file., Budget configuration and limits.          All limits are in USD. Set to 0 to dis, Tests for BudgetConfig dataclass., Test default configuration values., Test custom configuration values., Test serialization to dictionary., Test deserialization from dictionary. (+2 more)

### Community 45 - "Community 45"
Cohesion: 0.12
Nodes (11): NameNormalizer, NameNormalizer, Name normalization for model name matching., Aggressively normalize for comparison purposes.          Strips all common varia, Extract vendor prefix from model name.          Args:             name: Model na, Extract the base model name without vendor.          Args:             name: Ful, Initialize the name normalizer.          Args:             strip_version: Remove, Normalize a model name.          Args:             name: Original model name (+3 more)

### Community 46 - "Community 46"
Cohesion: 0.11
Nodes (10): Tests for entity resolution components., Test finding best match from candidates., Test finding best fuzzy match., Test when no match is found., Test finding all matching candidates., Tests for SimilarityMatcher., Test exact match returns 1.0., Test Levenshtein distance calculation. (+2 more)

### Community 47 - "Community 47"
Cohesion: 0.18
Nodes (11): OpenRouterModel, Validate the OpenRouter response structure., Parse OpenRouter response into RawMetric objects., Parse pricing information from model.          Calculates:         - cost_prompt, Parse latency information from model.          Extracts p90 latency (with p50 fa, Synchronous version of fetch_and_parse.          Useful for scheduler jobs that, Model data from OpenRouter API., Fetch model data from OpenRouter API. (+3 more)

### Community 48 - "Community 48"
Cohesion: 0.15
Nodes (9): BudgetManager, Initialize with storage backend and load config., Persist configuration to file., Update budget configuration., Get current spending summary with status.                  Returns spending for, Get total spend for time period., Check if a request should be allowed based on budget.                  Args:, Get complete budget status for API response. (+1 more)

### Community 49 - "Community 49"
Cohesion: 0.12
Nodes (9): Initialize the analytics storage., AnalyticsStorage, Get time-series data with bucketed aggregation., SQLite storage for analytics events.          Handles persistence and aggregatio, Get detailed per-model statistics., Delete events older than the specified number of days., Initialize the database schema., Insert multiple events in a batch. (+1 more)

### Community 50 - "Community 50"
Cohesion: 0.13
Nodes (13): BaseHTTPMiddleware, Exception, JSONResponse, ApiKeyMiddleware, get_api_key_header(), Security utilities: URL validation and API key middleware., FastAPI middleware for API key authentication.      Validates Bearer token in Au, Raised when URL validation fails. (+5 more)

### Community 51 - "Community 51"
Cohesion: 0.16
Nodes (10): NoReturn, main(), Orchestrator, Main entry point for the orchestrator application., Stop all services gracefully., Main orchestrator application coordinating all services., Initialize the orchestrator., Sync job callback for OpenRouter data. (+2 more)

### Community 52 - "Community 52"
Cohesion: 0.16
Nodes (10): CachedResponse, Cached adapter response., Get age of cache in seconds., Check if cache is older than max age., Tests for CachedResponse dataclass., Test cached_at converts timestamp to datetime., Test age_seconds calculates correctly., Test is_stale returns False for fresh cache. (+2 more)

### Community 53 - "Community 53"
Cohesion: 0.12
Nodes (9): Tests for BudgetManager., Create a temporary config file path., Create a mock analytics storage., Test manager initialization., Test that initialize loads existing config file., Test saving configuration to file., Test updating configuration values., Test that update_config clamps values to valid ranges. (+1 more)

### Community 54 - "Community 54"
Cohesion: 0.12
Nodes (9): Tests for NameNormalizer., Test basic name normalization., Test version suffix stripping., Test vendor prefix stripping., Test variant suffix normalization., Test aggressive normalization for comparison., Test vendor extraction., Test base model extraction. (+1 more)

### Community 55 - "Community 55"
Cohesion: 0.13
Nodes (14): [0.1.0] - 2025-01-29, Added, Added, Changed, Changelog, Documentation, Fixed, Future Roadmap (+6 more)

### Community 56 - "Community 56"
Cohesion: 0.16
Nodes (13): Base, SQLAlchemy declarative base with common columns., Base class for all SQLAlchemy models., BenchmarkSourceRecord, Model, ModelAlias, SQLAlchemy models for the orchestrator database., AI model information from various providers. (+5 more)

### Community 57 - "Community 57"
Cohesion: 0.15
Nodes (8): OrchestratorClient, Simple chat interface - send a message, get a response.                  Args:, OpenAI-compatible chat completions endpoint.                  Args:, Stream chat completion responses., Python client for the AI Orchestrator API.          Example:         ```python, Get list of all available models., Initialize the Orchestrator client.                  Args:             base_url:, Check API health status.

### Community 58 - "Community 58"
Cohesion: 0.18
Nodes (9): OfflineCache, Retrieve cached response.          Args:             source: Source adapter name, Retrieve cached response even if stale.          Use when live fetch fails and a, Clear cache.          Args:             source: Specific source to clear, or Non, Cache for adapter responses to enable offline fallback.      Stores last known g, Initialize offline cache.          Args:             cache_dir: Directory to sto, Get cache file path for a source., Store response data in cache.          Args:             source: Source adapter (+1 more)

### Community 59 - "Community 59"
Cohesion: 0.14
Nodes (7): LMSYSAdapter, LMSYS Chatbot Arena adapter for ELO ratings., Validate the response structure., Adapter for LMSYS Chatbot Arena leaderboard.      Fetches ELO ratings and confid, Find a column value by trying multiple possible column names., Get age of cached data in hours, or None if no cache., Initialize the LMSYS adapter.          Args:             cache_last_response: Wh

### Community 60 - "Community 60"
Cohesion: 0.15
Nodes (9): AnalyticsAggregator, Analytics aggregator utilities. Helper functions for computing derived metrics., Compute an efficiency score balancing quality vs cost/latency., Identify anomalous time buckets based on request volume.                  Return, Aggregated usage statistics., Computes derived metrics from raw analytics data., Compute derived statistics from a summary., Estimate monthly costs based on daily usage.                  Args: (+1 more)

### Community 61 - "Community 61"
Cohesion: 0.18
Nodes (11): create_app(), lifespan(), FastAPI application for the AI orchestrator., Application lifespan events., Create and configure the FastAPI application., FastAPI, client(), Verify API can start. (+3 more)

### Community 62 - "Community 62"
Cohesion: 0.19
Nodes (8): Validate a URL for safety.          Args:             url: URL to validate, Check if hostname matches any allowed domain., Check if URL is valid without raising exception., Validates and sanitizes URLs before HTTP requests.      Provides SSRF protection, Initialize URL validator.          Args:             allowed_domains: Optional a, Check if IP address is in a private range., Check if hostname is blocked., UrlValidator

### Community 63 - "Community 63"
Cohesion: 0.19
Nodes (7): QualityNormalizer, Initialize quality normalizer.          Args:             metric_name: Name of t, Normalizer for quality metrics (ELO, benchmark scores).      Quality metrics are, Tests for QualityNormalizer., Test ELO rating normalization., Test benchmark score normalization., TestQualityNormalizer

### Community 64 - "Community 64"
Cohesion: 0.19
Nodes (8): DatabaseManager, Tests for the DatabaseManager., Test database initialization., Test session context manager., Test that sessions rollback on exception., Test vacuum operation., Tests for DatabaseManager., TestDatabaseManager

### Community 65 - "Community 65"
Cohesion: 0.17
Nodes (7): Check if a key exists in the cache., Get multiple values from the cache., Evict the oldest entry (must hold lock)., Return health status with cache statistics., Get a value from the cache., Set a value in the cache., Any

### Community 66 - "Community 66"
Cohesion: 0.18
Nodes (10): Enum, get_profile(), ProfileType, Routing profiles for different use case priorities., Get a routing profile by name.      Args:         name: Profile name      Return, Predefined routing profile types., CircuitState, Main router for model selection with fallback handling. (+2 more)

### Community 67 - "Community 67"
Cohesion: 0.17
Nodes (7): Resolve multiple source names.          Args:             source_names: List of, Get entities that need human review.          Args:             resolved: List o, Get entities that were auto-linked with high confidence.          Args:, Get entities with no good match.          Args:             resolved: List of re, Result of entity resolution., Resolve a source model name to a canonical model.          Args:             sou, ResolvedEntity

### Community 68 - "Community 68"
Cohesion: 0.15
Nodes (6): APScheduler-based background job service., Background job scheduler with persistence.      Uses APScheduler with SQLAlchemy, Check if the scheduler is running., Initialize the scheduler service.          Args:             database_url: SQLAl, Shutdown the scheduler.          Args:             wait: Wait for running jobs t, SchedulerService

### Community 69 - "Community 69"
Cohesion: 0.17
Nodes (6): HuggingFaceAdapter, HuggingFace Open LLM Leaderboard adapter for benchmark scores., Compute SHA256 hash of content for differential downloads., Validate the response structure., Adapter for HuggingFace Open LLM Leaderboard.      Fetches benchmark scores incl, Initialize the HuggingFace adapter.          Args:             cache_dir: Direct

### Community 70 - "Community 70"
Cohesion: 0.18
Nodes (4): AsyncOrchestratorClient, Async version of OrchestratorClient., Close the HTTP client., Quick health check returning boolean.

### Community 71 - "Community 71"
Cohesion: 0.17
Nodes (7): Tests for Ollama API operations., Test successful model pull., Test model pull error handling., Test successful generation., Test successful chat completion., Test closing the adapter., TestOllamaOperations

### Community 72 - "Community 72"
Cohesion: 0.27
Nodes (6): Parse HuggingFace response into RawMetric objects., Parse the latest_results.json format.          This typically contains a list of, Parse the API response format., Extract benchmark scores from model data.          Normalizes scores to 0-100 sc, Synchronous fetch and parse for scheduler jobs., RawMetric

### Community 73 - "Community 73"
Cohesion: 0.24
Nodes (6): Parse LMSYS response into RawMetric objects., Parse CSV format leaderboard data.          Expected columns (may vary):, Parse Gradio config JSON as fallback.          The leaderboard data is typically, Find column index by trying multiple possible names., Synchronous fetch and parse for scheduler jobs., RawMetric

### Community 74 - "Community 74"
Cohesion: 0.31
Nodes (6): Fetch from Gradio config as fallback., Update the response cache., Fetch data from LMSYS (async wrapper for sync method)., Fetch data from LMSYS with fallback strategy.          Tries in order:         1, Any, SyncHttpClient

### Community 75 - "Community 75"
Cohesion: 0.22
Nodes (8): BaseSettings, get_settings(), Configuration module using Pydantic Settings., Application settings loaded from environment variables., Get the data directory path., Get cached settings instance., Settings, Path

### Community 76 - "Community 76"
Cohesion: 0.20
Nodes (6): Test builtin profiles are accessible., Verify routing components work., Test router can be created., Test scorer can be created., Test classifier can be created., TestCanaryRouting

### Community 77 - "Community 77"
Cohesion: 0.20
Nodes (6): Verify all critical modules can be imported., Test core module imports., Test routing module imports., Test API module imports., Test security module imports., TestCanaryImports

### Community 78 - "Community 78"
Cohesion: 0.31
Nodes (5): Save data to cache file., Load data from cache file., Fetch data from HuggingFace (async wrapper)., Fetch benchmark data from HuggingFace.          Uses differential download by ch, Any

### Community 79 - "Community 79"
Cohesion: 0.22
Nodes (8): Additional Notes, Changes Made, Checklist, Related Issues, Screenshots (if applicable), Summary, Testing, Type of Change

### Community 80 - "Community 80"
Cohesion: 0.22
Nodes (8): Acknowledgments, How to Report, Known Security Considerations, Reporting a Vulnerability, Security Best Practices, Security Policy, Supported Versions, What to Expect

### Community 81 - "Community 81"
Cohesion: 0.22
Nodes (8): db_manager(), DatabaseManager, Pytest configuration and fixtures., Create a temporary database file., Create a DatabaseManager with a temporary database., Sample OpenRouter API response for testing., sample_openrouter_response(), temp_db_path()

### Community 82 - "Community 82"
Cohesion: 0.22
Nodes (8): hf_adapter(), Path, Tests for HuggingFace adapter., Create a HuggingFace adapter with temp cache dir., Sample HuggingFace results data., Sample HuggingFace results with normalized scores (0-100)., sample_hf_results(), sample_hf_results_normalized()

### Community 83 - "Community 83"
Cohesion: 0.29
Nodes (5): Close the database engine and release resources., Get or create the session factory., Get a database session with automatic cleanup.          Yields:             SQLA, sessionmaker, Session

### Community 84 - "Community 84"
Cohesion: 0.29
Nodes (6): Metric, Metrics collected from benchmark sources., Tests for the Metric class., Test creating a metric linked to a model., Test the model-metric relationship., TestMetric

### Community 85 - "Community 85"
Cohesion: 0.25
Nodes (5): Tests for configuration file persistence., Test that config changes persist across manager instances., Test graceful handling of corrupted config file., Test that config file parent directories are created., TestConfigPersistence

### Community 86 - "Community 86"
Cohesion: 0.25
Nodes (5): Canary tests for deployment health checks.  Run with: pytest -m canary These tes, Verify configuration loads correctly., Test settings instance exists., Test data directory is configured., TestCanaryConfig

### Community 87 - "Community 87"
Cohesion: 0.25
Nodes (7): lmsys_adapter(), Tests for LMSYS adapter., Create a LMSYS adapter instance., Sample LMSYS CSV data., Sample LMSYS Gradio JSON config., sample_lmsys_csv(), sample_lmsys_gradio_json()

### Community 88 - "Community 88"
Cohesion: 0.33
Nodes (4): RoutingProfile, Get all available routing profiles., Get a specific routing profile by name., ChatMessage

### Community 89 - "Community 89"
Cohesion: 0.29
Nodes (4): Resilience utilities: offline cache and data pruning., Get timestamp as datetime., datetime, Tests for resilience module: offline cache and data pruning.

### Community 90 - "Community 90"
Cohesion: 0.33
Nodes (4): AnalyticsSummary, Get analytics summary for the specified period.                  Args:, ChatCompletion, A chat completion response.

### Community 91 - "Community 91"
Cohesion: 0.33
Nodes (5): Attribution, Contributor Covenant Code of Conduct, Enforcement, Our Pledge, Our Standards

### Community 92 - "Community 92"
Cohesion: 0.40
Nodes (3): ModelRanking, Get ranked models based on a routing profile.                  Args:, Get the top-ranked model for a profile.

### Community 93 - "Community 93"
Cohesion: 0.33
Nodes (3): Add an interval-based job to the scheduler.          Args:             job_id: U, Remove a job from the scheduler.          Args:             job_id: Unique ident, Trigger immediate execution of a job.          Args:             job_id: Unique

### Community 94 - "Community 94"
Cohesion: 0.50
Nodes (3): BackgroundScheduler, Get or create the scheduler instance., Create and configure the APScheduler instance.

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (3): Abstract base class for cache backends., Get expiration time, or None if no TTL., datetime

### Community 96 - "Community 96"
Cohesion: 0.40
Nodes (4): Code of Conduct, Contributing to Local AI Orchestrator, Development Setup, Getting Started

### Community 97 - "Community 97"
Cohesion: 0.40
Nodes (3): Get the status of a job.          Args:             job_id: Unique identifier of, List all scheduled jobs.          Returns:             List of job status dicts, Any

### Community 98 - "Community 98"
Cohesion: 0.50
Nodes (3): MatchConfidence, Entity resolver for matching models across benchmark sources., Confidence levels for entity matches.

## Knowledge Gaps
- **158 isolated node(s):** `isGitHubPages`, `state`, `elements`, `DEMO_DATA`, `DEMO_BUDGET` (+153 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `OpenRouterAdapter` connect `Community 17` to `Community 16`, `Community 51`, `Community 20`, `Community 47`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **Why does `BenchmarkSource` connect `Community 16` to `Community 4`, `Community 69`, `Community 72`, `Community 73`, `Community 74`, `Community 43`, `Community 12`, `Community 78`, `Community 47`, `Community 17`, `Community 59`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Why does `ModelMetrics` connect `Community 0` to `Community 1`, `Community 66`, `Community 8`, `Community 13`, `Community 19`, `Community 20`, `Community 23`, `Community 27`, `Community 28`, `Community 63`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Are the 54 inferred relationships involving `ModelMetrics` (e.g. with `ModelDataCache` and `ModelDataService`) actually correct?**
  _`ModelMetrics` has 54 INFERRED edges - model-reasoned connections that need verification._
- **Are the 36 inferred relationships involving `OllamaAdapter` (e.g. with `BenchmarkSource` and `RawMetric`) actually correct?**
  _`OllamaAdapter` has 36 INFERRED edges - model-reasoned connections that need verification._
- **Are the 42 inferred relationships involving `RoutingProfile` (e.g. with `BudgetUpdateRequest` and `ChatChoice`) actually correct?**
  _`RoutingProfile` has 42 INFERRED edges - model-reasoned connections that need verification._
- **Are the 39 inferred relationships involving `ModelScore` (e.g. with `BudgetUpdateRequest` and `ChatChoice`) actually correct?**
  _`ModelScore` has 39 INFERRED edges - model-reasoned connections that need verification._