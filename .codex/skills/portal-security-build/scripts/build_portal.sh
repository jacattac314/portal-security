#!/usr/bin/env bash
set -euo pipefail

repo="${1:-/Applications/portal-security}"

if [[ ! -f "$repo/package.json" || ! -f "$repo/graphify-artifacts.json" ]]; then
  echo "Portal Security repository not found at: $repo" >&2
  exit 1
fi

cd "$repo"
npm run build
