# Portal Security: PII/PHI Security Audit & DLP Control Center

An interactive, client-side security navigation and governance portal designed to audit repository structures, perform static analysis scans, and simulate Data Loss Prevention (DLP) sanitization for PII/PHI.

## Key Features

1. **Architecture Verification (Graphify Call Flow Audit):**
   - Traces call paths in the codebase using AST graph data.
   - Audits sanitizer placement and flags taint violations where untrusted inputs directly reach logging/telemetry sinks.
   - Audits isolation between raw database models and telemetry log systems.

2. **Static Variable Scanning (Semgrep Rules):**
   - Performs lightweight static analysis on codebase files.
   - Detects unsafe parameter logging routines (e.g., functions with the word `log` accepting `patient`, `health`, or `ssn` arguments).
   - Scans for hardcoded credentials, secret keys, and sensitive variable names.

3. **Data Loss Prevention (DLP Playground):**
   - Simulated live traffic/data ingestion scanner.
   - Detects and redacts sensitive PII/PHI elements: Social Security Numbers (SSN), Phone Numbers, Email Addresses, and ICD-10 medical codes.
   - Features pre-loaded audit scenarios (Medical Transcripts, Database logs, Webhook API Payloads) to test instantly.

## Installation & Running Locally

1. Clone the repository.
2. Start a local HTTP server in the root folder (to bypass CORS restrictions for fetching local AST graphs):
   ```bash
   python3 -m http.server 8080
   ```
3. Open `http://127.0.0.1:8080/portal.html` (or `index.html`) in your browser.
