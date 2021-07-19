#!/usr/bin/env bash

# Generate api.json
npm run build
node dist/src/doc.js
