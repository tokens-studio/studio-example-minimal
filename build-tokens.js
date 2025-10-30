#!/usr/bin/env node

/**
 * Simple platform-specific token builder.
 * Usage: node build-tokens.js <platform>
 * Example: node build-tokens.js web
 */

import { spawn } from 'node:child_process';
import path from 'node:path';

const platform = process.argv[2];

if (!platform) {
  console.error('❌ Please specify a platform: npm run build <platform>');
  console.error('   Example: npm run build web');
  process.exit(1);
}

const configFile = path.join('studio-export', `${platform}.js`);

const child = spawn('node', [configFile], { stdio: 'inherit' });

child.on('error', (error) => {
  console.error(`❌ Failed to execute ${configFile}: ${error.message}`);
  process.exit(1);
});

child.on('close', (code) => {
  process.exit(code ?? 0);
});