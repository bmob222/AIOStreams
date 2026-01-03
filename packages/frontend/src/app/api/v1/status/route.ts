import { NextResponse } from 'next/server';

// Mock status response for frontend-only deployment
const mockStatusResponse = {
  version: '1.0.0',
  tag: 'frontend-only',
  commit: 'frontend-deployment',
  buildTime: new Date().toISOString(),
  commitTime: new Date().toISOString(),
  users: null,
  settings: {
    baseUrl: process.env.BASE_URL || 'https://aiostreams.vercel.app',
    addonName: 'AIOStreams',
    alternateDesign: false,
    protected: false,
    regexFilterAccess: 'none' as const,
    loggingSensitiveInfo: false,
    tmdbApiAvailable: false,
    forced: {
      proxy: {
        enabled: null,
        id: null,
        url: null,
        publicUrl: null,
        publicIp: null,
        credentials: null,
        disableProxiedAddons: false,
        proxiedServices: null,
      },
    },
    defaults: {
      proxy: {
        enabled: null,
        id: null,
        url: null,
        publicUrl: null,
        publicIp: null,
        credentials: null,
        proxiedServices: null,
      },
      timeout: null,
    },
    presets: [],
    services: {},
    limits: {
      maxMergedCatalogSources: 10,
    },
  },
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockStatusResponse,
  });
}
