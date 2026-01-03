/**
 * Browser-safe exports for Next.js frontend
 * Frontend imports use: import { constants, ParsedStream, ... } from '@aiostreams/core'
 */

// Safe constants and languages
export * from './utils/constants.js';
export * as constants from './utils/constants.js';
export * from './utils/languages.js';

// Database schemas and types (NOT db.js which requires PostgreSQL/SQLite)
export * from './db/schemas.js';

/**
 * Backend-only exports (for Node.js server/transformers)
 * These re-export everything from backend modules.
 * Frontend builds will ignore these due to webpack config fallbacks.
 */
export * from './utils/index.js';
export * from './db/index.js';
export * from './main.js';
export * from './parser/index.js';
export * from './formatters/index.js';
export * from './transformers/index.js';
export * from './debrid/index.js';
export * from './proxy/index.js';
export {
  TorBoxSearchAddon,
  GDriveAddon,
  GoogleOAuth,
  GDriveAPI,
  TorBoxSearchAddonError,
  TorznabAddon,
  NewznabAddon,
  ProwlarrAddon,
  KnabenAddon,
  TorrentGalaxyAddon,
  EasynewsSearchAddon,
  EasynewsAuthSchema,
  EasynewsNzbParamsSchema,
  EasynewsApi,
  EasynewsNzbParams,
} from './builtins/index.js';
export { PresetManager } from './presets/index.js';
