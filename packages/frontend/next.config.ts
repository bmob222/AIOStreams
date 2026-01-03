import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // Increase timeout for static generation (error pages may be slow)
  staticPageGenerationTimeout: 120,
  webpack(config, { isServer }) {
    // Mark Node.js/backend modules as external for both client and server
    config.externals = [...(config.externals || []), 'redis', 'pg', 'sqlite3', 'sqlite', 'undici', 'fetch-socks'];

    // Add aliases to replace problematic modules with stubs
    config.resolve.alias = {
      ...config.resolve.alias,
      'sqlite3$': require.resolve('./sqlite3.stub.js'),
      'sqlite$': require.resolve('./sqlite3.stub.js'),
      'pg$': require.resolve('./sqlite3.stub.js'),
      'redis$': require.resolve('./sqlite3.stub.js'),
      'undici$': require.resolve('./sqlite3.stub.js'),
      'fetch-socks$': require.resolve('./sqlite3.stub.js'),
      'regex$': require.resolve('./sqlite3.stub.js'),
      'make-asynchronous$': require.resolve('./sqlite3.stub.js'),
      'super-regex$': require.resolve('./sqlite3.stub.js'),
      'web-worker$': require.resolve('./sqlite3.stub.js'),
    };

    // Add a custom ignore plugin for both client and server
    const webpack = require('webpack');
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^(redis|pg|sqlite3|sqlite|undici|fetch-socks|regex|make-asynchronous|super-regex|web-worker)$/,
      })
    );

    config.resolve.fallback = {
      ...config.resolve.fallback,
      // Node.js built-in modules - set to false to ignore
      fs: false,
      net: false,
      dns: false,
      path: false,
      url: false,
      crypto: false,
      stream: false,
      buffer: false,
      tls: false,
      events: false,
      util: false,
      http: false,
      https: false,
      zlib: false,
      assert: false,
      'node:buffer': false,
      'node:crypto': false,
      'node:console': false,
      'node:events': false,
      'node:stream': false,
      'node:util': false,
      'node:async_hooks': false,
      'node:assert': false,
      // Third-party Node.js modules
      pg: false,
      redis: false,
      sqlite3: false,
      sqlite: false,
      undici: false,
      'fetch-socks': false,
      // Map imports to avoid bundling
      './ptt.js': './ptt',
      './regex.js': './regex',
      '../utils/languages.js': '../utils/languages',
      '../utils/constants.js': '../utils/constants',
    };

    return config;
  },
};

export default nextConfig;
