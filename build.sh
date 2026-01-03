#!/bin/bash
set -e

# Ensure we're in the root directory
cd "$(dirname "$0")"

# Build core package
echo "Building core package..."
cd packages/core
npm run build
cd ../..

# Build frontend package
echo "Building frontend package..."
cd packages/frontend
npm run build
cd ../..

echo "Build complete!"
