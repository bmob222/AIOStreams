#!/bin/bash
set -e

echo "Installing dependencies with pnpm..."
corepack enable
pnpm install --frozen-lockfile

echo "Building frontend package..."
cd packages/frontend

# Clear any npm cache/config that might interfere
export npm_config_workspaces_ignore_scripts=false
export npm_config_verify_deps_before_run=false

# Build directly without pnpm wrapper
echo "Running next build..."
./node_modules/.bin/next build

echo "Build complete!"
